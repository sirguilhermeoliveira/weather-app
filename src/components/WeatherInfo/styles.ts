import { StyleSheet } from 'react-native';
import { colors } from '../../utils/index';
const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

const createStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    weatherIcon: {
      width: 100,
      height: 100,
    },
    weatherDescription: {
      textTransform: 'capitalize',
    },
    textPrimary: {
      fontSize: 40,
      color: PRIMARY_COLOR,
    },
    textSecondary: {
      fontSize: 20,
      color: SECONDARY_COLOR,
      fontWeight: '500',
      marginTop: 10,
    },
  });
};

export default createStyles;
