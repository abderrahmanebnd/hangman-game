import { useDispatch } from "react-redux";
import { startGame } from "../slices/game";
import { useNavigate } from "react-router-dom";
import { m } from "framer-motion";

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Category({ category, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlePickCategory(category, data) {
    dispatch(startGame(category, data));
    navigate("/game", { replace: true });
  }

  return (
    <m.li
      className="shadow-primary-shadow cursor-pointer bg-blue-700 text-center hover:bg-blue-600 transition-colors duration-200 w-full  rounded-2xl   md:rounded-3xl   lg:rounded-5xl "
      onClick={() => handlePickCategory(category, data)}
      variants={categoryVariants}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.02,
        transition: {
          type: "tween",
        },
      }}
    >
      <button className="text-white uppercase tracking-wide text-2xl md:text-4xl lg:text-5xl block text-center p-5 md:p-7 lg:p-10 w-full     ">
        {category}
      </button>
    </m.li>
  );
}

export default Category;
