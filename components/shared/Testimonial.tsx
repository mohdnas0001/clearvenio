export default function Testimonial() {
  return (
    <section className="relative mb-10 h-[60vh]  w-full overflow-hidden bg-black">
    

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6">
            Testimonials
          </h1>

          {/* Divider */}
          <div className="w-20 h-0.5 bg-white mx-auto mb-6" />

          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            Our driving force is helping brands stand out, stay consistent, and
            stay understood to the target audience. Whether you are launching,
            evolving, or rebuilding, we bring spark to your ideas and direction
            to your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
