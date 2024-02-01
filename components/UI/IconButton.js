import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <StyledTouchableOpacity onPress={onPress} activeOpacity={0.75}>
      <IconContainer>
        <Ionicons name={icon} size={size} color={color} />
      </IconContainer>
    </StyledTouchableOpacity>
  );
};

export default IconButton;

const StyledTouchableOpacity = styled.TouchableOpacity``;

const IconContainer = styled.View`
  border-radius: 24px;
  padding: 6px;
  margin-horizontal: 8px;
  margin-vertical: 2px;
`;