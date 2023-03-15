import React from 'react';
import { View, Text, StyleSheet,ImageBackground, ScrollView } from 'react-native';
import globalScares1 from '../function/GlobalScares1';
import globalScares2 from '../function/GlobalScares2';
import globalScares3 from '../function/GlobalScares3';
import background from '../images/background.png';

export default function ScaresScreen() {
  let scareText = '';

  if (globalScares1.scares1 === 1) {
    scareText = 'Вы боитесь одиночества';
  } else if (globalScares1.scares1 === 2) {
    scareText = 'Вы боитесь теней';
  } else if (globalScares1.scares1 === 3) {
    scareText = 'Вы боитесь перемен';
  } else if (globalScares1.scares1 === 4) {
    scareText = 'Вы боитесь ограничений';
  } else if (globalScares1.scares1 === 5) {
    scareText = 'Вы боитесь смерти';
  } else if (globalScares1.scares1 === 6) {
    scareText = 'Вы боитесь неудач';
  } else if (globalScares1.scares1 === 7) {
    scareText = 'Вы боитесь высоты';
  } else if (globalScares1.scares1 === 8) {
    scareText = 'Вы боитесь темноты';
  } else if (globalScares1.scares1 === 9) {
    scareText = 'Вы боитесь изменений';
  }

  if (globalScares2.scares2 === 1) {
    scareText += '\n Вы также боитесь конфликтов';
  } else if (globalScares2.scares2 === 2) {
    scareText += '\n Вы также боитесь больших скоростей';
  } else if (globalScares2.scares2 === 3) {
    scareText += '\n Вы также боитесь публичных выступлений';
  } else if (globalScares2.scares2 === 4) {
    scareText += '\n Вы также боитесь животных';
  } else if (globalScares2.scares2 === 5) {
    scareText += '\n Вы также боитесь заболеваний';
  } else if (globalScares2.scares2 === 6) {
    scareText += '\n Вы также боитесь неизвестности';
  } else if (globalScares2.scares2 === 7) {
    scareText += '\n Вы также боитесь тесных пространств';
  } else if (globalScares2.scares2 === 8) {
    scareText += '\n Вы также боитесь технологий';
  } else if (globalScares2.scares2 === 9) {
    scareText += '\n Вы также боитесь потери контроля';
  }

  if (globalScares3.scares3 === 1) {
    scareText += '\n Вы также боитесь изменений в жизни';
  } else if (globalScares3.scares3 === 2) {
    scareText += '\n Вы также боитесь потери близких';
  } else if (globalScares3.scares3 === 3) {
    scareText += '\n Вы также боитесь собственной смерти';
  } else if (globalScares3.scares3 === 4) {
    scareText += '\n Вы также боитесь потери работы';
  } else if (globalScares3.scares3 === 5) {
    scareText += '\n Вы также боитесь потери свободы';
  } else if (globalScares3.scares3 === 6) {
    scareText += '\n Вы также боитесь разочарования';
  } else if (globalScares3.scares3 === 7) {
    scareText += '\n Вы также боитесь потери здоровья';
  } else if (globalScares3.scares3 === 8) {
    scareText += '\n Вы также боитесь потери материальных благ';
  } else if (globalScares3.scares3 === 9) {
    scareText += '\n Вы также боитесь потери контроля над своей жизнью';
  }

 

return (
  <View style={styles.container}>
    <View style={styles.overlay} />
    <ImageBackground source={background} style={styles.image}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.textContainer}>
        
          <Text style={styles.text}>{scareText}</Text>
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
