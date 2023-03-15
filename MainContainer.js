import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DateScreen from './screens/DateScreen';
import ContactsScreen from './screens/ContactsScreen';
import { Ionicons } from '@expo/vector-icons';
import { PredictionsScreen } from './screens/PredictionsScreen';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const homeName = 'Выбор даты';
const detailsName = 'Прогнозы';
const settingsName = 'Контакты';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = 'list-sharp';
            } else if (rn === settingsName) {
              iconName = focused ? 'contacts' : 'contacts';
            }
            if (rn === homeName || rn === detailsName) {
              return <Ionicons name={iconName} size={size} color={color} />;
            } else {
              return <AntDesign name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#9E00FF',
          tabBarLabelStyle: { paddingBottom: 0, fontSize: 10 },
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 1,
            borderColor: '#9E00FF'
          },
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
        })}
      >
        <Tab.Screen
          name={homeName}
          component={DateScreen}
          options={{
            headerTransparent: true,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="calendar-outline"
                size={size}
                color={color}
                options={{ selectedDate: new Date() }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={detailsName}
          component={PredictionsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="list-sharp" size={size} color={color} />
       
            ),
          }}
        />
        <Tab.Screen name={settingsName} component={ContactsScreen} options={{ tabBarIcon: ({ focused, color, size }) => <AntDesign name="contacts" size={size} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    marginBottom: 10,
  },
});
