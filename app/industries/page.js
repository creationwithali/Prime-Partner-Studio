import React from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-extrabold mb-4">Industries</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">We serve a wide range of industries — from e-commerce to finance. Learn how our solutions adapt to your sector.</p>
        </section>

        <section className="grid gap-6 grid-cols-1 md:grid-cols-3 py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">E-commerce</h3>
            <p className="text-sm text-gray-600">Scale online sales with powerful conversion tools.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Services</h3>
            <p className="text-sm text-gray-600">Optimize onboarding and retention for subscription products.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Finance</h3>
            <p className="text-sm text-gray-600">Secure workflows and compliance for financial services.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
