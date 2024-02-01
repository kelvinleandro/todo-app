import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const CreateButton = ({ onPress }) => {
  return (
    <StyledTouchableOpacity onPress={onPress} activeOpacity={0.75}>
      <ButtonContainer>
        <Ionicons name="add" size={48} color="#0F1C2E" />
      </ButtonContainer>
    </StyledTouchableOpacity>
  );
};

export default CreateButton;

const StyledTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 10px;
`;

const ButtonContainer = styled.View`
  border-radius: 28px;
  padding: 8px;
  background-color: #acc2ef;
`;