import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import globalData from '../function/GlobalData';
import background from '../images/background.png';

export default function DigitPathScreen() {
  let text = '';
  if (globalData.digitPath === 1) {
    text = 'Вы независимы, лидер и пионер. У вас сильная личность и много возможностей. Хорошо подходят профессии, требующие креативности, воображения и предпринимательского духа.';
  } else if (globalData.digitPath === 2) {
    text = 'Вы тактичны, дипломатичны и любите работать в команде. Сильные стороны - умение слушать, быть гибким и способность к поддержке других. Хорошо подходят профессии, связанные с музыкой, искусством и дизайном.Вы тактичны, дипломатичны и любите работать в команде. Сильные стороны - умение слушать, быть гибким и способность к поддержке других. Хорошо подходят профессии, связанные с музыкой, искусством и дизайном';
  } else if (globalData.digitPath === 3) {
    text = 'Вы общительны, эмоциональны и оптимистичны. Сильные стороны - творческий потенциал, коммуникабельность и яркость. Хорошо подходят профессии, связанные с коммуникациями, искусством и развлечениями.';
  } else if (globalData.digitPath === 4) {
    text = 'Вы надежны, ответственны и практичны. Сильные стороны - умение работать в команде, организованность и трудолюбие. Хорошо подходят профессии, связанные с ремеслом, архитектурой и финансами.';
  } else {
    text = 'Ошибка';
  }

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <ImageBackground source={background} style={styles.image}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Число пути: {globalData.digitPath}</Text>
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
