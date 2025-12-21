export default function ServicesIntro() {
  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInDown">Our Services</h1>
        <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fadeInUp" style={{animationDelay: "0.1s"}}>
          We are specialists in strategic, operational, and tactical communications. We support
          governments, development partners, and private-sector organisations in raising awareness,
          building trust, and driving meaningful change through well-designed communication
          programmes.
        </p>
        <div className="animate-scaleIn" style={{animationDelay: "0.2s"}}>
          <a
            href="/contact"
            className="inline-block bg-white text-black rounded-full px-6 py-2 font-medium hover:opacity-95 hover:scale-105 transition-all duration-200"
          >
            Work with Us
          </a>
        </div>
      </div>
    </section>
  );
}
