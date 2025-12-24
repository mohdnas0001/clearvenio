export default function Intro() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:pr-12 animate-slideInLeft">
          <p className="text-3xl tracking-wider text-gray-500 mb-4 uppercase animate-fadeIn">
            CLEARVENIO
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            Delivering Branding, Communications, Marketing and Digital services,
            Globally.
          </h2>
          <p
            className="text-gray-600 max-w-xl mb-6 animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            We lead brands to clarity and unite communication, culture, design
            and experience to drive impact inside and outside an organisation.
          </p>
          <a
            href="/services"
            className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-200 animate-scaleIn"
            style={{ animationDelay: '0.3s' }}
          >
            See More
          </a>
        </div>

        <div className="flex justify-center lg:justify-end animate-slideInRight">
          <div className="w-full max-w-md shadow-lg rounded overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/images/intro.png"
              alt="Intro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
