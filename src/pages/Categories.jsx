import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderOnScroll from "../ui/common/HeaderOnScroll";
import CustomText from "../ui/common/CustomText";
import Category from "../ui/Category";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setCategories(Object.entries(jsonData.categories));
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <header className="flex justify-between items-center left-0 right-0 p-5 fixed sm:justify-start sm:p-10 flex-wrap gap-5">
        <HeaderOnScroll />
        <NavLink to="/">
          <img
            src="/assets/images/icon-back.svg"
            className="w-12 sm:w-16 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            alt="back"
            width="50"
            height="50"
          />
        </NavLink>
        <CustomText>Pick a Category</CustomText>
      </header>
      <ul className="min-h-screen content-center place-items-center grid grid-cols-1 md:grid-cols-2 gap-7 container m-auto px-16 py-32 sm:py-40 lg:grid-cols-3 lg:py-52">
        {categories.map(
          (
            [category, categoryData], // Destructure category and categoryData from each entry
            index
          ) => (
            <Category data={categoryData} category={category} key={index} />
          )
        )}
      </ul>
    </>
  );
}

export default Categories;
