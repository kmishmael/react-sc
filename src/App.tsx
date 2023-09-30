import H1 from "./components/title";
import { DefaultButton, ExtendedButton } from "./components/button";
import styled, { ThemeProvider } from "styled-components";
import Loading from "./components/loading";

const baseTheme = {
  background: "#fff",
  color: "#222",
};
const darkTheme = {
  background: "#222",
  color: "#fff",
};

const Container = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <H1>Styled Components</H1>
          
          <p>
            Cillum culpa deserunt enim et eiusmod quis proident consequat tempor
            ipsum sunt esse.
          </p>
          <DefaultButton as='a' href="https://www.google.com">Click ME!</DefaultButton>
          {/**@ts-ignore */}
          <ExtendedButton red>Click ME!</ExtendedButton>

          <Loading />
        </Wrapper>
      </Container>
    </ThemeProvider>
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
