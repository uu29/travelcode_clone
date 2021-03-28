import { useState, useCallback } from "react";
import styled from "@emotion/styled";
import questions from "./questions.json";
import Questions from "./Questions";
import Result from "./Result";

export default function Content() {
  const [step, setStep] = useState(1);
  const [qid, setQid] = useState(0);
  const [point, setPoint] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isEnd, setIsEnd] = useState(false);

  const cbSetTout = useCallback(() => {
    setOpacity(1);
    setQid((prevQid) => prevQid + 1);
  }, []);

  const submitResult = useCallback(() => {
    console.log(point);
  }, [point]);

  const onClickRes = useCallback(
    (cValue: number) => {
      setStep((prevStep) => prevStep + 1);
      setPoint((prevPoint) => prevPoint + cValue);
      setOpacity(0);
      setTimeout(cbSetTout, 600);
      if (step >= questions.length) {
        setIsEnd(true);
        submitResult();
      }
    },
    [cbSetTout, step, submitResult]
  );

  return (
    <Wrapper>
      {!isEnd ? (
        <Questions questions={questions} step={step} opacity={opacity} qid={qid} onClickRes={onClickRes} />
      ) : (
        <Result />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #efefef;
  height: 100vh;
  padding: 1em;
`;
