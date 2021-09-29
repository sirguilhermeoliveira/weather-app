import React from 'react';
import { View, Text } from 'react-native';
import createStyles from './styles';
import { colors } from '../../utils/index';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const { BORDER_COLOR, PRIMARY_COLOR } = colors;

interface IcurrentWeatherUnitsSystem {
  currentWeather: {
    main: { feels_like: string; humidity: string; pressure: string };
    wind: { speed: number };
  };
  unitsSystem: string;
}

export default function WeatherDetails({
  currentWeather,
  unitsSystem,
}: IcurrentWeatherUnitsSystem) {
  const styles = createStyles();
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitsSystem === 'metric'
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} miles/h`;
  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name='temperature-low'
              size={25}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels like :</Text>
              <Text style={styles.textSecondary}>{feels_like} °</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name='water'
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Humidity :</Text>
              <Text style={styles.textSecondary}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: 1,
          borderTopColor: BORDER_COLOR,
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name='weather-windy'
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Wind Speed :</Text>
              <Text style={styles.textSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name='speedometer'
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Pressure :</Text>
              <Text style={styles.textSecondary}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
