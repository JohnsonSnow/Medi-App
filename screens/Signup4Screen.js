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

export default function Signup4Screen({ navigation }) {
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      keyboardShouldPersistTaps='handled'>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.hero}>
            <Image
              source={require('../assets/default.png')}
              style={styles.image}
            />
            <Text style={styles.title}>
              We sent you a code to verify your number.
            </Text>
            <Text style={styles.subtitle}>Sent to (234) 7030418192</Text>
          </View>
          <View style={styles.main}>
            <View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder='Code'
                  keyboardType='numeric'
                  onChangeText={value => setCode(value)}
                  maxLength={6}
                />
                {error !== '' && <Text style={styles.errorText}>{error}</Text>}
              </View>
              <Text style={styles.text}>Didn't get it? Send a new code</Text>
            </View>
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                if (code.length !== 6) {
                  setError('Code must be 6-digit');
                  return;
                }
                setError('');
                navigation.navigate('Signup5');
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#767c96' : '#687089'
                },
                styles.button
              ]}>
              <Text style={styles.buttonText}>Next</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1f8'
  },
  hero: {
    paddingTop: 80,
    alignItems: 'center'
  },
  main: {
    height: 300,
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#687089',
    textAlign: 'center',
    paddingHorizontal: 50
  },
  subtitle: {
    color: '#b3b8c6',
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: '600'
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#b3b8c6',
    fontWeight: '600'
  },
  errorText: {
    fontSize: 12,
    color: '#f00',
    fontWeight: '600'
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 50,
    padding: 14,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10
  }
});
