import { useState, useEffect, useCallback } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export default function Result() {
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
          alt="파란색 비행기 모양 아이콘"
        />
      ) : (
        <>
          <ResultImg
            src="https://city.travelcode.kr/img/paris.b7af9115.jpg"
            alt="파리: 당신은 패션과 디저트를 사랑하는 파리지앵"
          />
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

const ResultImg = styled.img`
  width: 100%;
`;
