"use client"; // Required for useState in Next.js App Router
import { useState } from "react";
import Image from "next/image";

const Dogbreedingservices = () => {
  // 1. Data structure for the services
  const services = [
    {
      id: "obedience",
      title: "Obedience Training",
      icon: "/images/Frame 23.png",
      video: "/video/dogvideo.mp4",
      description: [
        "Obedience training is the foundation of a well-behaved dog. We focus on basic commands and social behavior.",
        "Our experts ensure that your dog learns to respond to commands in various environments, making them a joy to be around.",
      ],
    },
    {
      id: "display",
      title: "Display Training",
      icon: "/images/dog1.png",
      video: "/video/dogvideo.mp4",
      description: [
        "Display training focuses on the aesthetic and professional movement of the dog for shows and public events.",
        "We help highlight the best features of your dog through specialized handling techniques.",
      ],
    },
    {
      id: "guard",
      title: "Guard Duty Training",
      icon: "/images/dog2.png",
      video: "/video/dogvideo.mp4",
      description: [
        "Professional protection and guard dog training for security and personal safety.",
        "Our programs are designed to build confidence and controlled aggression for specific scenarios.",
      ],
    },
    {
      id: "tracking",
      title: "Tracking Training",
      icon: "/images/dog3.png",
      video: "/video/dogvideo.mp4",
      description: [
        "Scent work and tracking services to help dogs find objects or people.",
        "This training utilizes the natural instincts of the dog for professional or recreational use.",
      ],
    },
    {
      id: "boarding",
      title: "Dog Boarding Facilities",
      icon: "/images/dog4.png",
      video: "/video/dogvideo.mp4",
      description: [
        "A home away from home for your furry friends. Clean, safe, and air-conditioned facilities.",
        "We provide daily exercise, high-quality food, and 24/7 care for all boarded pets.",
      ],
    },
    {
      id: "breeding",
      title: "Dog Breeding Services",
      icon: "/images/dog5.png",
      video: "/video/dogvideo.mp4",
      description: [
        "Bringing new puppies into the world is a rewarding experience, but it also comes with great responsibility. Our dog breeding service is built on the principle of care, health, and responsibility at every stage. We believe that each litter should be an improvement of the parents.",
        "From the very beginning, we ensure that the mother and puppies have a safe, comfortable, and supportive environment. Proper nutrition, veterinary care, and socialization are prioritized to give every puppy the strongest start in life.",
        "Our commitment doesn't end when the puppies leave us. We remain a point of support for new owners, offering guidance with training, socialization, and care whenever needed.",
        "With us, you can trust that every puppy is raised with love, responsibility, and the highest standards, ensuring they grow into happy, healthy companions for life.",
      ],
    },
    {
      id: "grooming",
      title: "Dog Grooming",
      icon: "/images/dog6.png",
      video: "/video/dogvideo.mp4",
      description: [
        "Professional grooming services to keep your dog looking and feeling their best.",
        "From bathing and brushing to nail trimming and hair styling, we cover all your grooming needs.",
      ],
    },
  ];

  // 2. State to track which service is selected (Default to 'breeding' like your image)
  const [activeTab, setActiveTab] = useState(services[5]);

  return (
    <>
      {/* Top Navigation Tabs */}
      <div className="flex flex-wrap justify-center items-end border-b border-gray-200">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setActiveTab(service)}
            className={`cursor-pointer transition-all duration-300 flex flex-col items-center justify-center px-4 py-6 text-center w-32 md:w-40 border-b-2 ${
              activeTab.id === service.id
                ? "bg-[#FFF1E6] text-[#FF7300] border-[#FF7300] rounded-t-lg"
                : "text-gray-600 border-transparent hover:text-orange-400"
            }`}
          >
            <div className="relative w-12 h-12 mb-3">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-[12px] md:text-sm font-bold uppercase leading-tight">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <section
        className="w-full min-h-screen relative overflow-hidden flex items-center px-6 md:px-16 py-16"
        style={{
          backgroundColor: "#FFF1E6",
          backgroundImage: "url(/images/dogbreedlayer.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Dynamic Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-8 text-[#FF7300] uppercase tracking-wide">
              {activeTab.title}
            </h1>
            
            <div className="space-y-6 text-[#444444] text-sm md:text-base leading-relaxed font-medium">
              {activeTab.description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right Side: Dynamic Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                key={activeTab.id} // This key forces the video to reload when the tab changes
                src={activeTab.video}
                loop
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dogbreedingservices;