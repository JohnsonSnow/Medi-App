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
import { format } from 'date-fns';
import CurrencyInput from 'react-native-currency-input';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Request2Screen({ navigation }) {
  const [medicalAllowance, setMedicalAllowance] = React.useState('');
  const [amountPaid, setAmountPaid] = React.useState('');
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [paymentDate, setPaymentDate] = React.useState(null);

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
            <View style={styles.picker}>
              <RNPickerSelect
                placeholder={{ label: 'Profession (Select)', value: null }}
                onValueChange={value => console.log(value)}
                style={{ inputAndroid: { color: 'black' } }}
                items={[
                  { label: 'Engineer', value: 'engineer' },
                  { label: 'Lawyer', value: 'lawyer' },
                  { label: 'Lecturer', value: 'lecturer' }
                ]}
              />
            </View>
            <View style={styles.picker}>
              <RNPickerSelect
                placeholder={{
                  label: 'Profession Sub Category (Select)',
                  value: null
                }}
                onValueChange={value => console.log(value)}
                style={{ inputAndroid: { color: 'black' } }}
                items={[
                  {
                    label: 'Automobile Engineer',
                    value: 'automobile-engineer'
                  },
                  { label: 'Civil Engineer', value: 'civil-engineer' },
                  { label: 'Mechanical Engineer', value: 'mechanical-engineer' }
                ]}
              />
            </View>
            <TextInput style={styles.input} placeholder='Employer Name' />
            <CurrencyInput
              value={medicalAllowance}
              onChangeValue={setMedicalAllowance}
              prefix='₦'
              delimiter=','
              separator='.'
              precision={2}
              style={styles.input}
              placeholder='Medical Allowance'
              keyboardType='numeric'
            />
            <Pressable onPress={() => setShowDatePicker(true)}>
              <View pointerEvents='none'>
                <TextInput
                  style={styles.input}
                  placeholder='Payment Date'
                  onChangeText={value => setPaymentDate(value)}
                  value={
                    paymentDate
                      ? format(new Date(paymentDate), 'dd/MM/yyyy')
                      : null
                  }
                />
              </View>
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                style={styles.input}
                mode='date'
                value={new Date()}
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  setPaymentDate(selectedDate || null);
                }}
              />
            )}
            <TextInput style={styles.input} placeholder='Key Contact' />
            <CurrencyInput
              value={amountPaid}
              onChangeValue={setAmountPaid}
              prefix='₦'
              delimiter=','
              separator='.'
              precision={2}
              style={styles.input}
              placeholder='Amount Paid'
              keyboardType='numeric'
            />
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                navigation.navigate('Request3');
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#767c96' : '#687089'
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
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  picker: {
    backgroundColor: '#fff',
    height: 40,
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: 10,
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
