import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

function Homepage() {
  return (
    <div
      className="flex 
      justify-center
      items-center  min-h-screen"
    >
      <section className=" bg-no-repeat my-20 relative bg-mobile-playBg h-96 bg-cover  md:bg-tablet-playBg md:w-[500px] md:h-[430px] xl:bg-desktop-playBg xl:w-[692px] xl:h-[600px] ">
        <img
          src="/assets/images/heading/mobile-heading.svg"
          className="m-auto w-3/4 -mt-12 mb-10 md:-mt-20 md:mb-5 md:w-2/3"
          alt="logo"
        />

        <NavLink to="categories" className="relative">
          <img
            src="/assets/images/icon-play-container.svg"
            className="md:w-48 m-auto xl:w-56"
            alt="play-container-bg"
          />
          <img
            src="/assets/images/icon-play.svg"
            className=" absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  md:w-28 w-20"
            alt="play-icon-bg"
          />
        </NavLink>
        <NavLink
          to="/how-to-play"
          className="block mt-14 md:mt-10 md:h-16 xl:h-24 "
        >
          <Button>How To Play</Button>
        </NavLink>
      </section>
    </div>
  );
}

export default Homepage;
