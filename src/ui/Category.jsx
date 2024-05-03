import { useDispatch } from "react-redux";
import { pickedCategory } from "../slices/game";
import { useNavigate } from "react-router-dom";

function Category({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handlePickCategory(category) {
    dispatch(pickedCategory(category));
    navigate("/game");
  }
  return (
    <li
      className="uppercase tracking-wide text-white shadow-primary-shadow cursor-pointer bg-blue-700 text-center hover:bg-blue-600 transition-colors duration-200 w-full p-5 rounded-2xl text-2xl md:p-7 md:rounded-3xl md:text-4xl lg:p-10 lg:rounded-5xl lg:text-5xl"
      onClick={() => handlePickCategory(data)}
    >
      {data}
    </li>
  );
}

export default Category;
