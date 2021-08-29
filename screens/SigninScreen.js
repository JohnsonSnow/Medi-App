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
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

export default function SigninScreen({ navigation }) {
  const appData = useSelector(state => state.app);

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
            <Text style={styles.title}>AppName</Text>
            <Text style={styles.subtitle}>
              Get a quick consult in 5 minutes
            </Text>
          </View>
          <Formik
            initialValues={{
              uid: '',
              password: ''
            }}
            validationSchema={yup.object().shape({
              uid: yup.mixed().required('Email or Phone is required'),
              password: yup.string().required('Password is required')
            })}
            onSubmit={({ uid, password }, actions) => {
              if (
                ![appData.email.toLowerCase(), appData.phoneNumber].includes(
                  uid.toLowerCase()
                )
              ) {
                actions.setErrors({ uid: 'Email or Phone is incorrect' });
                return;
              }
              if (![appData.password].includes(password)) {
                actions.setErrors({ password: 'Password is incorrect' });
                return;
              }
              navigation.reset({
                index: 0,
                routes: [{ name: 'Dashboard' }]
              });
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched
            }) => (
              <View style={styles.main}>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder='Email or Phone*'
                    onChangeText={handleChange('uid')}
                    onBlur={handleBlur('uid')}
                    value={values.uid}
                  />
                  {errors.uid && touched.uid && (
                    <Text style={styles.errorText}>{errors.uid}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Password*'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                <Pressable
                  onPress={() => {
                    Keyboard.dismiss();
                    handleSubmit();
                  }}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? '#767c96' : '#687089'
                    },
                    styles.button
                  ]}>
                  <Text style={styles.buttonText}>Sign in</Text>
                </Pressable>
                <Text style={styles.text}>
                  By proceeding you also agree to the Terms of Service and
                  Privacy Policy
                </Text>
              </View>
            )}
          </Formik>
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
    paddingTop: 40,
    alignItems: 'center'
  },
  main: {
    height: 300,
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    fontWeight: '600',
    marginBottom: 5
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
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10
  }
});
