import { StyledGame } from "./styles";
import touch from '../../assets/touch.png'

export const Game = () =>{
    return (

    <StyledGame>
        <img src={touch} alt='Coloque o dedo aqui'/>
    </StyledGame>
    )
}