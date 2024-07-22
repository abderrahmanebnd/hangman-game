import { useNavigate } from "react-router-dom";
import Button from "../ui/common/Button";

function Homepage() {
  const navigate = useNavigate();
  function handleNavigation(route) {
    navigate(route, { replace: true });
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
          width="200"
          height="200"
        />

        <button
          onClick={() => handleNavigation("categories")}
          className="relative cursor-pointer w-fit m-auto rounded-full block"
        >
          {/* these two images are lcp elements which the browser told me that "If the LCP element is dynamically added to the page, you should preload the image in order to improve LC" */}
          <img
            src="/assets/images/icon-play-container.svg"
            className="md:w-44 m-auto xl:w-56"
            alt="play-container-bg"
            width="160"
            height="160"
          />
          <img
            src="/assets/images/icon-play.svg"
            className=" absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  md:w-24 w-20"
            alt="play-icon-bg"
            width="80"
            height="80"
          />
        </button>

        <Button
          onClick={() => handleNavigation("how-to-play")}
          customClass="block mt-14 md:mt-10 md:h-16 xl:h-24 "
        >
          How To Play
        </Button>
      </section>
    </div>
  );
}

export default Homepage;
