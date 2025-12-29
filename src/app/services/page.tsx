import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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
          {/* Service 1 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Web Development</h3>
            <p className="text-gray-600 dark:text-slate-400">
              Custom websites and web applications built with modern technologies for optimal performance and user experience.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Mobile Apps</h3>
            <p className="text-gray-600 dark:text-slate-400">
              Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-slate-400">
              Beautiful, intuitive designs that enhance user engagement and create memorable digital experiences.
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Brand Identity</h3>
            <p className="text-gray-600 dark:text-slate-400">
              Comprehensive branding solutions that establish your unique identity and resonate with your audience.
            </p>
          </div>

          {/* Service 5 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">SEO Optimization</h3>
            <p className="text-gray-600 dark:text-slate-400">
              Strategic SEO services to improve your search rankings and drive organic traffic to your website.
            </p>
          </div>

          {/* Service 6 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Digital Marketing</h3>
            <p className="text-gray-600 dark:text-slate-400">
              Data-driven marketing strategies to grow your online presence and reach your target audience effectively.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
