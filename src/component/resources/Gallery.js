import React from "react";
import gallery2024 from "../../assets/gallery/2024.jpg";
// import gallery2023 from "../../assets/gallery/2024.jpeg";
import Heading from "../../assets/gallery/heading.avif";
const Gallery = () => {
  return (
    <>
  <section
  className=" py-14 md:py-18 text-zinc-900 bg-center bg-no-repeat bg-cover overflow-hidden relative z-[1]"
>
  <div className="container px-4">
    {/* Background Overlay */}
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-30 -z-[1] bg-white"></div>

    {/* Grid Layout */}
    <div className="grid grid-cols-12 gap-4">
      {/* Text Section */}
      <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
        <h1 className="text-[30px] leading-snug font-bold md:text-4xl mb-2">
          Snapshots of{" "}
          <span className="text-green-500">Learning and Fun !!</span>
        </h1>
        <p className="text-md font-semibold leading-snug opacity-75 mt-3">
          From classrooms to playgrounds, we've captured it all,  
          Celebrating every smile, every achievement.
        </p>
      </div>

      {/* Image Section */}
      <div className="col-span-12 md:col-span-4">
        <img
          src={Heading}
          alt="Snapshots"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    </div>
  </div>
</section>


      <div className="mt-18 p-6">
        <div className="columns-1 md:columns-3 xl:columns-3 gap-7 ">
          <div className=" break-inside-avoid mb-8 cursor-pointer">
            <img
              className="h-auto w-full rounded-lg"
              src={gallery2024}
              alt="Gallery "
            />
            <h2 className="text-center font-bold items-center text-[20px] text-blue-600">YEAR 2024-25</h2>
          </div>
          <div className=" break-inside-avoid mb-8 cursor-pointer">
            <img
              className="h-auto w-full rounded-lg"
              src={gallery2024}
              alt="Gallery "
            />
            <h2 className="text-center font-bold items-center text-[20px] text-blue-600">YEAR 2023-24</h2>
          </div>

          <div className=" break-inside-avoid mb-8 cursor-pointer">
            <img
              className="h-auto w-full rounded-lg"
              src={gallery2024}
              alt="Gallery "
            />
            <h2 className="text-center font-bold items-center text-[20px] text-blue-600">YEAR 2022-23</h2>
          </div>

          <div className=" break-inside-avoid mb-8 cursor-pointer">
            <img
              className="h-auto w-full rounded-lg"
              src={gallery2024}
              alt="Gallery "
            />
            <h2 className="text-center font-bold items-center text-[20px] text-blue-600">YEAR 2021-22</h2>
          </div>

          <div className=" break-inside-avoid mb-8 cursor-pointer">
            <img
              className="h-auto w-full rounded-lg"
              src={gallery2024}
              alt="Gallery "
            />
            <h2 className="text-center font-bold items-center text-[20px] text-blue-600">YEAR 2020-21</h2>
          </div>

          <div className=" break-inside-avoid mb-8 cursor-pointer">
            <img
              className="h-auto w-full rounded-lg"
              src={gallery2024}
              alt="Gallery "
            />
            <h2 className="text-center font-bold items-center text-[20px] text-blue-600">YEAR 2019-20</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
