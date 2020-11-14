import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Amplify from 'aws-amplify'
import config from './aws-exports'
import LoadInvestigations from './LoadInvestigations';
Amplify.configure(config)

import BottomNav from './components/BottomNav'


export default function App() {
  LoadInvestigations()
  return (
    <div>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <BottomNav />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
