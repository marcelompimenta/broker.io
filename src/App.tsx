import { ButtonComponent } from "./components/Button/Button"
import { Container } from "./components/Container/Container"
import { InputComponent } from "./components/Inputs/Inputs"
import { MainContainer } from "./components/MainContainer/MainContainer"
import { TextAreaComponent } from "./components/TextArea/TextArea"

function App() {

  return (
    <MainContainer >
      <Container
        verticalDirection="column"
        horizontalDirection="center"
        gap={1} top={3}>
        <InputComponent place="texto a ser tratado"
          label="Insira seu texto" colorText="#fff" />
        <Container gap={1}>
          <InputComponent
            place="Simbolos - Letras - Números"
            label="Remover"
            colorText="#fff" />
          <InputComponent
            place="Simbolos - Letras - Números"
            label="Inserir"
            colorText="#fff" />
        </Container>
        <Container justify="end" top={.5}>
          <ButtonComponent innerText="Gerar novo texto" />
        </Container>
        <TextAreaComponent
          placeholder="Resultado do tratamento"
          label="Resultado" />
      </Container>
    </MainContainer>
  )
}

export default App
''