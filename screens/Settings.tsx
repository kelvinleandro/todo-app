import React from "react";
import styled from "styled-components/native";
import ColorSchemePicker from "@components/settings/ColorSchemePicker";

const Settings: React.FC = () => {
  return (
    <SettingsContainer>
      <SettingOption>
        <Label>Color Scheme:</Label>
        <PickerWrapper>
          <ColorSchemePicker />
        </PickerWrapper>
      </SettingOption>
    </SettingsContainer>
  );
};

export default Settings;

const SettingsContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const SettingOption = styled.View`
  flex-direction: column;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.secondary};
  padding-bottom: 10px;
`;

const PickerWrapper = styled.View`
  background-color: ${({theme}) => theme.dropdown};
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;
