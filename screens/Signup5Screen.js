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
import authService from '../services/auth';
import Loader from '../components/Loader';
import theme from '../theme';

export default function Signup5Screen({ navigation }) {
  const dispatch = useDispatch();
  const appData = useSelector(state => state.app);
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleRegister = async ({
    email,
    password,
    firstName,
    lastName,
    phoneNumber
  }) => {
    try {
      setLoading(true);
      const { data } = await authService.register({
        email,
        password,
        firstName,
        lastName,
        phoneNumber
      });
      dispatch(userDetails({ ...appData, ...data, password }));
      navigation.reset({
        index: 0,
        routes: [{ name: 'Signup4' }]
      });
    } catch (error) {
      setLoading(false);
      setError(
        error.response.data.data?.message || error.response.data.message
      );
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      keyboardShouldPersistTaps='handled'>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Loader isLoading={loading} />
          <View style={styles.hero}>
            <Image
              source={require('../assets/SureBucks.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.main}>
            <View>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Choose password*'
                onChangeText={value => setPassword(value)}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Repeat password*'
                onChangeText={value => setRepeatPassword(value)}
              />
              {error !== '' && <Text style={styles.errorText}>{error}</Text>}
            </View>
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                if (password === '') {
                  setError('Password is required');
                  return;
                }
                if (repeatPassword === '') {
                  setError('Repeat Password is required');
                  return;
                }
                if (password.length < 6) {
                  setError('Password length must be 6 or more characters');
                  return;
                }
                if (password !== repeatPassword) {
                  setError("Password doesn't match");
                  return;
                }
                setError('');
                handleRegister({
                  email: appData.email,
                  firstName: appData.firstName,
                  lastName: appData.lastName,
                  phoneNumber: appData.phoneNumber,
                  password
                });
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? theme.color.primaryLight
                    : theme.color.primary
                },
                styles.button
              ]}>
              <Text style={styles.buttonText}>Sign Up</Text>
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
    height: 100,
    width: 200,
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
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    marginBottom: 10
  }
});
