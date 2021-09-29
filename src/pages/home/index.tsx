import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from '../../components/WeatherInfo';
import UnitsPicker from '../../components/UnitsPicker/index';
import { colors } from '../../utils/index';
import ReloadIcon from '../../components/ReloadIcon/index';
import WeatherDetails from '../../components/WeatherDetails/index';

const WEATHER_API_KEY = '6f1f76cc2ec1bd5759e9cc165ea2dc5f';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentWeather, setCurrentWeather] = useState<undefined>();
  const [unitsSystem, setUnitsSystem] = useState<string>('metric');

  async function load() {
    setCurrentWeather(undefined);
    setErrorMessage('');
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMessage('Access to location is needed to run the app');
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherUrl);

      const result = await response.json();
      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage(String(error));
    }
  }

  useEffect(() => {
    load();
  }, [unitsSystem]);

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.main}>
          <UnitsPicker
            unitsSystem={unitsSystem}
            setUnitsSystem={setUnitsSystem}
          />
          <ReloadIcon load={load} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails
          currentWeather={currentWeather}
          unitsSystem={unitsSystem}
        />
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{String(errorMessage)}</Text>
        <StatusBar style='auto' />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{String(errorMessage)}</Text>
        <ActivityIndicator size='large' color={colors.PRIMARY_COLOR} />
        <StatusBar style='auto' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1,
  },
});
