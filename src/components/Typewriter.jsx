import { useEffect, useState } from "react";

function Typewriter({ text, speed = 60 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));

      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="typewriter">
      {displayedText}
      <span className="cursor">|</span>
    </div>
  );
}

export default Typewriter;