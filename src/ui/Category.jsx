import { useDispatch } from "react-redux";
import { startGame } from "../slices/game";
import { useNavigate } from "react-router-dom";

function Category({ category, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlePickCategory(category, data) {
    dispatch(startGame(category, data));
    navigate("/game", { replace: true });
  }

  return (
    <li
      className="shadow-primary-shadow cursor-pointer bg-blue-700 text-center hover:bg-blue-600 transition-colors duration-200 w-full  rounded-2xl   md:rounded-3xl   lg:rounded-5xl "
      onClick={() => handlePickCategory(category, data)}
    >
      <button className="text-white uppercase tracking-wide text-2xl md:text-4xl lg:text-5xl block text-center p-5 md:p-7 lg:p-10 w-full focus:ring-4 ring-blue-600 ring-offset-4 outline-none border-none  ">
        {category}
      </button>
    </li>
  );
}

export default Category;
