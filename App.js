import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import SplashScreen from './Screens/SplashScreen';
import BottomTab from './Navigations/BottomTabs';
import RootNav from './Navigations/RootNav';

export default function App() {
  return (
    <View style={styles.container}>
      <RootNav />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
