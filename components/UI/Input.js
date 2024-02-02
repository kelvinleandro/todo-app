import React from "react";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";

const Input = ({ label, textInputConfig }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField {...textInputConfig} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled(View)`
  margin: 0 8px;
`;

const Label = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.text};
  margin-bottom: 4px;
`;

const InputField = styled(TextInput)`
  background-color: #fff;
  padding: 6px;
  font-size: 18px;
  color: ${({ theme }) => theme.inputText};
`;
