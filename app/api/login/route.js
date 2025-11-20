import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectDB } from '@/lib/mongodb'
import { User } from '@/lib/models/User'

export async function POST(req) {
  try {
    // Connect to database
    await connectDB()

    // Parse request body
    const body = await req.json()
    const { email, password } = body

    console.log('Login attempt for email:', email)

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Query user from database with password field
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      console.log('User not found:', email)
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      )
    }

    console.log('User found:', user.email)

    // Check if password exists
    if (!user.password) {
      console.error('User has no password set:', email)
      return NextResponse.json(
        { message: 'Account error. Please contact support.' },
        { status: 500 }
      )
    }

    // Compare password with hashed password in database
    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
      console.log('Password mismatch for:', email)
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      )
    }

    console.log('Login successful for:', email)

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )

    // Return success response with token
    return NextResponse.json(
      {
        message: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Login error:', error)
    console.error('Error stack:', error.stack)
    
    // Return detailed error in development
    const isDev = process.env.NODE_ENV !== 'production'
    return NextResponse.json(
      { 
        message: isDev ? `Server error: ${error.message}` : 'Internal server error',
        ...(isDev && { error: error.message, stack: error.stack })
      },
      { status: 500 }
    )
  }
}
