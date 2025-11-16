import React from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-extrabold mb-4">Company</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Learn about our mission, leadership, and values. See how we build products with customers in mind.</p>
        </section>

        <section className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">About Us</h3>
            <p className="text-sm text-gray-600">Our story, mission, and how we help customers succeed.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Team</h3>
            <p className="text-sm text-gray-600">Meet the people behind the product.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Careers</h3>
            <p className="text-sm text-gray-600">Open roles and how to join our team.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
