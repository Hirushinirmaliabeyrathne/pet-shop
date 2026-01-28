import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterPage = () => {
  return (
    <footer className=" bg-[#FF7300] text-white px-6 py-10 md:px-12 lg:px-24 space-y-6">
      <div>
        {/* Top Section: justify-between for the three columns */}
        <div className="flex justify-between items-start w-full">
          
          {/* Left Column: Logo & Intro */}
          <div className="w-[30%] flex flex-col gap-2">
            <div className="relative w-14 h-14">
              <Image 
                src="/images/petlogo.png" 
                alt="Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <p className="text-[10px] leading-tight max-w-[320px]">
              For over a decade we have been the trusted choice for dog owners across Sri Lanka. 
              What started as a passion for dogs has grown into a professional and caring 
              organization with two dedicated centers in Boralesgamuwa.
            </p>
          </div>

          {/* Middle Column: Links (Centered) */}
          <div className="flex flex-col items-center justify-center space-y-1 text-[11px] font-bold tracking-widest pt-2">
            <Link href="/" className="hover:opacity-80">HOME</Link>
            <Link href="/about" className="hover:opacity-80">ABOUT</Link>
            <Link href="/services" className="hover:opacity-80">SERVICES</Link>
            <Link href="/gallery" className="hover:opacity-80">GALLERY</Link>
            <Link href="/contact" className="hover:opacity-80">CONTACT</Link>
          </div>

          {/* Right Column: Title & Mission */}
          <div className="w-[35%] text-right flex flex-col items-end">
            <h3 className="text-xl font-bold mb-2">Deutschland K9 Training Lanka</h3>
            <p className="text-[10px] leading-tight max-w-[420px] opacity-90">
              Our mission is to create a true home away from home for your beloved pets. 
              Every service we provide is designed to give your dogs comfort, training, 
              and care while giving you peace of mind. Whether it is training, daycare, 
              grooming, boarding, or transport.
            </p>
          </div>
        </div>

        {/* Bottom Section: Dividers and Email */}
        <div className="w-full">
          <hr className="border-t-[0.5px] border-white/60 w-full" />
          <div className="py-1 flex justify-center">
            <a 
              href="mailto:contact@deutschlandk9.com" 
              className="text-[14px] font-medium tracking-tight"
            >
              contact@deutschlandk9.com
            </a>
          </div>
          <hr className="border-t-[0.5px] border-white/60 w-full" />
        </div>

      </div>
    </footer>
  )
}

export default FooterPage