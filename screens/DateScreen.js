import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import background from '../images/background.png';
import { createStackNavigator } from '@react-navigation/stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { calculateNumberPath } from '../function/FunctionDigitPath';
import { calculateArhetip } from '../function/FunctionArhetype';
import { calculateScares } from '../function/FunctionScares';
import { calculateTalantLuck } from '../function/FunctionTalantLuck';
import globalTalantLuck from '../function/GlobalTalantLuck';

const Stack = createStackNavigator();

export default function DateScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numberPath, setNumberPath] = useState(null);

  const handleDateChange = (event, date) => {
    setSelectedDate(date || selectedDate);
    const newNumberPath = calculateNumberPath(date || selectedDate);
    setNumberPath(newNumberPath);

    const arhetip = calculateArhetip(date || selectedDate);
  //console.log('Arhetip:', arhetip);

    const scares1 = calculateScares (date || selectedDate);
    //console.log('scares:',globalScares3)
    const talantLuck = calculateTalantLuck (date || selectedDate);
    //console.log('scares:',globalTalantLuck)
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={background} style={styles.image} resizeMode="stretch" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Введите дату рождения</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Бесплатные прогнозы"
            onPress={() => navigation.navigate('Прогнозы')}
            color="#fff"
          />
        </View>
      </View>
      <View style={styles.numberPathContainer}>
        {numberPath && (
          <Text style={styles.numberPathText}>Ваша основная цифра: {numberPath}</Text>
        )}
      </View>
      <DateTimePicker
        value={selectedDate}
        mode='date'
        display='spinner'
        onChange={handleDateChange}
        textStyle={{ fontSize: wp('4.5%'), fontWeight: 'bold' }}
        locale='ru'
        style={{ position: 'absolute', zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 20, overflow: 'hidden' }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#585bf5',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    position: 'relative',
    width: '90%',
    height: '73%',
    marginTop: '0%',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    top: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: wp('6%'),
    fontWeight: 'bold',
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 22,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#9E00FF',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 0,
    width: '85%',
    opacity: 0.8,
    fontWeight: 'bold',
  },
  numberPathContainer: {
    position: 'absolute',
    bottom: hp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  numberPathText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
  
});
