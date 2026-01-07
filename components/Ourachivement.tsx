import Image from "next/image";

const Ourachivementpage = () => {
  return (
    <div>
      <section
        className="w-full min-h-screen relative overflow-hidden text-white flex items-center px-6 md:px-16 py-12"
        style={{
          backgroundColor: "#FF7300",
          backgroundImage: "url(/images/Vector2.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main Grid Container */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side: Text Content */}
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Achievement</h1>
            
            <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-90">
              <p>
                We are proud to announce that Deutschland K9 Lanka (PVT) Ltd has been honored as the{" "}
                <span className="font-bold">Leading Provider of Specialized K9 Training and Boarding</span> at the Global Business Excellence Awards 2025.
              </p>
              
              <p>
                This achievement is not just ours, it belongs to our amazing customers, supporters, and the 
                entire dog-loving community who believed in us. Your trust and encouragement have been 
                the driving force behind our journey, and this recognition reflects the love and loyalty we 
                share with every dog we care for.
              </p>
              
              <p>
                With this award, we are more motivated than ever to continue delivering world-class 
                training, safe boarding, and compassionate care for every pup that comes through our 
                doors.
              </p>
              
              <p>
                Here&apos;s to more milestones, more wagging tails, and a future filled with love, learning, and 
                excellence.
              </p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/woman2.jpg" 
              alt="Achievement" 
              className="w-full max-w-md h-auto object-contain rounded-lg shadow-xl"
              width={400}
              height={400}
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Ourachivementpage;