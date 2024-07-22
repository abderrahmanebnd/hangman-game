import { useEffect, useState } from "react";

function HeaderOnScroll() {
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
    isHeaderShadowed && (
      <div className="absolute bottom-0 top-0 right-0 left-0 -z-10 h-36 bg-gradient-to-b from from-purple-950 to-purple-950/5 opacity-1 transition-opacity duration-500"></div>
    )
  );
}

export default HeaderOnScroll;
