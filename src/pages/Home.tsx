import { useState, useCallback } from "react";
import Intro from "./Intro";
import Content from "./Content";

export default function Home() {
  const [isStart, setIsStart] = useState(false as boolean);
  const startTest = useCallback((): void => {
    setIsStart(true);
  }, []);
  return <>{!isStart ? <Intro startTest={startTest} /> : <Content />}</>;
}
