import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, ...prop}: IButtonProps) => {
  return (
    <ButtonContainer {...prop} onClick={onClick}>
      { title }
    </ButtonContainer>
  )
};

export default Button;
