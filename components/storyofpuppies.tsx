"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Storyofpuppies = () => {
  const [activeVideo, setActiveVideo] = useState(0); 
  const [isMuted, setIsMuted] = useState(true); 
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  // Function to handle unmuting on first interaction
  const handleInteraction = () => {
    if (isMuted) setIsMuted(false);
  };

  useEffect(() => {
    const playVideo = async (video: HTMLVideoElement | null) => {
      if (!video) return;
      try {
        // Reset and Play
        video.currentTime = 0;
        await video.play();
      } catch (err) {
        // This catches the AbortError and prevents the console crash
        console.warn("Autoplay was prevented or interrupted. Waiting for user interaction.", err);
      }
    };

    if (activeVideo === 0) {
      videoRef2.current?.pause();
      playVideo(videoRef1.current);
    } else {
      videoRef1.current?.pause();
      playVideo(videoRef2.current);
    }
  }, [activeVideo]);

  return (
    <section
      onClick={handleInteraction}
      className="w-full relative overflow-hidden text-black py-16 md:py-24"
      style={{
        backgroundImage: "url(/images/clippathgroup.png)",
        backgroundSize: "600px", 
        backgroundPosition: "center",
        backgroundRepeat: "repeat", // Pattern repeats across the section
      }}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-[#FF7300] text-3xl md:text-5xl font-extrabold uppercase mb-6 leading-tight">
            Stories of Love, Joy, and Companionship from Our Puppy Families
          </h1>
          <p className="text-gray-700 text-sm md:text-lg mb-10 leading-relaxed">
            Our responsibility does not end when a puppy leaves our care. It continues through the lasting trust, 
            guidance, and support we provide to every family that chooses one of our puppies.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#FF7300] text-white px-8 py-3 rounded-md flex items-center gap-3 font-bold uppercase hover:bg-[#e66800] transition-colors shadow-lg">
              view more
              <div className="bg-white p-1 rounded-full flex items-center justify-center">
                <Image src={"/images/Arrow Left Up.png"} alt="Arrow" width={14} height={14} className="rotate-45 brightness-0" />
              </div>
            </button>
          </div>
        </div>

        {/* Gallery Section - Perfectly matches the provided image layout */}
        <div className="w-full flex flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6 mt-12">
          
          {/* Column 1: Far Left */}
          <div className="hidden xl:block">
            <div className="w-28 h-48 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image src={"/images/puppystory1.jpg"} alt="Gallery Left" fill className="object-cover" />
            </div>
          </div>

          {/* Column 2: Mid Left (Two Stacked) */}
          <div className="hidden md:flex flex-col gap-4">
            <div className="w-40 h-40 lg:w-48 lg:h-48 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image src={"/images/puppystory2.jpg"} alt="Gallery Stack 1" fill className="object-cover" />
            </div>
            <div className="w-40 h-40 lg:w-48 lg:h-48 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image src={"/images/puppystory3.jpg"} alt="Gallery Stack 2" fill className="object-cover" />
            </div>
          </div>

          {/* Column 3: Center Left (Tall Video 1) */}
          <div className={`w-40 h-[350px] md:w-[280px] md:h-[550px] lg:w-[320px] lg:h-[650px] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 transition-all duration-700 ${activeVideo === 0 ? 'border-[#FF7300] scale-105 z-10' : 'border-white opacity-60'}`}>
            <video
              ref={videoRef1}
              src={"/video/puppymoment1.mp4"}
              onEnded={() => setActiveVideo(1)}
              muted={isMuted}
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
            {isMuted && activeVideo === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                 <span className="text-white text-xs bg-black/50 px-3 py-1 rounded-full">Click for Sound</span>
              </div>
            )}
          </div>

          {/* Column 4: Center Right (Tall Video 2) */}
          <div className={`w-40 h-[350px] md:w-[280px] md:h-[550px] lg:w-[320px] lg:h-[650px] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 transition-all duration-700 ${activeVideo === 1 ? 'border-[#FF7300] scale-105 z-10' : 'border-white opacity-60'}`}>
            <video
              ref={videoRef2}
              src={"/video/puppymoment2.mp4"}
              onEnded={() => setActiveVideo(0)}
              muted={isMuted}
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 5: Mid Right (Two Stacked) */}
          <div className="hidden md:flex flex-col gap-4">
            <div className="w-40 h-40 lg:w-48 lg:h-48 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image src={"/images/puppystory4.jpg"} alt="Gallery Stack 3" fill className="object-cover" />
            </div>
            <div className="w-40 h-40 lg:w-48 lg:h-48 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image src={"/images/puppystory1.jpg"} alt="Gallery Stack 4" fill className="object-cover" />
            </div>
          </div>

          {/* Column 6: Far Right */}
          <div className="hidden xl:block">
            <div className="w-28 h-48 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image src={"/images/puppystory2.jpg"} alt="Gallery Right" fill className="object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Storyofpuppies;