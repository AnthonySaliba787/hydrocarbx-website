import FullLogo from "../assets/logo.png";

export const Hero = ({ learnMoreRef }) => {
  return (
    <>
      <div className="max-w-5xl min-h-screen flex flex-col justify-center items-center py-4 px-4">
        <img
          src={FullLogo}
          alt="HydroCarbX logo"
          className="w-96 md:w-[30rem]"
        />
        <button
          onClick={() =>
            learnMoreRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="py-3 my-2 w-1/2 bg-blue-500 rounded-md uppercase text-white font-medium shadow-md duration-300 hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg active:bg-blue-500 active:shadow-sm"
        >
          Learn More
        </button>
      </div>
    </>
  );
};
