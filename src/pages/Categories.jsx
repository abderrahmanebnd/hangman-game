import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import HeaderOnScroll from "../ui/common/HeaderOnScroll";
import CustomText from "../ui/common/CustomText";
import Category from "../ui/Category";
import { m } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

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
      <m.header
        className="flex justify-between items-center left-0 right-0 p-5 fixed z-10 sm:justify-start sm:p-10 flex-wrap gap-5"
        initial={{
          y: 30,
        }}
        animate={{
          y: 0,
        }}
      >
        <HeaderOnScroll />
        <NavLink to="/">
          <m.img
            src="/assets/images/icon-back.svg"
            className="w-12 sm:w-16 cursor-pointer hover:opacity-80 transition-all  hover:scale-110  duration-300"
            alt="back"
            width="50"
            height="50"
            whileTap={{
              scale: 0.95,
            }}
          />
        </NavLink>
        <CustomText>Pick a Category</CustomText>
      </m.header>
      <m.ul
        className="min-h-screen content-center place-items-center grid grid-cols-1 md:grid-cols-2 gap-7 container m-auto px-5 sm:px-16 py-32 sm:py-40 lg:grid-cols-3 lg:py-52"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {categories.map(
          (
            [category, categoryData], // Destructure category and categoryData from each entry
            index
          ) => (
            <Category data={categoryData} category={category} key={index} />
          )
        )}
      </m.ul>
    </>
  );
}

export default Categories;
