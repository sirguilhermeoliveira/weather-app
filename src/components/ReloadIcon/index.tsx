import React from 'react';
import { View, Platform } from 'react-native';
import createStyles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils/index';

export default function ReloadIcon({ load }: any) {
  const styles = createStyles();
  const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={24}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  );
}
