import Image from 'next/image';
import React from 'react';

const QuestionsPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE: Image Collage */}
        <div className="flex flex-col gap-4">
          {/* Top Row: 3 Images */}
          <div className="grid grid-cols-3 gap-4 h-[300px]">
            <div className="relative h-full w-full">
              <Image 
                src="/images/young-woman-hoding-puppy.jpg" 
                alt="Woman holding puppy" 
                fill 
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-full w-full">
              <Image 
                src="/images/group-people-with-dog.jpg" 
                alt="Group with dog" 
                fill 
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-full w-full">
              <Image 
                src="/images/woman2.jpg" 
                alt="Woman with golden retriever" 
                fill 
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Bottom Row: 2 Wider Images */}
          <div className="grid grid-cols-2 gap-4 h-[294px]">
            <div className="relative h-full w-full">
              <Image 
                src="/images/man-holding-dog.jpg" 
                alt="Man with dog" 
                fill 
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-full w-full">
              <Image 
                src="/images/young-woman-hoding-puppy.jpg" 
                alt="Young woman and dog" 
                fill 
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="flex flex-col">
          <h1 className="text-[#FF7A00] font-black text-4xl tracking-tight mb-6">
            GOT QUESTIONS?
          </h1>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-10 font-medium">
            Whether you&apos;re interested in learning more about our breeding program, available litters, or need guidance on caring for your new puppy, we&apos;d love to hear from you. Our team is always ready to provide support, advice, and information to ensure you and your furry companion have the best experience possible.
          </p>

          <form className="flex flex-col gap-4">
            {/* Name Input */}
            <div className="flex items-center gap-4 border border-[#FAD9C1] rounded-xl px-5 py-4 focus-within:border-[#FF7A00] transition-colors">
              <div className="w-5 h-5 relative shrink-0">
                <Image src="/images/users-three.png" alt="icon" fill className="object-contain" />
              </div>
              <input 
                type="text" 
                placeholder="Name*" 
                className="w-full outline-none bg-transparent placeholder:text-gray-300 text-gray-700 font-medium"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center gap-4 border border-[#FAD9C1] rounded-xl px-5 py-4 focus-within:border-[#FF7A00] transition-colors">
              <div className="w-5 h-5 relative shrink-0">
                <Image src="/images/envelope.png" alt="icon" fill className="object-contain" />
              </div>
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="w-full outline-none bg-transparent placeholder:text-gray-300 text-gray-700 font-medium"
              />
            </div>

            {/* Phone Input */}
            <div className="flex items-center gap-4 border border-[#FAD9C1] rounded-xl px-5 py-4 focus-within:border-[#FF7A00] transition-colors">
              <div className="w-5 h-5 relative shrink-0">
                <Image src="/images/phone.png" alt="icon" fill className="object-contain" />
              </div>
              <input 
                type="tel" 
                placeholder="Contact Number*" 
                className="w-full outline-none bg-transparent placeholder:text-gray-300 text-gray-700 font-medium"
              />
            </div>

            {/* Note Textarea */}
            <div className="flex items-start gap-4 border border-[#FAD9C1] rounded-xl px-5 py-4 focus-within:border-[#FF7A00] transition-colors">
              <div className="w-5 h-5 relative mt-1 shrink-0">
                <Image src="/images/pen.png" alt="icon" fill className="object-contain" />
              </div>
              <textarea 
                placeholder="Note" 
                rows={6}
                className="w-full outline-none bg-transparent placeholder:text-gray-300 text-gray-700 font-medium resize-none"
              />
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default QuestionsPage;