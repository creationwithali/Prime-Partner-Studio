import React from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'
import {
  FaTools,
  FaBath,
  FaBolt,
  FaFire,
  FaRulerCombined,
  FaHome,
  FaDoorOpen,
  FaTasks,
  FaSnowflake,
  FaLock,
  FaBacteria,
  FaBug,
  FaFaucet,
  FaHardHat,
  FaTree,
  FaThLarge,
  FaTint,
  FaWindowRestore,   // Updated for home window
  FaPaintRoller,
  FaCarSide
} from "react-icons/fa";

const services = [
  { icon: <FaTools />, title: "Appliance Repair", desc: "Fast and reliable repair for all home appliances." },
  { icon: <FaBath />, title: "Bathroom Remodel", desc: "Modern and stylish bathroom renovation services." },
  { icon: <FaBolt />, title: "Electrician", desc: "Certified electricians for all electrical needs." },
  { icon: <FaFire />, title: "Fire Damage", desc: "Complete restoration after fire and smoke damage." },
  { icon: <FaRulerCombined />, title: "Flooring", desc: "Durable and premium flooring installation services." },
  { icon: <FaHome />, title: "Foundation", desc: "Expert foundation repair and inspection." },
  { icon: <FaDoorOpen />, title: "Garage Doors", desc: "Professional garage door repair and installation." },
  { icon: <FaTasks />, title: "Gutters", desc: "Gutter installation, cleaning, and maintenance." },
  { icon: <FaSnowflake />, title: "HVAC", desc: "Heating and cooling system repairs and installation." },
  { icon: <FaLock />, title: "Locksmith", desc: "Fast and safe lockout and key replacement services." },
  { icon: <FaBacteria />, title: "Mold", desc: "Certified mold inspection and removal." },
  { icon: <FaBug />, title: "Pest Control", desc: "Effective pest, insect, and rodent control services." },
  { icon: <FaFaucet />, title: "Plumbing", desc: "Leak repairs, pipe fixes, and full plumbing service." },
  { icon: <FaHardHat />, title: "Roofing", desc: "High-quality roof repairs and replacement." },
  { icon: <FaTree />, title: "Tree Services", desc: "Tree trimming, removal, and storm cleanup." },
  { icon: <FaThLarge />, title: "Siding", desc: "Durable siding installation and repair solutions." },
  { icon: <FaTint />, title: "Water Damage", desc: "Emergency water extraction and restoration." },
  { icon: <FaWindowRestore />, title: "Windows", desc: "Professional home window installation and replacement." },
  { icon: <FaPaintRoller />, title: "Painting", desc: "Interior and exterior professional painting services." },
  { icon: <FaCarSide />, title: "Auto Transmission", desc: "Expert transmission repair, maintenance, and replacement." }
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
          >
            <div className="text-[#688ABD] text-5xl mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-extrabold mb-4">Our Products & Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Professional home services and repairs you can trust</p>
          <a href="/signup" className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">Get Started</a>
        </section>

        {/* Services Section */}
        <Services />
      </main>
      <Footer />
    </div>
  )
}
