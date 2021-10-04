import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import { format, differenceInYears } from 'date-fns';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../store/actions';
import TermsAndConditionModal from '../shared/TermsAndConditionModal';

export default function Signup2Screen({ navigation }) {
  const dispatch = useDispatch();
  const appData = useSelector(state => state.app);
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [birthday, setBirthday] = React.useState(null);
  const [gender, setGender] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

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
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneCode: appData.phoneCode,
              phoneNumber: appData.phoneNumber,
              email: '',
              birthday: '',
              gender: null
            }}
            validationSchema={yup.object().shape({
              firstName: yup.string().required(),
              lastName: yup.string().required(),
              phoneCode: yup.number().required().positive().integer(),
              phoneNumber: yup.number().required().positive().integer(),
              email: yup.string().email().required(),
              birthday: yup
                .string()
                .nullable()
                .test(
                  'birthday',
                  'You need to be 18 years or greater',
                  function (value) {
                    return (
                      differenceInYears(
                        new Date(),
                        new Date(format(new Date(birthday), 'MM/dd/yyyy'))
                      ) >= 18
                    );
                  }
                )
            })}
            onSubmit={({
              firstName,
              lastName,
              phoneCode,
              phoneNumber,
              email,
              birthday,
              gender
            }) => {
              dispatch(
                userDetails({
                  ...appData,
                  firstName,
                  lastName,
                  phoneCode,
                  phoneNumber,
                  email,
                  birthday,
                  gender
                })
              );
              navigation.navigate('Signup3');
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
                <TextInput
                  style={{
                    ...styles.input,
                    borderWidth: errors.firstName && touched.firstName ? 1 : 0,
                    borderColor:
                      errors.firstName && touched.firstName ? '#f00' : null
                  }}
                  placeholder='First Name*'
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                />
                <TextInput
                  style={{
                    ...styles.input,
                    borderWidth: errors.lastName && touched.lastName ? 1 : 0,
                    borderColor:
                      errors.lastName && touched.lastName ? '#f00' : null
                  }}
                  placeholder='Last Name*'
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                />
                <View style={styles.phoneSection}>
                  <TextInput
                    style={{ ...styles.input, width: 60, marginRight: 10 }}
                    placeholder='+234'
                    keyboardType='phone-pad'
                    onChangeText={handleChange('phoneCode')}
                    onBlur={handleBlur('phoneCode')}
                    value={values.phoneCode}
                    editable={false}
                  />
                  <TextInput
                    style={{ ...styles.input, flex: 1 }}
                    placeholder='Phone Number*'
                    keyboardType='numeric'
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    editable={false}
                  />
                </View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderWidth: errors.email && touched.email ? 1 : 0,
                    borderColor: errors.email && touched.email ? '#f00' : null
                  }}
                  placeholder='E-Mail*'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Pressable onPress={() => setShowDatePicker(true)}>
                  <View pointerEvents='none'>
                    <TextInput
                      style={{
                        ...styles.input,
                        borderWidth:
                          errors.birthday && touched.birthday ? 1 : 0,
                        borderColor:
                          errors.birthday && touched.birthday ? '#f00' : null
                      }}
                      placeholder='Birthday'
                      onChangeText={handleChange('birthday')}
                      onBlur={handleBlur('birthday')}
                      value={
                        birthday
                          ? format(new Date(birthday), 'dd/MM/yyyy')
                          : null
                      }
                    />
                    {errors.birthday && touched.birthday && (
                      <Text style={{ color: '#f00', marginBottom: 5 }}>
                        {errors.birthday}
                      </Text>
                    )}
                  </View>
                </Pressable>
                {showDatePicker && (
                  <DateTimePicker
                    style={styles.input}
                    mode='date'
                    value={new Date()}
                    onChange={(event, selectedDate) => {
                      setShowDatePicker(false);
                      setBirthday(selectedDate || null);
                    }}
                  />
                )}
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{ label: 'Select your gender', value: null }}
                    onValueChange={value => setGender(value)}
                    style={{ inputAndroid: { color: 'black' } }}
                    value={gender}
                    items={[
                      { label: 'Male', value: 'Male' },
                      { label: 'Female', value: 'Female' }
                    ]}
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
                        backgroundColor: pressed ? '#767c96' : '#687089'
                      },
                      styles.button
                    ]}>
                    <Text style={styles.buttonText}>Next</Text>
                  </Pressable>
                  <Text
                    style={styles.text}
                    onPress={() => navigation.navigate('Signin')}>
                    Already have an account?{' '}
                    <Text style={{ textDecorationLine: 'underline' }}>
                      Sign in
                    </Text>
                  </Text>
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
    flex: 1,
    backgroundColor: '#eff1f8'
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
  phoneSection: {
    flexDirection: 'row'
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  picker: {
    backgroundColor: '#fff',
    color: '#000',
    height: 40,
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: 10,
    justifyContent: 'center'
  }
});
