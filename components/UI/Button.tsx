import React from 'react';
import styled from 'styled-components/native';

interface ButtonProps {
  children: React.ReactNode;
  mode: 'flat' | 'contained';
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, mode, onPress }) => {
  return (
    <StyledTouchableOpacity onPress={onPress} activeOpacity={0.75}>
      <ButtonContainer mode={mode}>
        <ButtonText mode={mode}>{children}</ButtonText>
      </ButtonContainer>
    </StyledTouchableOpacity>
  );
};

export default Button;

const StyledTouchableOpacity = styled.TouchableOpacity``;

interface StyleProps {
  mode: 'flat' | 'contained';
}

const ButtonContainer = styled.View<StyleProps>`
  border-radius: 4px;
  padding: 16px 8px;
  background-color: ${({ mode, theme }) => (mode === 'flat' ? 'transparent' : theme.button)};
`;

const ButtonText = styled.Text<StyleProps>`
  color: ${({ mode, theme }) => (mode === 'flat' ? theme.button : theme.primary)};
  text-align: center;
  font-weight: 500;
`;