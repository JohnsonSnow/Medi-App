import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../store/actions';
import TermsAndConditionModal from '../shared/TermsAndConditionModal';
import theme from '../theme';

export default function Signup1Screen({ navigation }) {
  const dispatch = useDispatch();
  const appData = useSelector(state => state.app);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      keyboardShouldPersistTaps='handled'>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar style='light' />
          <View style={styles.hero}>
            <Image
              source={require('../assets/SureBucks.png')}
              style={styles.image}
            />
            {/* <Text style={styles.title}>Welcome</Text> */}
          </View>
          <Formik
            initialValues={{
              phoneCode: '',
              phoneNumber: ''
            }}
            validationSchema={yup.object().shape({
              phoneCode: yup.number().required().positive().integer(),
              phoneNumber: yup.number().required().positive().integer()
            })}
            onSubmit={({ phoneCode, phoneNumber }) => {
              dispatch(userDetails({ ...appData, phoneCode, phoneNumber }));
              navigation.navigate('Signup2');
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
                <View style={styles.phoneSection}>
                  <TextInput
                    style={{
                      ...styles.phoneCode,
                      borderWidth:
                        errors.phoneCode && touched.phoneCode ? 1 : 0,
                      borderColor:
                        errors.phoneCode && touched.phoneCode ? '#f00' : null
                    }}
                    placeholder='+234'
                    keyboardType='phone-pad'
                    onChangeText={handleChange('phoneCode')}
                    onBlur={handleBlur('phoneCode')}
                    value={values.phoneCode}
                    maxLength={4}
                  />
                  <TextInput
                    style={{
                      ...styles.phoneNumber,
                      borderWidth:
                        errors.phoneNumber && touched.phoneNumber ? 1 : 0,
                      borderColor:
                        errors.phoneNumber && touched.phoneNumber
                          ? '#f00'
                          : null
                    }}
                    placeholder='Phone Number'
                    keyboardType='numeric'
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    maxLength={11}
                  />
                </View>
                <View>
                  <Text
                    style={styles.text}
                    onPress={() => setModalVisible(true)}>
                    By proceeding you also agree to the{' '}
                    <Text style={{ textDecorationLine: 'underline' }}>
                      Terms of Service and Privacy Policy
                    </Text>
                  </Text>
                  <Pressable
                    onPress={() => {
                      Keyboard.dismiss();
                      handleSubmit();
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
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
      <TermsAndConditionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    paddingTop: 40,
    // backgroundColor: theme.color.primary,
    alignItems: 'center'
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    fontSize: 16
  },
  image: {
    marginTop: 20,
    height: 100,
    width: 200,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.color.primary,
    fontWeight: '600',
    marginTop: 10
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
  phoneSection: {
    flexDirection: 'row'
  },
  phoneCode: {
    height: 40,
    width: 60,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    marginRight: 10
  },
  phoneNumber: {
    flex: 1,
    height: 40,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10
  }
});
