import { Container } from "./components/Container/Container"
import { InputComponent } from "./components/Inputs/Inputs"
import { MainContainer } from "./components/MainContainer/MainContainer"

function App() {

  return (
    <MainContainer >
      <Container verticalDirection="column" horizontalDirection="center" gap={1} top={3}>
        <InputComponent place="Insert your text here"
          label="Insert Your Text" />
      </Container>
    </MainContainer>
  )
}

export default App
