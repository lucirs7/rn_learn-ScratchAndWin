import { StyleSheet, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

let items = new Array(25).fill('empty');

export default function App() {
  const [randomNumber, setRandomNumber] = useState('');

  const generateRandomNumber = () => {
    //TODO Generate random number
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const scratchItem = () => {
    //TODO Decide lucky or unlucy
  };

  const scratchItemIcon = () => {
    //TODO Find right icon
  };

  const scratchItemColour = () => {
    //TODO Find right colour
  };

  const showAllItem = () => {
    //TODO Button - reveal all icons
  };

  const resetGame = () => {
    //TODO Reset the game
  };

  return (
    <View style={styles.container}>
      <Text>Scratch and win!</Text>
    </View>
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
