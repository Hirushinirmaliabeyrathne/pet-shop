// import Image from 'next/image'
// import React from 'react'

// const Herosection = () => {
//   return (
//     <section>
//       <Image src={'/images/Vector2.svg'} alt='background-imge' width={400} height={200}/>
//     <div className='flex flex-col gap-2'>  
//       <h1>Where Dogs  Feel at 
// Home & Grow 
// with Care 🐾</h1>
// <p>German-inspired training methods combined with luxury boarding  facilities. Your beloved companion deserves the finest care while you&apos;re away.</p>
// <div>
//   <button className='bg-[#FF7300]'>
//   <Image src={'/icons/shield-tick.svg'} alt='shield-tick' width={20} height={20} />
//   BOOK A SERVICE
// </button>
// <button>
//   <Image src={'/icons/user.svg'} alt='user' width={20} height={20}/>
//   MEET OUR TRAINERS
// </button>
// </div>
// <Image src={'/images/Ellipse 1.png'} alt='hero' width={200} height={200}/>
// <Image src={'/images/herosection-dog.png'} alt='dog' width={400} height={400}/>
//     </div>
//     </section>

//   )
// }

// export default Herosection


import Image from "next/image"

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-screen relative overflow-hidden text-[#333333]"
      style={{
        backgroundColor: "#fff9f5",
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url(/images/Vector.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen -mt-40">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6 ml-[180px] mt-32">
            <h1 className="text-4xl lg:text-5xl leading-tight ">
              Where <span className="text-[#FF7300]">Dogs</span> Feel at <br/>Home & Grow <br/> <span>with Care </span> 
              <span className="text-[#333333]">🐾</span>
              
            </h1>

            <p className="leading-relaxed max-w-md">
              German-inspired training methods combined with luxury boarding facilities. Your beloved companion deserves
              the finest care while you&apos;re away.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-[#FF7300] hover:bg-[#E86A00] text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
               <Image src={"/icons/shield-tick.svg"} alt="shield" width={20} height={20}/>
                BOOK A SERVICE
              </button>

              <button className="border-2 border-[#FF7300] text-[#FF7300] hover:bg-orange-50 font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Image src={"/icons/user.svg"} alt="user" width={20} height={20}/>
                MEET OUR TRAINERS
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">1K+</span>
              </div>
              <p className="text-sm max-w-xs">
                With over a decade of experience and internationally qualified trainers, we provide complete dog care
                solutions
              </p>
            </div>
          </div>
{/* Right Column - Image with Ellipse Background */}
<div className="relative flex justify-center items-center h-full -mt-32 -mr-20 lg:-mr-40">
  {/* Ellipse background image */}
  <div className="absolute  mt-5">
    <Image
      src="/images/Ellipse 1.png"
      alt="ellipse background"
      width={700}
      height={700}
    />
  </div>

  {/* Dog image on top of ellipse */}
  <div className="relative right-24 min-h-96 mt-72 ">
    <Image
      src="/images/dog.png"
      alt="Happy dog"
      width={2800}
      height={3000}
     
    />
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection