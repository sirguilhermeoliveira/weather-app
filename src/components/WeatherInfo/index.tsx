import React from 'react';
import { View, Text, Image } from 'react-native';
import createStyles from './styles';

interface IcurrentWeather {
  currentWeather: {
    main: { temp: number };
    weather: { icon: string; main: string; description: string }[];
    name: string;
  };
}

export default function WeatherInfo({ currentWeather }: IcurrentWeather) {
  const styles = createStyles();
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;
  const { icon, main, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}º</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
}
