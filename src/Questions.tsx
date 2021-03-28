import styled from "@emotion/styled";

interface IChoice {
  text: string;
  value: number;
}

interface IQuestions {
  id: number;
  question: string;
  choice: IChoice[];
}

interface IQuestionsProps {
  questions: IQuestions[];
  step: number;
  opacity: number;
  qid: number;
  onClickRes: (cValue: number) => void;
}

export default function Questions({ questions, step, opacity, qid, onClickRes }: IQuestionsProps) {
  return (
    <Wrapper>
      <Top>
        <PlainImg
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAfCAYAAABeWmuGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMDdmM2NkOC03NmJmLTQ5OTItOTgyNS03ZDFmZjQ4ODNhNzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkM3Q0RDQkFCREJCMTFFQTk4RTlCNTA1M0NGQTI0NjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkM3Q0RDQjlCREJCMTFFQTk4RTlCNTA1M0NGQTI0NjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiOGExYTM0MS1lNmQ1LTRjMWMtYjM1NC0zYWY0ZTIyNTMyMTciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplNDllZjI5Yi1lNTk2LWM5NDItYTA0Ny0xMzZlOGI1MWNjNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4gV+hwAAADWElEQVR42tyZ2WsUQRDGu03GA6MoigeIB4qgURQSxRBCEAxExAcRFdQHowxeD4L+F4qvRh1FjVdUVNR4YMB4REVC8qAJnvFCI9EQ4xU1s0G/GmthCdnZ6dk5bfj1Puxud8831VXV1VI4aYY5Dv0GoIMR4DQ4Au4JXfsj/qMmMwhRin4rWAZy+/nFK3DUQtdeRPIJDTMHfT6YCCaAwaAbdICHoDX1pUqbgcrRX1WY+j6LcwoTdIYswij0q/hFLgB5Nr/+QP8Au7Du73aCFKGvBwMUl9MDalicK5ikJyAR6FnKwEawFGiKIzwDCzNtmcXoq8Fwl8vs5P9XQZgHPgkxGv06sAlMzXK0i9LBhDPQXwZTspzseYq/ee2BEMUswkow0CN5E1LhLZwDJR5NfBscs6KVrn1REIEsdS3YDGb5YG/fpMJi6C1UgvUeLuAXmam1pYS4DnHMNHPPRb8FrAZDffREB6ULU92BfqcLZ5upfQIneEs1Yp4hHCnIGuYH4JbfgHnS5f5dws4yz6fFPQVjwMiAAvV7sAgv4ol0PYRhzkZ/CUyKeXJab1mirrWJrMxe1x6xKd+NqRCfwTZQmhQjc+ru3NnuBRUxEeItr7cSQnSpnWWi4Wy9aHRWucZRkrLnXneHO3fO9iQYFhEhPlIoBfudJoPS8yUYZj6fZSaHKMQttobzqmepXI/FKORywdgQROjiGs0+iPDYfT3EMOfg8wAoAO0cNW6COgzc4kCEZAJFQhSGIEQD2MPHgO7sC0SGSQ89M8337SzODYvUIpBhTuMssiLABCrZ6MGPW9FC15q8HJgESeAzRyGjq+MssswXH2TfmjlkUnr/1Y8JSBCqipVHOG8gp3iGfcMdvyfL5dMrbYvpEROi1RJBiEMQoiOoSSX7A6pBXgDFIYvQy+cjCpm1YVT0ZZ9oQRWt5SEI8S4lgWoL843IPiGUnOtuPvQEkU7XsjXUQIhEFPapTJNbbGdh/GhUCDrMIfNl1Dy43TXECt5CgzysO5A1nIUQv6Ma0jJdQ5Sws3WbeFGuUMXW0CJi0JxeQ1CuolIZa+J0uhpC/BAxak6vIcZbpi5Ekc2vfvLRn6yhQcS0qVxDUBK3Rvy7JSvgmgfdqTRax2y6Z+mnAhW39leAAQB9ae6jJWHgywAAAABJRU5ErkJggg=="
          alt="파란색 비행기 모양 아이콘"
          step={step}
        />
        <PlainLine step={step} />
      </Top>
      <Bottom opacity={opacity}>
        <Question>{questions[qid].question}</Question>
        <ol>
          {questions[qid].choice.map((citem, ci) => (
            <Response key={ci} onClick={() => onClickRes(citem.value)}>
              {citem.text}
            </Response>
          ))}
        </ol>
      </Bottom>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #efefef;
  height: 100vh;
  padding: 1em;
`;

const Top = styled.div`
  padding: 3em 4px 2em;
`;

const PlainLine = styled.div<{ step: number }>`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  height: 4px;
  position: relative;
  transition: all 1s;

  &:before {
    position: absolute;
    left: calc(100% / 12 * ${(props) => props.step});
    top: -42px;
    transform: translateX(-50%);
    color: #009cfb;
    content: "${(props) => {
      if (props.step === 12) return "끝";
      else return props.step;
    }}";
    font-weight: bold;
    transition: all 1s;
  }

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #009cfb;
    content: "";
    width: calc(100% / 12 * ${(props) => props.step});
    border-radius: 4px;
    transition: all 1s;
  }
`;

const PlainImg = styled.img<{ step: number }>`
  position: relative;
  height: 15px;
  left: calc(100% / 12 * ${(props) => props.step});
  transform: translateX(-50%);
  transition: all 1s;
`;

const Question = styled.h1`
  padding: 1em 4px 0;
  font-size: 2em;
  font-weight: normal;
  height: 200px;
`;

const Response = styled.li`
  margin-bottom: 1.5em;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 5px 5px 4px 2px rgba(214, 214, 214, 0.85);
  background: #fff;
  padding: 1.25em;
  text-align: center;
  font-size: 1.25em;
`;

const Bottom = styled.section<{ opacity: number }>`
  opacity: ${(props) => props.opacity};
  transition: all 0.5s;
`;
