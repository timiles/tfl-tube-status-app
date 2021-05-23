import React from 'react';
import { StyleSheet, View } from 'react-native';
import LineStatusesScreen from './components/LineStatusesScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <LineStatusesScreen />
    </View>
  );
}
