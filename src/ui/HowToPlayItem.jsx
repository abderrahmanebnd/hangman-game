function HowToPlayItem({ number, title, description }) {
  return (
    <li className="bg-white rounded-2xl sm:rounded-5xl py-7 px-4 sm:p-10 max-w-lg m-auto">
      <h2 className="text-2xl sm:text-4xl uppercase tracking-wide mb-3 flex gap-2 lg:text-5xl lg:flex-col lg:items-center lg:gap-5 lg:mb-7 text-center">
        <span className="text-blue-600">{number}</span>
        <span className="text-indigo-800">{title}</span>
      </h2>
      <span className="text-indigo-400 sm:text-xl lg:text-center lg:text-2xl">
        {description}
      </span>
    </li>
  );
}

export default HowToPlayItem;
