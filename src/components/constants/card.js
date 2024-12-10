import Link from "next/link";

const Card = ({ id, categoryName, imageSrc, categoryUrl }) => {
  return (
    <a className="flex cursor-pointer flex-col">
      <figure className="relative h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] overflow-hidden rounded-full bg-[#ffffff] transition-colors duration-300 hover:bg-[#ffffff]">
        <img
          className="absolute inset-0 h-full w-full transform rounded-md object-contain p-4 transition-transform duration-300 ease-in-out hover:scale-110"
          src={imageSrc}
          alt={categoryName}
        />
      </figure>
      <h3 className="mt-3 text-center text-base font-semibold text-slate-500">
        {categoryName}
      </h3>
    </a>
  );
};

export default Card;
