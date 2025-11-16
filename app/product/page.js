import React from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-extrabold mb-4">Product</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our product suite built to help you grow faster. Explore features, integrations, and pricing tailored to teams of all sizes.</p>
          <a href="/signup" className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">Get Started</a>
        </section>

        <section className="grid gap-6 grid-cols-1 md:grid-cols-3 py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-gray-600">Real-time metrics and dashboards to measure growth and performance.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Integrations</h3>
            <p className="text-sm text-gray-600">Connect to your favorite tools with first-class integrations.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm text-gray-600">Enterprise-grade security and compliance for your data.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
