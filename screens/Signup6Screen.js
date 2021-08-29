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
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../store/actions';

export default function Signup6Screen({ navigation }) {
  const dispatch = useDispatch();
  const appData = useSelector(state => state.app);
  const [pinCode, setPinCode] = React.useState('');
  const [confirmPinCode, setConfirmPinCode] = React.useState('');
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
          </View>
          <View style={styles.main}>
            <View>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Select Pin Code'
                keyboardType='numeric'
                onChangeText={value => setPinCode(value)}
                maxLength={4}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Confirm Pin Code'
                keyboardType='numeric'
                onChangeText={value => setConfirmPinCode(value)}
                maxLength={4}
              />
              {error !== '' && <Text style={styles.errorText}>{error}</Text>}
            </View>
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                if (pinCode.length !== 4) {
                  setError('Pin code should be 4-digit');
                  return;
                }
                if (pinCode === '') {
                  setError('Pin is required');
                  return;
                }
                if (confirmPinCode === '') {
                  setError('Confirm Pin is required');
                  return;
                }
                if (pinCode !== confirmPinCode) {
                  setError("Pin doesn't match");
                  return;
                }
                setError('');
                dispatch(userDetails({ ...appData, pinCode }));
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'SignupComplete' }]
                });
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#767c96' : '#687089'
                },
                styles.button
              ]}>
              <Text style={styles.buttonText}>Select PIN</Text>
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
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20
  },
  errorText: {
    fontSize: 12,
    color: '#f00',
    fontWeight: '600'
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 80,
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
