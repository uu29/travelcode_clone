import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import styled from "@emotion/styled";

export default function App() {
  return (
    <Main>
      <Route exact path="/" component={Home} />
      <Route path="/result/:city" component={Result} />
    </Main>
  );
}

const Main = styled.main`
  display: block;
  @media screen and (min-width: 1024px) {
    max-width: 400px;
    margin: auto;
  }
`;
