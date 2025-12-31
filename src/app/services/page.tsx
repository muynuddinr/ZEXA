import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { SERVICES } from '@/lib/services';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black pt-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-teal-500">Services</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
