import { useNavigate } from "react-router-dom";
import Button from "../ui/common/Button";
import { m } from "framer-motion";

function Homepage() {
  const navigate = useNavigate();

  function handleNavigation(route) {
    navigate(route, { replace: true });
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <m.section
        className="playbackgroundStyle my-20"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
      >
        <img
          src="/assets/images/heading/mobile-heading.svg"
          className="m-auto w-3/4 -mt-12 mb-10 md:-mt-20 md:mb-1 md:w-3/4"
          alt="logo"
          width="200"
          height="200"
        />
        <m.button
          onClick={() => handleNavigation("categories")}
          className="relative cursor-pointer w-fit m-auto rounded-full block"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src="/assets/images/icon-play-container.svg"
            className="md:w-44 m-auto xl:w-56"
            alt="play-container-bg"
            width="160"
            height="160"
          />
          <img
            src="/assets/images/icon-play.svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="play-icon-bg"
            width="80"
            height="80"
          />
        </m.button>

        <Button
          onClick={() => handleNavigation("how-to-play")}
          customClass="block mt-14 md:mt-10 md:h-16 xl:h-24"
        >
          How To Play
        </Button>
      </m.section>
    </div>
  );
}

export default Homepage;
