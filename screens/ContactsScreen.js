import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import email from 'react-native-email';

const ContactsScreen = () => {
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');

  const handleTelegramLink = () => {
    Linking.openURL('https://t.me/+ZAwIlQJFVOw0YjRi');
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  const handleSendMessage = () => {
    const subject = 'Сообщение с формы обратной связи';
    const body = `Сообщение от: ${text} \nНомер телефона: ${phone}`;

    email(['toxa-wow@mail.ru'], {
      subject: subject,
      body: body,
    }).then(() => {
      console.log('Письмо отправлено успешно');
      Alert.alert('Успех', 'Письмо было отправлено успешно');
    }).catch((error) => {
      console.error('Ошибка отправки письма', error);
      Alert.alert('Ошибка', 'Не удалось отправить письмо');
    });

    setText('');
    setPhone('');
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <TouchableOpacity onPress={handleTelegramLink}>
            <View style={styles.row}>
              <Text style={styles.label}>Телеграмм канал:</Text>
              <Icon name="telegram" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>Форма обратной связи</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Хочу заказать у вас прогноз..."
            value={text}
            onChangeText={setText}
            multiline={true}
            numberOfLines={4}
          />
          <TextInput
            style={[styles.textInput, styles.smallTextInput]}
            placeholder="Электронная почта"
            keyboardType="email-address"
            value={phone}
            onChangeText={setPhone}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Отправить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileInfo: {
    marginTop: -100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    color: 'white', // белый текст
    fontSize: 20,
  },
  formContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  formLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  textInput: {
    backgroundColor: 'white',
    width: 300,
    height: 150,
    padding: 10,
    marginBottom: 10,
    borderRadius: 25,
    textAlignVertical: 'top',
  },
  smallTextInput: {
    height: 40,
  },
  sendButton: {
    backgroundColor: '#9E00FF',
    borderRadius: 80,
    padding: 15,
    width: 300,
    marginTop: 100,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ContactsScreen;