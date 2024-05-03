import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CustomText from "../ui/CustomText";
import HowToPlayItem from "../ui/HowToPlayItem";

function HowToPlay() {
  const [isHeaderShadowed, setIsHeaderShadowed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsHeaderShadowed(scrollTop > 0); // Set to true if scroll position is greater than 0
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="flex justify-between items-center left-0 right-0 p-5 fixed sm:justify-start sm:p-10">
        {isHeaderShadowed && (
          <div className="absolute bottom-0 top-0 right-0 left-0 -z-10 h-36 bg-gradient-to-b from from-purple-950 to-purple-950/5 opacity-1 transition-opacity duration-500"></div>
        )}

        <NavLink to="/">
          <img
            src="/assets/images/icon-back.svg"
            className="w-12 sm:w-16 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            alt="back"
          />
        </NavLink>
        <CustomText>How to play</CustomText>
      </header>
      <ul className="min-h-screen flex flex-col justify-center items-center gap-10 container m-auto px-16 py-32 sm:py-40 lg:flex-row lg:py-52">
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
      </ul>
    </>
  );
}

export default HowToPlay;
