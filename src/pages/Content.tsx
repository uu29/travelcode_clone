import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import questions from "../questions.json";
import Questions from "./Questions";

export default function Content() {
  const history = useHistory();
  const [step, setStep] = useState(1);
  const [qid, setQid] = useState(0);
  const [point, setPoint] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [clickedBtn, setClickedBtn] = useState(-1);

  const cbSetTout = useCallback(() => {
    setOpacity(1);
    setQid((prevQid) => prevQid + 1);
    setClickedBtn(-1);
  }, []);

  const submitResult = useCallback(() => {
    console.log(point);
  }, [point]);

  const onClickRes = useCallback(
    (cValue: number, ci: number) => {
      setClickedBtn(ci);
      setStep((prevStep) => prevStep + 1);
      setPoint((prevPoint) => prevPoint + cValue);
      setOpacity(0);
      setTimeout(cbSetTout, 600);
      if (step >= questions.length) {
        history.push("/result/paris");
        submitResult();
      }
    },
    [cbSetTout, step, submitResult, history]
  );

  return (
    <Questions
      questions={questions}
      step={step}
      opacity={opacity}
      qid={qid}
      onClickRes={onClickRes}
      clickedBtn={clickedBtn}
    />
  );
}
