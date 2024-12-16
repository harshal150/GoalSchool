const AlumniHeader = () => (
  <div className="px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14 ">
    <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
      <h1 className="text-2xl md:text-4xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold ">
        Celebrate the Legacy of Our Alumni
      </h1>
      <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left ">
        Join us in celebrating the achievements and milestones of our alumni.
        Share your stories, connect with peers, and stay engaged with the
        vibrant alumni community of Goal School.
      </p>
      <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
  <a
    href="#"
    className="flex w-fit items-center text-white justify-center rounded-lg bg-[#1053F3] px-4 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
  >
    <span>Join Alumni Network</span>
  </a>
  <a
    href="#"
    className="flex w-fit items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-4 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10"
  >
    <span>Explore Stories</span>
  </a>
</div>

    </div>
    <div className="hero-video md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
      <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden">
        <iframe
          width="460"
          height="315"
          src="https://www.youtube.com/embed/TW4XrT18onE?si=nyHhEge3nHvzUwut"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
);

export default AlumniHeader;
