import { Fcard } from "../constants/fcard";
const Features = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 flex justify-center">
            Our Best
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Fcard />
            <Fcard />
            <Fcard />
            <Fcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
