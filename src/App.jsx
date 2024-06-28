import { useRef } from "react";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";

export const App = () => {
  const learnMoreRef = useRef();

  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center">
        <Hero learnMoreRef={learnMoreRef} />
        <Info learnMoreRef={learnMoreRef} />
      </div>
    </>
  );
};
