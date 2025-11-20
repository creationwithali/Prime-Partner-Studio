// Quick test script to verify login functionality
// Run: node test-login.js

const bcrypt = require('bcryptjs');

async function testPasswordHash() {
  const testPassword = 'test123';
  
  // Simulate what happens during signup
  const hashedPassword = await bcrypt.hash(testPassword, 10);
  console.log('Hashed password:', hashedPassword);
  
  // Simulate what happens during login
  const isMatch = await bcrypt.compare(testPassword, hashedPassword);
  console.log('Password match:', isMatch);
  
  // Test with wrong password
  const wrongMatch = await bcrypt.compare('wrong123', hashedPassword);
  console.log('Wrong password match:', wrongMatch);
}

testPasswordHash().then(() => {
  console.log('\n✅ Bcrypt is working correctly!');
  console.log('\nNext steps to fix login:');
  console.log('1. Make sure MongoDB is running on localhost:27017');
  console.log('2. Start your dev server: npm run dev');
  console.log('3. Check the terminal for detailed error logs');
  console.log('4. Try signing up a new user first, then logging in');
}).catch(err => {
  console.error('❌ Error:', err.message);
});
