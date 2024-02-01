import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

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
  background-color: ${(props) => (props.mode === 'flat' ? 'transparent' : '#acc2ef')};
`;

const ButtonText = styled.Text`
  color: ${(props) => (props.mode === 'flat' ? '#acc2ef' : '#0F1C2E')};
  text-align: center;
  font-weight: 500;
`;
