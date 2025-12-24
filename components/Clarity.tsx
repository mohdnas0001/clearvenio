export default function Clarity() {
  return (
    <section className="relative h-[90vh] min-h-[580px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/clarity-bg.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6 animate-fadeInDown">
            Clarity is our Craft
          </h1>

          {/* Divider */}
          <div
            className="w-20 h-[2px] bg-white mx-auto mb-6 animate-scaleIn"
            style={{ animationDelay: '0.2s' }}
          />

          <p
            className="text-sm md:text-base text-white/90 leading-relaxed animate-fadeInUp"
            style={{ animationDelay: '0.3s' }}
          >
            Our driving force is helping brands stand out, stay consistent, and
            stay understood to the target audience. Whether you are launching,
            evolving, or rebuilding, we bring spark to your ideas and direction
            to your brand.
          </p>
        </div>
      </div>
    </section>
  )
}
