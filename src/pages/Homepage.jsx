import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function Homepage() {
  const navigate = useNavigate();
  function handleNavigation(route) {
    navigate(route);
  }
  return (
    <div
      className="flex 
      justify-center
      items-center  min-h-screen"
    >
      <section className="playbackgroundStyle my-20">
        <img
          src="/assets/images/heading/mobile-heading.svg"
          className="m-auto w-3/4 -mt-12 mb-10 md:-mt-20 md:mb-1 md:w-3/4"
          alt="logo"
        />

        <button
          onClick={() => handleNavigation("categories")}
          className="relative cursor-pointer w-fit m-auto rounded-full block"
        >
          <img
            src="/assets/images/icon-play-container.svg"
            className="md:w-44 m-auto xl:w-56"
            alt="play-container-bg"
          />
          <img
            src="/assets/images/icon-play.svg"
            className=" absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  md:w-24 w-20"
            alt="play-icon-bg"
          />
        </button>
        <div
          onClick={() => handleNavigation("how-to-play")}
          className="block mt-14 md:mt-10 md:h-16 xl:h-24 "
        >
          <Button>How To Play</Button>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
