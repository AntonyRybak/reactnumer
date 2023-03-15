import React from 'react';
import { Image, StyleSheet } from 'react-native';
import backgroundImage from './images/background.png'

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 390,
    height: 666,
    opacity: 1,
    borderColor: 'green',
    resizeMode: 'contain' // или 'cover' в зависимости от того, как вы хотите отобразить изображение
  },
});

export default function BackgroundImage() {
  return <Image source={backgroundImage} style={styles.backgroundImage} />;
}
