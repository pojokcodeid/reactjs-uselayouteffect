import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [isShaking, setShaking] = useState(false);
  let prevTime = useRef(0);

  useLayoutEffect(() => {
    console.log("time on click", performance.now() - prevTime.current);
    const title = document.querySelector(".title");
    if (isShaking) {
      title.classList.add("shake");
    } else {
      title.classList.remove("shake");
    }
  }, [isShaking]);

  const handleShake = () => {
    prevTime.current = performance.now();
    setShaking((prevShake) => !prevShake);
  };
  return (
    <>
      <div className="App">
        <h1 className="title">Hello World</h1>
        <p>isShaking --: {isShaking ? "Yay! 😎 " : "Nil 😌"}</p>
        <button className="toggler" onClick={handleShake}>
          Toggle Shake
        </button>
      </div>
    </>
  );
}

export default App;
