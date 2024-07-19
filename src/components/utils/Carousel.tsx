const Carousel = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <div className="">
        <img
          className="rounded-lg responsive"
          src="./banner/banner1.webp"
          alt="banner1"
        />
      </div>
      <div className=" flex-col gap-4 md:flex hidden">
        <img className="rounded-lg" src="./banner/banner2.webp" alt="banner2" />
        <img className="rounded-lg" src="./banner/banner3.webp" alt="banner3" />
      </div>
    </div>
  );
};

export default Carousel;
