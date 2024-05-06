import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

let items = new Array(25).fill('empty');

export default function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [isScratched, setIsScratched] = useState(false);

  const generateRandomNumber = () => {
    let randNumber = Math.floor(Math.random() * 25);
    setRandomNumber(randNumber);
    setIsScratched(true);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const scratchItem = (itemNumber: number) => {
    if (randomNumber === itemNumber) {
      items[itemNumber] = 'lucky';
    } else {
      items[itemNumber] = 'unlucky';
    }
  };

  const scratchItemIcon = (itemNumber: number): string => {
    if (items[itemNumber] === 'lucky') {
      return 'dollar';
    } else {
      return 'frown-o';
    }
  };

  const scratchItemColour = (itemNumber: number): string => {
    if (items[itemNumber] === 'lucky') {
      return 'green';
    } else if (items[itemNumber] === 'unlucky') {
      return 'red';
    } else {
      return 'black';
    }
  };

  const showAllItem = () => {
    items.fill('unlucky');
    items[randomNumber] = 'lucky';
  };

  const resetGame = () => {
    generateRandomNumber();
    items = new Array(25).fill('empty');
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
