export default function Intro() {
  return (
    <section className="flex items-center justify-center p-20 w-full overflow-hidden">
    
      

      {/* Content */}
      <div className="flex z-10 h-full  items-center justify-center px-4">
        <div className="max-w-3xl text-center text-black">
          <h1 className="text-3xl  md:text-4xl lg:text-5xl font-light tracking-wide mb-8 animate-fadeInDown">
            In a world where big ideas struggle to reach people
          </h1>


          <p className="text-sm text-justify md:text-base text-black/90 leading-relaxed animate-fadeInUp" style={{animationDelay: "0.1s"}}>
            Your idea needs to be effective everywhere, from city streets to global feeds, not just ticking boxes, but driving action. Whether your customer is at the end of the world, your ideas need to stop them, hold them and move them. That's where Clearvenio comes in.
          </p>
        <p className="text-sm text-justify py-2 md:text-base text-black/90 leading-relaxed animate-fadeInUp" style={{animationDelay: "0.2s"}}>
                      We create effective, emotional, unforgettable solutions, harnessing the power of Clarity.
        </p>
        <p className="text-sm  md:text-base text-black/90 leading-relaxed animate-fadeInUp" style={{animationDelay: "0.3s"}}>
We deliver measurable business outcomes, pioneering the future through production, data and creativity.
          </p>
        </div>
      </div>
    </section>
  );
}
