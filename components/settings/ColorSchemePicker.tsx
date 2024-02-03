import React, { useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { ColorSchemeContext } from "../../context/ColorSchemeContext";

const ColorSchemePicker: React.FC = () => {
  const colorSchemeCtx = useContext(ColorSchemeContext);

  return (
    <RNPickerSelect
      onValueChange={colorSchemeCtx.setValue}
      items={[
        { label: 'Automatic', value: 'automatic' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ]}
      value={colorSchemeCtx.value}
      style={{
        inputIOS: {
          color: 'white',
        },
        inputAndroid: {
          color: 'white',
        },
      }}
      placeholder={{}}
    />
  );
};

export default ColorSchemePicker;