export default function Hero() {
  return (
      <section
          className="text-white relative overflow-hidden"
        style={{backgroundImage: "url('/images/hero-section-bg.png')"}}
      >     
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>
      
      {/* Background image placeholder - replace with actual image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Crect fill=%22%23333%22 width=%221200%22 height=%22600%22/%3E%3C/svg%3E')"}}></div>

      <div className="relative z-20 px-4 md:px-8 lg:px-16 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="leading-none text-5xl md:text-7xl lg:text-8xl font-bold mb-12 animate-fadeInDown">
            The Global <br /> Agency.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 my-2 animate-fadeInUp" style={{animationDelay: "0.2s"}}>
            We bring Big Ideas to Life with Clarity.
          </p>
          
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed animate-fadeInUp" style={{animationDelay: "0.3s"}}>
            We help businesses, organisations, and changemakers <br /> transform ideas into brands that <span className="text-yellow-400">inspire action.</span>
          </p>

          <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-200 border border-gray-700 animate-scaleIn" style={{animationDelay: "0.4s"}}>
            Work with Us
          </button>
        </div>
      </div>

      {/* Stats Section */}
<div className="relative z-20 bg-black/60 backdrop-blur-sm w-[90%] mx-auto animate-fadeInUp" style={{animationDelay: "0.5s"}}>
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center stagger-item">
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-sm md:text-base text-gray-300">Businesses Served</div>
            </div>
            <div className="text-center stagger-item">
              <div className="text-3xl md:text-4xl font-bold mb-2">04</div>
              <div className="text-sm md:text-base text-gray-300">Years of Experience</div>
            </div>
            <div className="text-center stagger-item">
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-sm md:text-base text-gray-300">Products Launched</div>
            </div>
            <div className="text-center stagger-item">
              <div className="text-3xl md:text-4xl font-bold mb-2">8+</div>
              <div className="text-sm md:text-base text-gray-300">Regular Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
