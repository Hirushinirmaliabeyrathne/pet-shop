// import Image from "next/image";

// const Ourpuppymoments = () => {
//   // Array of images - you can replace these with your actual paths
//   // Each object has a 'span' property to determine if it's wide or small
//   const puppyImages = [
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     // Row 2: One wide, three small
//     { src: "/images/woman1.jpg", span: "col-span-2" }, 
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     // Row 3: Three small, one wide
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     { src: "/images/woman1.jpg", span: "col-span-1" },
//     { src: "/images/woman1.jpg", span: "col-span-2" },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-16">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-2xl md:text-3xl font-bold mb-3 text-[#FF7300] uppercase tracking-wide">
//           Our Puppy Moments
//         </h1>
//         <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
//           A glimpse into the joyful, loving journey of our puppies and their families.
//         </p>
//       </div>

//       {/* Mosaic Grid Section */}
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//         {puppyImages.map((image, index) => (
//           <div
//             key={index}
//             className={`relative overflow-hidden rounded-lg bg-gray-200 aspect-square ${
//               // On mobile, everything is 1 column. On desktop, we use the span property.
//               image.span === "col-span-2" ? "md:col-span-2 aspect-auto h-full" : "col-span-1"
//             }`}
//             style={{ minHeight: "200px" }} // Ensures wide boxes have height
//           >
//             <Image
//               src={image.src}
//               alt={`Puppy moment ${index + 1}`}
//               fill
//               className="object-cover hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Ourpuppymoments;



import Image from "next/image";

const Ourpuppymoments = () => {
  // We define the specific span for each image to match your layout exactly
  const puppyImages = [
    { src: "/images/woman1.jpg", span: "col-span-1" },
    { src: "/images/woman1.jpg", span: "col-span-1" },
    { src: "/images/woman1.jpg", span: "col-span-1" },
    { src: "/images/woman1.jpg", span: "col-span-1" },
    { src: "/images/woman1.jpg", span: "col-span-1" },
    // Row 1: Wide (2) + Small (1) + Small (1) + Small (1) = 5 columns
    { src: "/images/woman1.jpg", span: "md:col-span-2" }, 
    { src: "/images/woman1.jpg", span: "md:col-span-1" },
    { src: "/images/woman1.jpg", span: "md:col-span-1" },
    { src: "/images/woman1.jpg", span: "md:col-span-1" },

    // Row 2: Small (1) + Small (1) + Small (1) + Wide (2) = 5 columns
    { src: "/images/woman1.jpg", span: "md:col-span-1" },
    { src: "/images/woman1.jpg", span: "md:col-span-1" },
    { src: "/images/woman1.jpg", span: "md:col-span-1" },
    { src: "/images/woman1.jpg", span: "md:col-span-2" }, 
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-16 bg-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#FF7300] uppercase tracking-wider">
          Our Puppy Moments
        </h1>
        <p className="text-gray-500 text-xs md:text-sm">
          A glimpse into the joyful, loving journey of our puppies and their families.
        </p>
      </div>

      {/* The Mosaic Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {puppyImages.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl bg-[#E0E0E0] min-h-[180px] md:min-h-[250px] ${image.span}`}
          >
            <Image
              src={image.src}
              alt={`Puppy moment ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourpuppymoments;