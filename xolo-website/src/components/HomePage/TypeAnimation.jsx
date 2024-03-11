import React, {useEffect, useState} from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Friend", "Assistant", "AI", "Dory!"];

const colors = ["#ff595e", "#d1d646", "#00798c", "#edae49"];

export const TypeAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h2>
      <TextTransition 
        className="home-title-text-transition"
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
        style={{ color: colors[index % colors.length] }}
      />
    </h2>
  );
};
