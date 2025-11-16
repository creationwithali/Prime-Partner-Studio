import React from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'

export default function CenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-extrabold mb-4">Center</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Center resources, training, and events to help you and your team get the most out of our platform.</p>
        </section>

        <section className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Training</h3>
            <p className="text-sm text-gray-600">Live and recorded trainings to onboard your team quickly.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Events</h3>
            <p className="text-sm text-gray-600">Upcoming webinars and community meetups.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
