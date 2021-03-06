import { useState, useEffect, useCallback } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "react-router-dom";

type TParams = { city: string };

export default function Result({ match }: RouteComponentProps<TParams>) {
  const [isLoading, setIsLoading] = useState(true);

  const cbSetTout = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setTimeout(cbSetTout, 3000);
  }, [cbSetTout]);

  return (
    <section>
      {isLoading ? (
        <LoadingPlain
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAfCAYAAABeWmuGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMDdmM2NkOC03NmJmLTQ5OTItOTgyNS03ZDFmZjQ4ODNhNzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkM3Q0RDQkFCREJCMTFFQTk4RTlCNTA1M0NGQTI0NjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkM3Q0RDQjlCREJCMTFFQTk4RTlCNTA1M0NGQTI0NjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiOGExYTM0MS1lNmQ1LTRjMWMtYjM1NC0zYWY0ZTIyNTMyMTciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplNDllZjI5Yi1lNTk2LWM5NDItYTA0Ny0xMzZlOGI1MWNjNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4gV+hwAAADWElEQVR42tyZ2WsUQRDGu03GA6MoigeIB4qgURQSxRBCEAxExAcRFdQHowxeD4L+F4qvRh1FjVdUVNR4YMB4REVC8qAJnvFCI9EQ4xU1s0G/GmthCdnZ6dk5bfj1Puxud8831VXV1VI4aYY5Dv0GoIMR4DQ4Au4JXfsj/qMmMwhRin4rWAZy+/nFK3DUQtdeRPIJDTMHfT6YCCaAwaAbdICHoDX1pUqbgcrRX1WY+j6LcwoTdIYswij0q/hFLgB5Nr/+QP8Au7Du73aCFKGvBwMUl9MDalicK5ikJyAR6FnKwEawFGiKIzwDCzNtmcXoq8Fwl8vs5P9XQZgHPgkxGv06sAlMzXK0i9LBhDPQXwZTspzseYq/ee2BEMUswkow0CN5E1LhLZwDJR5NfBscs6KVrn1REIEsdS3YDGb5YG/fpMJi6C1UgvUeLuAXmam1pYS4DnHMNHPPRb8FrAZDffREB6ULU92BfqcLZ5upfQIneEs1Yp4hHCnIGuYH4JbfgHnS5f5dws4yz6fFPQVjwMiAAvV7sAgv4ol0PYRhzkZ/CUyKeXJab1mirrWJrMxe1x6xKd+NqRCfwTZQmhQjc+ru3NnuBRUxEeItr7cSQnSpnWWi4Wy9aHRWucZRkrLnXneHO3fO9iQYFhEhPlIoBfudJoPS8yUYZj6fZSaHKMQttobzqmepXI/FKORywdgQROjiGs0+iPDYfT3EMOfg8wAoAO0cNW6COgzc4kCEZAJFQhSGIEQD2MPHgO7sC0SGSQ89M8337SzODYvUIpBhTuMssiLABCrZ6MGPW9FC15q8HJgESeAzRyGjq+MssswXH2TfmjlkUnr/1Y8JSBCqipVHOG8gp3iGfcMdvyfL5dMrbYvpEROi1RJBiEMQoiOoSSX7A6pBXgDFIYvQy+cjCpm1YVT0ZZ9oQRWt5SEI8S4lgWoL843IPiGUnOtuPvQEkU7XsjXUQIhEFPapTJNbbGdh/GhUCDrMIfNl1Dy43TXECt5CgzysO5A1nIUQv6Ma0jJdQ5Sws3WbeFGuUMXW0CJi0JxeQ1CuolIZa+J0uhpC/BAxak6vIcZbpi5Ekc2vfvLRn6yhQcS0qVxDUBK3Rvy7JSvgmgfdqTRax2y6Z+mnAhW39leAAQB9ae6jJWHgywAAAABJRU5ErkJggg=="
          alt="????????? ????????? ?????? ?????????"
        />
      ) : (
        <>
          <Img
            src="https://city.travelcode.kr/img/paris.b7af9115.jpg"
            alt="??????: ????????? ????????? ???????????? ???????????? ????????????"
          />
          <Img
            src="https://city.travelcode.kr/img/book_new.bd597bf0.jpg"
            alt="????????? ????????? ?????? ??? ?????? ???, ????????? ???????????? ?????? ??? ????????????"
          />
          <Img src="https://city.travelcode.kr/img/togethertext.369839de.jpg" alt="?????? ????????? ?????? ????????????" />
          <ShareIcons>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAABJVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDpmOTc2YmE4Yi04ZTUwLTRkMjMtYTk0Yy1kZDc4NjllZTk1ZGI8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjNDI2NDY4Ni0yMmVlLTU5NGQtODM0NC02Y2U5Y2Y0OTI0NGQ8L3N0UmVmOmRvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6MTk1NjI0MkJCREFFMTFFQTk4RTlCNTA1M0NGQTI0NjE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MTk1NjI0MkFC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"
              width="45"
              height="45"
              alt="?????? ????????????"
            />
            <img src="https://city.travelcode.kr/img/kakao.54533992.png" width="45" height="45" alt="????????? ????????????" />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAABJVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDpmOTc2YmE4Yi04ZTUwLTRkMjMtYTk0Yy1kZDc4NjllZTk1ZGI8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjNDI2NDY4Ni0yMmVlLTU5NGQtODM0NC02Y2U5Y2Y0OTI0NGQ8L3N0UmVmOmRvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6MEYzRTUwNTZCREFFMTFFQTk4RTlCNTA1M0NGQTI0NjE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MEYzRTUwNTVC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"
              width="45"
              height="45"
              alt="???????????? ????????????"
            />
          </ShareIcons>
          <Img src="https://city.travelcode.kr/img/aginbutton.6efe00df.png" alt="????????? ?????? ?????????" />
          <LastImg src="https://city.travelcode.kr/img/instabutton.3b541979.png" alt="??????????????? ?????? ???????????????" />
        </>
      )}
    </section>
  );
}

const moveLeft = keyframes`
  0% {
    left: -100px;
  }
  100% {
    left: 101%;
  }
`;
const LoadingPlain = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation: ${moveLeft} 3s ease infinite;
`;

const Img = styled.img`
  width: 100%;
`;

const LastImg = styled.img`
  width: 100%;
  margin-bottom: 7.5em;
`;

const ShareIcons = styled.div`
  display: flex;
  width: 225px;
  margin: 0 auto 2em;
  justify-content: space-between;
`;
