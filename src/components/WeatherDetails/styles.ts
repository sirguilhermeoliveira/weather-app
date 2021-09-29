import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../utils/index';
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

const createStyles = () => {
  return StyleSheet.create({
    weatherDetails: {
      marginTop: 'auto',
      borderWidth: 1,
      borderColor: BORDER_COLOR,
      borderRadius: 10,
      margin: 15,
    },
    weatherDetailsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    weatherDetailsBox: {
      flex: 1,
      padding: 20,
    },
    weatherDetailsItems: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    textSecondary: {
      fontSize: 15,
      color: SECONDARY_COLOR,
      fontWeight: '700',
      margin: 7,
    },
  });
};

export default createStyles;
