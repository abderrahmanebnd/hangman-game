function CustomText({ children }) {
  return (
    <h1 className="block relative text-4xl sm:text-6xl lg:text-8xl tracking-wider sm:m-auto">
      <span className="relative text-stroke-2   ">{children}</span>
      <span className="bg-gradient-to-b from-blue-500 to-white bg-clip-text  absolute inset-0 text-transparent ">
        {children}
      </span>
    </h1>
  );
}

export default CustomText;
