import styled from "@emotion/styled";

type Func = {
  startTest: () => void;
};

export default function Intro({ startTest }: Func) {
  return (
    <section>
      <Img src="https://city.travelcode.kr/img/back_new.32ec6f63.jpg" alt="나를 도시로 표현한다면?" />
      <BtnWrapper>
        <Btn type="button" onClick={startTest}>
          나랑 찰떡궁합 도시 알아보기
        </Btn>
      </BtnWrapper>
      <Img
        src="https://city.travelcode.kr/img/back_b.652dfb99.jpg"
        alt="파란 하늘 배경, 하얀 구름 위에 비행기가 날아가고 있는 일러스트 그림"
      />
    </section>
  );
}

const Img = styled.img`
  width: 100%;
`;

const BtnWrapper = styled.div`
  padding: 1em 0;
  margin: -1.5em 0 -1em;
  background: #009cfb;
`;

const Btn = styled.button`
  width: 280px;
  height: 80px;
  margin: 1em 0 0 0.5em;
  background: url(https://city.travelcode.kr/img/startbtb.083b1537.png) no-repeat left;
  background-size: auto 70px;
  text-indent: -9999px;
  outline: 0 none;
`;
