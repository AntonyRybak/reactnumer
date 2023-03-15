import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DigitPathScreen from './DigitPathScreen'
import ArhetypeScreen from './Arhetype.Screen';
import ScaresScreen from './ScaresScreen';
import MatrixScreen from './MatrixScreen';
import TalantScreen from './TalantScreen';
import LuckScreen from './LuckScreen';
import background from '../images/background.png';
import { useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

export function PredictionsScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ваши прогнозы"
        component={MainScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { color: 'white' }
        }}
      />
      <Stack.Screen name="Число пути" component={DigitPathScreen} options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { color: 'white' }
        }} />
      <Stack.Screen name="Архетип" component={ArhetypeScreen} options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { color: 'white' }
        }}/>
      <Stack.Screen name="Ваши страхи" component={ScaresScreen} options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { color: 'white' }
        }} />
      <Stack.Screen name="Любовь" component={MatrixScreen} options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { color: 'white' }
        }} />
      <Stack.Screen name="Число таланта" component={TalantScreen} options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { color: 'white' }
        }} />
      <Stack.Screen name="Число удачи" component={LuckScreen} options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { color: 'white' }
        }}/>
    </Stack.Navigator>
  );
}

function MainScreen({ navigation }) {
  const { params } = useRoute();
  const numberPath = params?.numberPath;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={background} style={styles.image} resizeMode="stretch" />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>Выберите свой прогноз:</Text>
        
          <View style={styles.button}>
            <Button title="Архетип" onPress={() => navigation.navigate('Архетип')} color="white" />
          </View>
          <View style={styles.button}>
        <Button title="Число пути" onPress={() => navigation.navigate('Число пути')} color="white" />
        </View>
          <View style={styles.button}>
            <Button title="Ваши страхи" onPress={() => navigation.navigate('Ваши страхи')} color="white" />
        </View>
          <View style={styles.button}>
            <Button title="Любовь" onPress={() => navigation.navigate('Любовь')} color="white" />
          </View>
          <View style={styles.button}>
            <Button title="Число таланта" onPress={() => navigation.navigate('Число таланта')} color="white" />
          </View>
          <View style={styles.button}>
            <Button title="Число удачи" onPress={() => navigation.navigate('Число удачи')} color="white" />
          </View>
      </View>
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
      height: '85%',
      marginTop: '25%',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -650,
      
      
    },
    button: {
        backgroundColor: 'rgba(158, 0, 255, 0.8)',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 220, // задаем фиксированную ширину для всех кнопок
        marginBottom: 10,
        height: '10%', 
        textAlign: 'center',
        fontWeight: 'bold',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 70,
      },
      
      
  });
  