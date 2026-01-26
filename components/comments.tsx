import Image from 'next/image';

/**
 * TestimonialCard Component
 * Replicates the specific styling of the cards in your UI
 */
const TestimonialCard = () => {
  return (
    <div className="bg-[#FFF5EE] p-8  flex flex-col gap-4">
      {/* Quote Icon - Styled to match the dark double quotes in image */}
      <div className="text-[#333] text-4xl font-serif leading-none h-4 opacity-80">
        “
      </div>

      {/* Profile Header */}
      <div className="flex items-center gap-3 mt-2">
        <div className="relative w-11 h-11 overflow-hidden rounded-full border border-gray-100 shadow-sm">
          <Image 
            src="/images/comments.jpg" 
            alt="Raveen Maduranga" 
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-extrabold text-[#222] text-[13px] tracking-tight">
          Raveen Maduranga
        </h3>
      </div>

      {/* Testimonial Content */}
      <p className="text-[#444] text-[12.5px] leading-[1.6] font-medium">
        Took my dog Bruno to DEUTSCHLAND K9 TRAINING N BOARDING LANKA PVT LTD 
        for a haircut and was really impressed! The team was professional, 
        friendly, and handled him with great care. Bruno came out looking 
        neat, happy, and super fresh. Highly recommend their grooming services!
      </p>
    </div>
  );
};

const CommentsPage = () => {
  return (
    <section className="bg-white ">
      <div className=" mx-auto relative">
        
        {/* Left Side White Shadow/Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Right Side White Shadow/Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* The Grid - Configured to show multiple cards like the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  md:px-20">
          {/* We generate 8 cards to fill the layout */}
          {[...Array(8)].map((_, index) => (
            <TestimonialCard key={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CommentsPage;