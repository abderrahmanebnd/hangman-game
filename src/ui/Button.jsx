function Button({ children, type, role, onClick }) {
  let quitStyle = "";
  if (type === "quit") {
  }

  return (
    <button className=" bg-blue-600 shadow-primary-shadow text-white block w-3/4 m-auto uppercase rounded-full py-2 text-2xl md:text-4xl xl:text-5xl  tracking-wide  cursor-pointer hover:opacity-80 transition-opacity duration-200 h-full">
      {children}
    </button>
  );
}

export default Button;
// --clr-bg: #2463ff;
//   --clr-shadow: #140e66;
//   --clr-highlight: #3c74ff;

///the categories and prepare the store
