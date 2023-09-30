import H1 from "./components/title";
import { DefaultButton, ExtendedButton } from "./components/button";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Wrapper>
        <H1>Styled Components</H1>
        <p>
          Cillum culpa deserunt enim et eiusmod quis proident consequat tempor
          ipsum sunt esse.
        </p>
        <DefaultButton>Click ME!</DefaultButton>
        {/**@ts-ignore */}
        <ExtendedButton red>Click ME!</ExtendedButton>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  h1 {
    text-align: center;
    color: violet;
  }

  p {
    font-size: 40px;
  }

  button {
    background-color: pink;
    padding: 4px 8px;
    border: none;
  }
`;
export default App;
