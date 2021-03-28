import { useState, useCallback } from "react";
import Home from "./Home";
import Content from "./Content";

export default function App() {
  const [isStart, setIsStart] = useState(false as boolean);
  const startTest = useCallback((): void => {
    setIsStart(true);
  }, []);
  return <>{!isStart ? <Home startTest={startTest} /> : <Content />}</>;
}
