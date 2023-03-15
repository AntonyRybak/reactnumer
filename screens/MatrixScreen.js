import React from 'react';
import { View, Text, StyleSheet,ImageBackground, ScrollView } from 'react-native';
import globalData from '../function/GlobalData';
import background from '../images/background.png';

export default function MatrixScreen() {
  let text = '';
  if (globalData.digitPath === 1) {
    text = '1';
  } else if (globalData.digitPath === 2) {
    text = '2';
  } else if (globalData.digitPath === 3) {
    text = '3';
  } else if (globalData.digitPath === 4) {
    text = '4';
  } else {
    text = 'Ошибка';
  }



return (
  <View style={styles.container}>
    <View style={styles.overlay} />
    <ImageBackground source={background} style={styles.image}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Число любви: {globalData.digitPath}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#585bf5',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#585bf5',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
