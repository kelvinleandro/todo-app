import React from 'react';
import styled from 'styled-components/native';

const Button = ({ children, mode, onPress }) => {
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

const ButtonContainer = styled.View`
  border-radius: 4px;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  background-color: ${({mode, theme}) => (mode === 'flat' ? 'transparent' : theme.button)};
`;

const ButtonText = styled.Text`
  color: ${({mode, theme}) => (mode === 'flat' ? theme.button : theme.primary)};
  text-align: center;
  font-weight: 500;
`;
