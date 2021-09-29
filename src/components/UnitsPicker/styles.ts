import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../utils/index';
const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

const createStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    unitsSystem: {
      position: 'absolute',
      ...Platform.select({
        ios: {
          top: -30,
        },
        android: {
          top: 30,
        },
      }),
      left: 20,
      height: 50,
      width: 100,
    },
  });
};

export default createStyles;
