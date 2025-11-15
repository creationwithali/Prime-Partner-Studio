// Test script to create a sample user
import dotenv from 'dotenv'
import { connectDB } from './lib/mongodb.js'
import { User } from './lib/models/User.js'

dotenv.config({ path: '.env.local' })

async function createTestUser() {
  try {
    await connectDB()
    console.log('✅ Connected to MongoDB')

    // Check if user already exists
    const existingUser = await User.findOne({ email: 'test@example.com' })
    if (existingUser) {
      console.log('✅ Test user already exists:', existingUser)
      return
    }

    // Create a new test user
    const newUser = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'hashedpassword123'
    })

    console.log('✅ Test user created successfully:', newUser)
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
  process.exit(0)
}

createTestUser()
