import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, size, onPress }) => {
  return (
    <StyledTouchableOpacity onPress={onPress} activeOpacity={0.75}>
      <IconContainer>
        <StyledIcon name={icon} size={size} />
      </IconContainer>
    </StyledTouchableOpacity>
  );
};

export default IconButton;

const StyledTouchableOpacity = styled.TouchableOpacity``;

const IconContainer = styled.View`
  border-radius: 24px;
  padding: 6px;
  margin: 8px 2px;
`;

const StyledIcon = styled(Ionicons).attrs((props) => ({
  color: props.theme.text,
}))``;
