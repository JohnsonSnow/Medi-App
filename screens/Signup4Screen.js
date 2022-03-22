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
import { useSelector } from 'react-redux';
import authService from '../services/auth';
import Loader from '../components/Loader';
import theme from '../theme';

export default function Signup4Screen({ navigation }) {
  const appData = useSelector(state => state.app);
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [requestMessage, setRequestMessage] = React.useState('');

  const handleValidateOtp = async () => {
    try {
      setLoading(true);
      await authService.confirmOtp(appData.email, code);
      navigation.reset({
        index: 0,
        routes: [{ name: 'SignupComplete' }]
      });
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  const handleRequestOtp = async () => {
    try {
      setLoading(true);
      const data = await authService.requestOtp(appData.email);
      setRequestMessage(data.message);
      setError('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
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
            <Text style={styles.title}>
              We sent you a code to verify your number.
            </Text>
            <Text
              style={
                styles.subtitle
              }>{`Sent to (${appData.phoneCode}) ${appData.phoneNumber}`}</Text>
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
              <Pressable
                onPress={() => {
                  Keyboard.dismiss();
                  handleRequestOtp();
                }}>
                <Text style={styles.text}>Didn't get it? Send a new code</Text>
              </Pressable>
              {requestMessage !== '' && (
                <Text style={styles.text}>{requestMessage}</Text>
              )}
            </View>
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                handleValidateOtp();
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? theme.color.primaryLight
                    : theme.color.primary
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
    flex: 1
  },
  hero: {
    paddingTop: 20,
    alignItems: 'center'
  },
  main: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.color.primary,
    textAlign: 'center',
    paddingHorizontal: 50
  },
  subtitle: {
    color: theme.color.primaryLight,
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '600'
  },
  image: {
    height: 100,
    width: 200,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: theme.color.primary,
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
    marginTop: 30,
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
