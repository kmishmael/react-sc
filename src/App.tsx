import H1 from "./components/title"
import { DefaultButton } from "./components/button"

function App() {

  return (
    <div>
      <H1>Styled Components</H1>
      <p>Cillum culpa deserunt enim et eiusmod quis proident consequat tempor ipsum sunt esse.</p>
      <DefaultButton>Click ME!</DefaultButton>
      <DefaultButton red={'red'}>Click ME!</DefaultButton>
    </div>
  )
}

export default App
