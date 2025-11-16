import React from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-extrabold mb-4">Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Insights, stories, and tips from our team. Stay updated with product news and best practices.</p>
        </section>

        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 py-8">
          <article className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Welcome to our blog</h3>
            <p className="text-sm text-gray-600">A quick introduction and what to expect in upcoming posts.</p>
          </article>
          <article className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Product updates</h3>
            <p className="text-sm text-gray-600">Latest product improvements and release notes.</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}
