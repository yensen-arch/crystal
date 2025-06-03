const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-viking-navy/70 to-viking-blue/50 z-10"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/lovable-uploads/0584d939-d599-4f23-8942-b037aca8be37.png')",
        }}
      ></div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="inline-block mb-8 mt-16 px-6 backdrop-blur-sm border border-viking-gold/30 rounded-full py-[14px] bg-slate-100 my-[164px]">
          <img
            src="/lovable-uploads/e77f7277-33f1-416a-868a-afe1cef7e796.png"
            alt="Small Ship Travel Logo"
            className="h-10 md:h-12"
          />
        </div>

        <div className="max-w-5xl text-center my-[159px]">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-6 leading-tight">
            
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10">
           
          </p>

          <div className="mt-16 flex items-center justify-center">
            <div>
              <a
                href="#cruise-experiences"
                className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
              >
                <span className="mb-2">Discover More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;




import ContactCTA from "./ContactCTA";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-viking-navy/80 to-viking-blue/60 z-10"></div>
      
      {/* Background Image with subtle animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-slow-zoom" 
        style={{
          backgroundImage: "url('/lovable-uploads/Bupadest_Parliament_House.jpg')",
          animation: "slowZoom 30s infinite alternate ease-in-out"
        }}
      ></div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen py-16">
        {/* Logo with enhanced styling */}
        <div className="inline-block mb-16 px-6 backdrop-blur-sm border border-viking-gold/40 rounded-full py-3 bg-white shadow-lg">
          <img 
            src="/lovable-uploads/e77f7277-33f1-416a-868a-afe1cef7e796.png" 
            alt="Small Ship Travel Logo" 
            className="h-10 md:h-12 object-contain"
          />
        </div>
        
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Section - Takes up more space on larger screens */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 leading-tight drop-shadow-md">
            Sail in Timeless Elegance with 
            <span className="text-viking-gold"> Crystal Cruises</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed drop-shadow">
            Experience the pinnacle of luxury cruising aboard Crystal Serenity
            and Crystal Symphony, where personalized service, world-class
            dining, and immersive itineraries redefine ocean travel.
            </p>
          </div>
          
          {/* Form Section with improved styling */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:mx-0 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              {/* Form with ContactCTA component */}
              <div className="relative z-10">
                <ContactCTA siteName="crystal-cruises" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;