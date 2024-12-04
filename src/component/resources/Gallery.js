import React from 'react'
import gallery2024 from '../../assets/gallery/2024.jpeg'
const Gallery = () => {
  return (

    <>
        <section
			className=" light py-14 md:py-18 text-zinc-900 dark:text-white bg-center bg-no-repeat bg-cover overflow-hidden relative z-[1]"
			style={{
				backgroundImage:
					"url(https://cdn.easyfrontend.com/pictures/background/abstract-background2.jpg)",
			}}
		>
			<div className="container px-4">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-30 -z-[1] bg-white dark:bg-[#0b1727]"></div>
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-8">
						<h1 className="text-[30px] leading-snug font-bold md:text-4xl mb-2">
                        Snapshots of <span className='text-green-500'> Learning and Fun</span>
						</h1>
						<p className="text-md font-semibold leading-snug opacity-75 mt-6">
							{/* Home {">"} Photo Gallery */}
                            From classrooms to playgrounds, we've captured it all,
Celebrating every smile, every achievement.
						</p>
					</div>
				</div>
			</div>
		</section>




        <div className='mt-12 p-6'>
    <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
  <div className=" break-inside-avoid mb-8 cursor-pointer">
    <img
      className="h-auto max-w-full rounded-lg"
      src={gallery2024}
      alt="Gallery "
    />
  </div>
  <div className=" break-inside-avoid  mb-8 cursor-pointer">
    <img
      className="h-auto max-w-full rounded-lg"
      src={gallery2024}
      alt="Gallery "
    />
  </div>
  <div className=" break-inside-avoid  mb-8 cursor-pointer">
    <img
      className="h-auto max-w-full rounded-lg"
      src={gallery2024}
      alt="Gallery "
    />
  </div>
  <div className=" break-inside-avoid  mb-8 cursor-pointer">
    <img
      className="h-auto max-w-full rounded-lg"
      src={gallery2024}
      alt="Gallery "
    />
  </div>
  <div className=" break-inside-avoid  mb-8 cursor-pointer">
    <img
      className="h-auto max-w-full rounded-lg"
      src={gallery2024}
      alt="Gallery "
    />
  </div>
  <div className=" break-inside-avoid  mb-8 cursor-pointer">
    <img
      className="h-auto max-w-full rounded-lg"
      src={gallery2024}
      alt="Gallery "
    />
  </div>
</div>

    </div>
    </>
  
  )
}

export default Gallery
