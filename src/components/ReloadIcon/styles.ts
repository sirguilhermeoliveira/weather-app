import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../utils/index';
const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

const createStyles = () => {
  return StyleSheet.create({
    reloadIcon: {
      position: 'absolute',
      top: 30,
      right: 20,
    },
  });
};

export default createStyles;
