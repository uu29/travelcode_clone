import { useState, useCallback } from "react";
import Home from "./Home";
import Content from "./Content";
import styled from "@emotion/styled";

export default function App() {
  const [isStart, setIsStart] = useState(false as boolean);
  const startTest = useCallback((): void => {
    setIsStart(true);
  }, []);
  return <Main>{!isStart ? <Home startTest={startTest} /> : <Content />}</Main>;
}

const Main = styled.main`
  display: block;
  @media screen and (min-width: 1024px) {
    max-width: 400px;
    margin: auto;
  }
`;
