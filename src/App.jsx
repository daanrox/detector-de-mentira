import { useState } from 'react'
import { GlobalStyled } from './styles/globalStyles'
import { Container } from './components/Container'
import { StyledGame } from './components/Game/styles'
import { Game } from './components/Game'
import { StyledHeader, StyledFooter } from './components/Container/styles'
import { Button } from './components/Button'

function App() {
  const [isLie, setIsLie] = useState(true)

  return (
    <>
     <GlobalStyled/>
     <Container>
        <StyledHeader>Detector de mentiras</StyledHeader>
        <Game/>
        <Button>Resetar</Button>
        <StyledFooter>Feito com ❤️ para Isabela</StyledFooter>
     </Container>
    </>
  )
}

export default App
