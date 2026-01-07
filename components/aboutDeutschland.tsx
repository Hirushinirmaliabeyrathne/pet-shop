import Image from "next/image"

const AboutDeutschlandpage = () => {
  return (
    <div className="bg-white font-sans">
        {/* Section 1: About */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        {/* --- IMAGE CONTAINER SECTION --- */}
<div className="relative w-[450px] h-[450px]"> 
    
    {/* Group 3 (Dots) - Placed underneath all images */}
    <div 
        className="absolute z-0 overflow-hidden"
        style={{
            width: '316.2px',
            height: '362.4px',
            top: '54.87px',
            left: '18.77px',
            transform: 'rotate(-90deg)',
            opacity: 1
        }}
    >
        <Image 
            src="/images/Group 3.png" 
            alt="background dots" 
            fill
            className="object-contain opacity-40" 
        />
    </div>

    {/* Woman 1 - Top Image Layer */}
    <div 
        className="absolute z-10 overflow-hidden"
        style={{
            width: '270px',
            height: '270px',
            top: '0px',
            left: '0px',
            borderRadius: '5.78px',
            opacity: 1
        }}
    >
        <Image 
            src="/images/woman1.jpg" 
            alt="woman 1" 
            fill
            className="object-cover"
        />
    </div>

    {/* Woman 2 - Bottom Overlapping Layer */}
    <div 
        className="absolute z-20 overflow-hidden border-10 border-white"
        style={{
            width: '270px',
            height: '270px',
            top: '145.83px',
            left: '135px',
            borderRadius: '5.78px',
            opacity: 1
        }}
    >
        <Image 
            src="/images/woman2.jpg" 
            alt="woman 2" 
            fill
            className="object-cover rounded"
        />
    </div>

</div>

            {/* Text Content */}
            <div className="w-full md:w-1/2"> 
                <h1 className="text-[#FB8500] text-2xl md:text-3xl font-bold uppercase tracking-wider mb-6">
                    Deutschland k9 training lanka
                </h1>
                <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    <p> For over a decade we have been the trusted choice for dog owners across Sri Lanka. What started as a passion for dogs has grown into a professional and caring organization with two dedicated centers in Boralesgamuwa and service teams across both Down South and North-South.</p>
                    <p>Our mission is to create a true home away from home for your beloved pets. Every service we provide is designed to give your dogs comfort, training, and care while giving you peace of mind. Whether it is training, daycare, grooming, boarding, or transport across the country, we ensure every dog is treated with love, safety, and attention.</p>
                    <p>With internationally qualified trainers and over ten years of experience, we blend expertise with genuine affection. Even during the most challenging times such as lockdowns, our commitment never stopped. We continue to serve families across Sri Lanka because for us, your dog’s wellbeing always comes first.</p>
                </div>
            </div>
        </section>

        {/* Section 2: Features/Services */}
        <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 items-start">
                
                {/* Feature 1 */}
                <div className="flex flex-col items-start p-6 border-b md:border-b-0 md:border-r border-orange-100 last:border-0 h-full">
                    <Image src={"/images/icon01.svg"} alt="icon1" width={60} height={60} className="mb-6"/>
                    <h1 className="font-bold uppercase text-gray-800 mb-3 text-sm tracking-wide">Expert Training</h1>
                    <p className="text-gray-500 text-xs leading-relaxed">Internationally recognised trainers guide dogs through tailored programs that encourage learning and positive behavior.</p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-start p-6 border-b md:border-b-0 md:border-r border-orange-100 last:border-0 h-full">
                    <Image src={"/images/icon02.svg"} alt="icon2" width={60} height={60} className="mb-6"/>
                    <h1 className="font-bold uppercase text-gray-800 mb-3 text-sm tracking-wide">Daycare and Boarding</h1>
                    <p className="text-gray-500 text-xs leading-relaxed">Comfortable, safe, and supervised spaces where dogs enjoy companionship, playtime, and relaxation.</p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-start p-6 border-b md:border-b-0 md:border-r border-orange-100 last:border-0 h-full">
                    <Image src={"/images/icon03.svg"} alt="icon3" width={60} height={60} className="mb-6"/>
                    <h1 className="font-bold uppercase text-gray-800 mb-3 text-sm tracking-wide">Grooming and Wellness</h1>
                    <p className="text-gray-500 text-xs leading-relaxed">Regular health checkups and wellness monitoring to ensure every dog stays active, happy, and in excellent condition</p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-start p-6 h-full">
                    <Image src={"/images/icon04.svg"} alt="icon4" width={60} height={60} className="mb-6"/>
                    <h1 className="font-bold uppercase text-gray-800 mb-3 text-sm tracking-wide">Compassionate Care</h1>
                    <p className="text-gray-500 text-xs leading-relaxed">Personalized enrichment activities that keep dogs mentally stimulated, socially engaged, and emotionally balanced.</p>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default AboutDeutschlandpage