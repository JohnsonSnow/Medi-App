import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import theme from '../theme';

export default function Request1Screen({ navigation }) {
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      keyboardShouldPersistTaps='handled'>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.hero}>
            <Image
              source={require('../assets/SureBucks.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.main}>
            <TextInput style={styles.input} placeholder='Policy Number' />
            <TextInput style={styles.input} placeholder='Reference Code' />
            <TextInput style={styles.input} placeholder='Agent Name' />
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                navigation.navigate('Request2');
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? theme.color.primaryLight
                    : theme.color.primary
                },
                styles.button
              ]}>
              <Text style={styles.buttonText}>Proceed</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    paddingTop: 40,
    alignItems: 'center'
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    fontSize: 16
  },
  image: {
    height: 100,
    width: 200,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 20,
    padding: 14,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
  input: {
    height: 40,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    marginBottom: 10
  }
});
