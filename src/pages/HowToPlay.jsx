import { NavLink } from "react-router-dom";
import CustomText from "../ui/common/CustomText";
import HowToPlayItem from "../ui/HowToPlayItem";
import HeaderOnScroll from "../ui/common/HeaderOnScroll";
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

function HowToPlay() {
  return (
    <>
      <m.header
        className="flex justify-between items-center left-0 right-0 p-5 fixed sm:justify-start sm:p-10 flex-wrap"
        initial={{
          y: 30,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          type: "spring",
        }}
      >
        <HeaderOnScroll />
        <NavLink to="/">
          <m.img
            src="/assets/images/icon-back.svg"
            className="w-12 sm:w-16 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            alt="back"
            width="50"
            height="50"
            whileTap={{
              scale: 0.95,
            }}
          />
        </NavLink>
        <CustomText>How to play</CustomText>
      </m.header>
      <m.ul
        className="min-h-screen flex flex-col justify-center items-center gap-5 lg:gap-10 container m-auto px-16 py-32 sm:py-40 lg:flex-row lg:py-52"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <HowToPlayItem
          number="01"
          title="Choose a category"
          description="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        />
        <HowToPlayItem
          number="02"
          title="Guess letters"
          description="Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses."
        />
        <HowToPlayItem
          number="03"
          title="Win or lose"
          description="You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
        />
      </m.ul>
    </>
  );
}

export default HowToPlay;
