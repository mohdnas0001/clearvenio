export default function HowWeWorkHero() {
  return (
    <section
      className="text-white relative bg-center bg-cover overflow-hidden h-[70vh]"
      style={{ backgroundImage: "url('/images/how-we-work-bg.png')" }}
    >
      {/* Background image placeholder - replace with actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10  "
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Crect fill=%22%23333%22 width=%221200%22 height=%22600%22/%3E%3C/svg%3E')",
        }}
      ></div>

      <div className="relative z-20 px-4 md:px-8 lg:px-16 py-20 md:py-32">
        <div className="max-w-4xl md:mt-20">
          <h1 className="leading-none text-5xl md:text-7xl lg:text-8xl font-bold mb-12 animate-fadeInDown">
            How We Work
          </h1>

          <p
            className="text-base md:text-lg text-white mb-8 max-w-2xl leading-relaxed animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            Our work follows an end to end model called Clear-LTC© <br /> Listen
            Deeply. Think Clearly. Create Impact.
          </p>

          <button
            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-200 border border-gray-700 animate-scaleIn"
            style={{ animationDelay: '0.3s' }}
          >
            View Full Project
          </button>
        </div>
      </div>
    </section>
  )
}
