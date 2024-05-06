import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'native-base';

let items = new Array(25).fill('empty');

export default function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [isScratched, setIsScratched] = useState(false);
  const [uploadView, setUploadView] = useState(false);
  const [allScratch, setAllScratch] = useState(false);

  const generateRandomNumber = () => {
    let randNumber = Math.floor(Math.random() * 25);
    setRandomNumber(randNumber);
    setIsScratched(false);
  };

  useEffect(() => {
    generateRandomNumber();
    setUploadView(false);
  }, [isScratched, uploadView]);

  const scratchItem = (itemNumber: number) => {
    if (randomNumber === itemNumber) {
      items[itemNumber] = 'lucky';
    } else {
      items[itemNumber] = 'unlucky';
    }
    setIsScratched(true);
    console.log('Just clicked! randNum= ', randomNumber, '; itemNum=', itemNumber);
  };

  const scratchItemIcon = (itemNumber: number): any => {
    if (items[itemNumber] === 'lucky') {
      return 'dollar';
    } else if (items[itemNumber] === 'unlucky') {
      return 'frown-o';
    } else {
      return 'circle';
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

  const showAllItems = () => {
    items.fill('unlucky');
    items[randomNumber] = 'lucky';
    setUploadView(true);
    setAllScratch(true);
  };

  const resetGame = () => {
    generateRandomNumber();
    items = new Array(25).fill('empty');
    setUploadView(true);
    setAllScratch(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topText}>Scratch and win!</Text>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(0)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(0)}
            size={50}
            color={scratchItemColour(0)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(1)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(1)}
            size={50}
            color={scratchItemColour(1)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(2)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(2)}
            size={50}
            color={scratchItemColour(2)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(3)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(3)}
            size={50}
            color={scratchItemColour(3)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(4)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(4)}
            size={50}
            color={scratchItemColour(4)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(5)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(5)}
            size={50}
            color={scratchItemColour(5)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(6)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(6)}
            size={50}
            color={scratchItemColour(6)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(7)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(7)}
            size={50}
            color={scratchItemColour(7)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(8)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(8)}
            size={50}
            color={scratchItemColour(8)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(9)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(9)}
            size={50}
            color={scratchItemColour(9)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(10)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(10)}
            size={50}
            color={scratchItemColour(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(11)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(11)}
            size={50}
            color={scratchItemColour(11)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(12)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(12)}
            size={50}
            color={scratchItemColour(12)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(13)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(13)}
            size={50}
            color={scratchItemColour(13)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(14)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(14)}
            size={50}
            color={scratchItemColour(14)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(15)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(15)}
            size={50}
            color={scratchItemColour(15)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(16)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(16)}
            size={50}
            color={scratchItemColour(16)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(17)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(17)}
            size={50}
            color={scratchItemColour(17)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(18)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(18)}
            size={50}
            color={scratchItemColour(18)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(19)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(19)}
            size={50}
            color={scratchItemColour(19)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(20)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(20)}
            size={50}
            color={scratchItemColour(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(21)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(21)}
            size={50}
            color={scratchItemColour(21)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(22)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(22)}
            size={50}
            color={scratchItemColour(22)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(23)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(23)}
            size={50}
            color={scratchItemColour(23)}
            />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.item}
              onPress={() => {scratchItem(24)}}
              disabled={allScratch}
            >
            <FontAwesome
            name={scratchItemIcon(24)}
            size={50}
            color={scratchItemColour(24)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {showAllItems()}}>
        <Text style={styles.buttonText}>Show all coupons</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.button, backgroundColor: 'bisque'}}
        onPress={() => {resetGame()}}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
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
  topBar: {
    backgroundColor: 'coral',
    height: 85,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  topText: {
    marginVertical: 16,
    fontSize: 24,
    fontWeight: 'bold'
  },
  gridContainer: {

  },
  rowContainer: {
    flexDirection: 'row',
  },
  item: {
    alignItems: 'center',
    padding: 8,
    borderWidth: 2,
    borderColor: 'grey',
    minWidth: 64,
  },
  button: {
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
    width: Dimensions.get('window').width * 0.45,
    backgroundColor: 'darksalmon'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
  },
});
