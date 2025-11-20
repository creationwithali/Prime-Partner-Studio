import React from 'react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const blogs = [
  {
    title: "Appliance Repair",
    intro: "That moment your refrigerator hums into silence or your washing machine refuses to drain can send a shiver down any homeowner's spine.",
    points: [
      "The high cost of replacement vs. the savings of repair.",
      "Common repairable appliances: refrigerators, ovens, washers, dryers, dishwashers.",
      "Importance of using certified technicians for correct parts and diagnostics.",
      "DIY dangers: electrical shock, voiding warranties, causing more damage.",
      "Preventive maintenance tips to extend appliance life."
    ],
    image: "ApplianceRepair.jpg"
  },
  {
    title: "Bathroom Remodel",
    intro: "Your bathroom should be a personal sanctuary, not a source of daily frustration. A remodel can transform this essential space.",
    points: [
      "Goals of a remodel: increased functionality, improved aesthetics, higher home value.",
      "Popular trends: walk-in showers, water-efficient fixtures, smart toilets, accessible design.",
      "The process: design consultation, demolition, plumbing/electrical, installation, finishing.",
      "Importance of proper waterproofing and ventilation to prevent mold.",
      "Setting a realistic budget and timeline."
    ],
    image: "BathroomRemodel.jpg"
  },
  {
    title: "Electrician",
    intro: "Electrical issues are more than just an inconvenience; they are a serious safety hazard. Never ignore flickering lights or buzzing outlets.",
    points: [
      "Critical safety role of a licensed electrician.",
      "Common services: installing new outlets, ceiling fans, lighting, circuit breaker repair, panel upgrades.",
      "Warning signs you need an electrician: frequent breaker trips, burning smell, outdated wiring.",
      "The importance of permits and inspections for major work.",
      "Benefits of modern upgrades like smart home integration and surge protection."
    ],
    image: "Electrician.jpg"
  },
  {
    title: "Fire & Water Damage",
    intro: "In the aftermath of a fire or flood, the initial damage is only the beginning. Swift, professional restoration is crucial to saving your home and health.",
    points: [
      "Fire: dealing with soot, smoke odor, and structural weakening.",
      "Fire: securing the property, soot removal, odor neutralization, cleaning, and reconstruction.",
      "Fire: importance of dealing with insurance companies.",
      "Water: hidden danger of mold growth within 24-48 hours.",
      "Water: restoration process including extraction, drying, sanitation, and repairs.",
      "Water: categories of damage (clean, grey, black) and their importance."
    ],
    image: "Fire.jpg"
  },
  {
    title: "HVAC",
    intro: "Your HVAC system is the lungs of your home, responsible for your comfort and air quality all year round.",
    points: [
      "Services: installation, repair, and maintenance of heating and cooling systems.",
      "Benefits of seasonal tune-ups: improved efficiency, lower bills, fewer breakdowns, longer system life.",
      "Signs you need service: strange noises, weak airflow, uneven temperatures, high energy bills.",
      "Modern options: smart thermostats and energy-efficient units."
    ],
    image: "HVAC.jpg"
  }
  // Add remaining blogs similarly...
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-extrabold mb-4">Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, stories, and tips from our team. Stay updated with product news and best practices.
          </p>
        </section>

        <section className="grid gap-8 grid-cols-1 md:grid-cols-2 py-8">
          {blogs.map((blog, index) => (
            <article key={index} className="bg-white rounded-lg shadow p-6">
              {/* Blog Image */}
              <div className="mb-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                <img src={blog.image} alt={blog.title} className="h-full w-full object-cover rounded" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl mb-2">{blog.title}</h3>

              {/* Intro */}
              <p className="text-gray-600 mb-3 italic">{blog.intro}</p>

              {/* Key points */}
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {blog.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
