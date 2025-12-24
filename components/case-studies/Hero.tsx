export default function CaseStudiesHero() {
  return (
    <section
      className="text-white relative bg-cover bg-center overflow-hidden h-[70vh]"
      style={{ backgroundImage: "url('/images/case-studies-bg.png')" }}
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
        <div className="max-w-4xl flex flex-col md:mt-28 justify-items-end gap-18">
          <h1 className="leading-none text-5xl md:text-7xl lg:text-8xl font-bold mb-12 ">
            Our Projects
          </h1>

          <button className="px-8 py-3 w-fit bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition border border-gray-700">
            View Full Projects
          </button>
        </div>
      </div>
    </section>
  )
}
