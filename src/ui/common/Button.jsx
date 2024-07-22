function Button({ children, customClass, onClick }) {
  return (
    <button
      className={`bg-blue-700 hover:bg-blue-600 shadow-primary-shadow text-white block w-3/4 m-auto uppercase rounded-full py-3 text-2xl md:text-4xl xl:text-5xl  tracking-wide  cursor-pointer  transition-opacity duration-200 ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
// --clr-bg: #2463ff;
//   --clr-shadow: #140e66;
//   --clr-highlight: #3c74ff;

///the categories and prepare the store
