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
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../store/actions';
import stateAndCity from '../data/state-city.json';
import theme from '../theme';

export default function Signup3Screen({ navigation }) {
  const dispatch = useDispatch();
  const appData = useSelector(state => state.app);
  const [stateId, setStateId] = React.useState(null);
  const [cityId, setCityId] = React.useState(null);
  const [maritalStatus, setMaritalStatus] = React.useState(null);
  const [educationLevel, setEducationLevel] = React.useState(null);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
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
              address1: '',
              address2: ''
            }}
            onSubmit={({ address1, address2 }) => {
              dispatch(
                userDetails({
                  ...appData,
                  maritalStatus,
                  educationLevel,
                  address1,
                  address2
                })
              );
              navigation.navigate('Signup5');
            }}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.main}>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{
                      label: 'Select your marital status',
                      value: null
                    }}
                    onValueChange={value => setMaritalStatus(value)}
                    style={{ inputAndroid: { color: 'black' } }}
                    value={maritalStatus}
                    items={[
                      { label: 'Single', value: 'Single' },
                      { label: 'Married', value: 'Married' },
                      { label: 'Divorced', value: 'Divorced' }
                    ]}
                  />
                </View>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{
                      label: 'Select your education level',
                      value: null
                    }}
                    onValueChange={value => setEducationLevel(value)}
                    style={{ inputAndroid: { color: 'black' } }}
                    value={educationLevel}
                    items={[
                      { label: 'Undergraduate', value: 'Undergraduate' },
                      { label: 'Bachelor', value: 'Bachelor' },
                      { label: 'Masters', value: 'Masters' },
                      { label: 'Doctorate', value: 'Doctorate' }
                    ]}
                  />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder='Address Line 1'
                  onChangeText={handleChange('address1')}
                  onBlur={handleBlur('address1')}
                  value={values.address1}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Address Line 2'
                  onChangeText={handleChange('address2')}
                  onBlur={handleBlur('address2')}
                  value={values.address2}
                />
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{
                      label: 'Select your state',
                      value: null
                    }}
                    onValueChange={value => setStateId(value)}
                    style={{ inputAndroid: { color: 'black' } }}
                    value={stateId}
                    items={stateAndCity.map(data => ({
                      label: data.state.name,
                      value: data.state.id
                    }))}
                  />
                </View>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{
                      label: 'Select your city',
                      value: null
                    }}
                    disabled={stateId === null}
                    onValueChange={value => setCityId(value)}
                    style={{ inputAndroid: { color: 'black' } }}
                    value={cityId}
                    items={
                      stateAndCity
                        .find(data => data.state.id === stateId)
                        ?.state.locals.map(data => ({
                          label: data.name,
                          value: data.id
                        })) || []
                    }
                  />
                </View>
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
                  <Text style={styles.buttonText}>Finish</Text>
                </Pressable>
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
    height: 80,
    width: 80,
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
  },
  picker: {
    backgroundColor: '#f2f2f2',
    color: '#000',
    height: 40,
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: 10,
    justifyContent: 'center'
  }
});
