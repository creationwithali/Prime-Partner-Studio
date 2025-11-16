import React from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-extrabold mb-4">Help & Support</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Find guides, FAQs, and resources to get the most out of the platform. If you can't find an answer, contact our support team.</p>
        </section>

        <section className="py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Getting Started</h3>
            <p className="text-sm text-gray-600">Step-by-step guides to onboarding and initial configuration.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
