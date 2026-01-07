import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-screen relative overflow-hidden text-[#333333] flex items-center"
      style={{
        backgroundColor: "#fff9f5",
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/images/Vector.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full px-4 2xs:px-6 sm:px-10 lg:px-16 xl:px-24 py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6 z-20 xl:ml-20 order-2 lg:order-1 items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[32px] 2xs:text-[38px] xs:text-[44px] sm:text-[48px] lg:text-[52px] xl:text-[64px] font-medium leading-[1.1] text-[#333333]">
              Where <span className="text-[#FF7300]">Dogs</span> Feel at <br className="hidden sm:block" />
              Home & Grow <br className="hidden sm:block" />
              with Care <span className="inline-block scale-75 sm:scale-100">🐾</span>
            </h1>

            <p className="leading-relaxed max-w-md text-sm sm:text-base opacity-80">
              German-inspired training methods combined with luxury boarding facilities. Your beloved companion deserves
              the finest care while you&apos;re away.
            </p>

            {/* Buttons - Forced to same line using flex-row and whitespace-nowrap */}
            <div className="flex flex-row gap-2 2xs:gap-3 sm:gap-4 w-full justify-center lg:justify-start">
              <button className="bg-[#FF7300] hover:bg-[#E86A00] text-white text-[10px] 2xs:text-[11px] sm:text-sm font-bold px-3 2xs:px-4 sm:px-6 py-3 2xs:py-4 rounded-md flex items-center justify-center gap-1 sm:gap-2 transition-colors uppercase tracking-tight sm:tracking-wider whitespace-nowrap flex-1 lg:flex-none">
                <Image src="/icons/shield-tick.svg" alt="shield" width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" />
                Book a Service
              </button>

              <button className="border border-[#FF7300] text-[#FF7300] hover:bg-orange-50 text-[10px] 2xs:text-[11px] sm:text-sm font-bold px-3 2xs:px-4 sm:px-6 py-3 2xs:py-4 rounded-md flex items-center justify-center gap-1 sm:gap-2 transition-colors uppercase tracking-tight sm:tracking-wider whitespace-nowrap flex-1 lg:flex-none">
                <Image src="/icons/user.svg" alt="user" width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" />
                Meet Trainers
              </button>
            </div>

            <div className="pt-4 flex flex-col items-center lg:items-start">
               <div className="flex items-center gap-2 mb-2">
                 <span className="text-2xl font-bold text-black">1K+</span>
                 <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                           <Image src={`/images/avatar-${i}.png`} alt="user" width={32} height={32} />
                        </div>
                    ))}
                 </div>
               </div>
               <p className="text-[11px] sm:text-[13px] max-w-xs leading-snug opacity-70">
                With over a decade of experience and qualified trainers, we provide complete dog care solutions.
              </p>
            </div>
          </div>

          {/* Right Column - Large Expanded Dog Image */}
          <div className="relative flex justify-center items-center lg:justify-end order-1 lg:order-2 h-[350px] sm:h-[450px] lg:h-[600px]">
            {/* Ellipse background image */}
            <div className="absolute right-[-5%] sm:right-[-10%] w-[320px] 2xs:w-[380px] sm:w-[500px] lg:w-[650px] xl:w-[850px]">
              <Image
                src="/images/Ellipse 1.png"
                alt="ellipse background"
                width={850}
                height={850}
                className="w-full h-auto opacity-90"
                priority
              />
            </div>

            {/* Expanded Dog Image - Increased size and absolute positioning for overlap */}
            <div className="absolute z-10 w-[500px] 2xs:w-[550px] sm:w-[800px] lg:w-[1000px] xl:w-[1250px] right-[-15%] sm:right-[-20%] lg:right-[-10%] lg:top-0">
              <Image
                src="/images/dog.png"
                alt="Happy dog"
                width={1500}
                height={1500}
                className="w-full h-auto object-contain scale-110 sm:scale-100"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;