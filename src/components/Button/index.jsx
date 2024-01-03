import { StyledButton } from "./styles"

export const Button = ({children}) =>{

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )
}