import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectDB } from '@/lib/mongodb'
import { User } from '@/lib/models/User'

export async function POST(req) {
  try {
    await connectDB()

    const { name, email, password } = await req.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists with that email' },
        { status: 409 }
      )
    }

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user in database
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )

    // Return success response with token
    return NextResponse.json(
      {
        message: 'Signup successful',
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
        token,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)

    // Handle validation errors from MongoDB schema
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors)
        .map((err) => err.message)
        .join(', ')
      return NextResponse.json(
        { message: messages },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
