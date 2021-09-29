import React from 'react';
import createStyles from './styles';
import { Picker } from '@react-native-community/picker';

export default function UnitsPicker({ unitsSystem, setUnitsSystem }: any) {
  const styles = createStyles();
  return (
    <Picker
      selectedValue={unitsSystem}
      onValueChange={(item) => setUnitsSystem(item)}
      mode='dropdown'
      itemStyle={{ fontSize: 12 }}
    >
      <Picker.Item label='Cº' value='metric' />
      <Picker.Item label='Fº' value='imperial' />
    </Picker>
  );
}
