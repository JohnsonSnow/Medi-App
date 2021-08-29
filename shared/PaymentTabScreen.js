import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function PaymentTabScreen() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = React.useState({ cardNumber: null, cvv: null });
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      keyboardShouldPersistTaps='handled'>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Card Details</Text>
          <View style={styles.main}>
            <View style={styles.picker}>
              <RNPickerSelect
                placeholder={{ label: 'Card Type', value: null }}
                onValueChange={value => console.log(value)}
                style={{ inputAndroid: { color: 'black' } }}
                items={[
                  { label: 'Master Card', value: 'master-card' },
                  { label: 'Verve', value: 'verve' },
                  { label: 'Visa', value: 'visa' }
                ]}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder='Card Number'
              keyboardType='numeric'
              onChangeText={value => setCardNumber(value)}
              maxLength={16}
            />
            {error.cardNumber !== null && (
              <Text style={styles.errorText}>{error.cardNumber}</Text>
            )}
            <TextInput style={styles.input} placeholder='Name on Card' />
            <View style={styles.phoneSection}>
              <TextInput
                style={{ ...styles.input, flex: 1, marginRight: 10 }}
                placeholder='Expiry Date'
                keyboardType='numeric'
              />
              <View>
                <TextInput
                  style={{ ...styles.input, flex: 1 }}
                  placeholder='CVV'
                  keyboardType='numeric'
                  onChangeText={value => setCvv(value)}
                  maxLength={3}
                />
                {error.cvv !== null && (
                  <Text style={styles.errorText}>{error.cvv}</Text>
                )}
              </View>
            </View>
            <View>
              <Text style={styles.text}>
                Your CVV is the last 3 digits in the signature strip on the back
                of your card.
              </Text>
              <View style={styles.toggleSection}>
                <Text style={{ ...styles.text, marginTop: 0 }}>
                  Save Card Details
                </Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#687089' }}
                  thumbColor='#fff'
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <Pressable
                onPress={() => {
                  Keyboard.dismiss();
                  let errorObj = { cardNumber: null, cvv: null };
                  if (cardNumber.length !== 16) {
                    errorObj = {
                      ...errorObj,
                      cardNumber: 'Card number must be 16 digits'
                    };
                  } else {
                    errorObj = {
                      ...errorObj,
                      cardNumber: null
                    };
                  }

                  if (cvv.length !== 3) {
                    errorObj = {
                      ...errorObj,
                      cvv: 'Cvv must be 3 digits'
                    };
                  } else {
                    errorObj = {
                      ...errorObj,
                      cvv: null
                    };
                  }

                  setError(errorObj);

                  if (errorObj.cardNumber !== null || errorObj.cvv !== null)
                    return;
                  navigation.navigate('PaymentComplete');
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? '#767c96' : '#687089'
                  },
                  styles.button
                ]}>
                <Text style={styles.buttonText}>Pay</Text>
              </Pressable>
            </View>
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
  main: {
    flex: 1,
    padding: 20
  },
  headerText: {
    fontSize: 18,
    color: '#687089',
    fontWeight: '600',
    paddingHorizontal: 20,
    marginTop: 20,
    textTransform: 'uppercase'
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
  errorText: {
    fontSize: 12,
    color: '#f00',
    fontWeight: '600',
    marginBottom: 5
  },
  toggleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
    marginBottom: 50
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
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
    height: 40,
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: 10,
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
