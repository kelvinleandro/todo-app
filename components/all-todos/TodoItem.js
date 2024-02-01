import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const TodoItem = ({ id, text }) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('ManageTodo', {
      todoId: id,
    });
  };

  return (
    <StyledTouchableOpacity onPress={pressHandler} activeOpacity={0.7}>
      <ItemContainer>
        <ItemText>{text}</ItemText>
      </ItemContainer>
    </StyledTouchableOpacity>
  );
};

export default TodoItem;

const StyledTouchableOpacity = styled.TouchableOpacity``;

const ItemContainer = styled.View`
  background-color: #374357;
  padding: 12px;
  margin-bottom: 14px;
  border-radius: 12px;
`;

const ItemText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;