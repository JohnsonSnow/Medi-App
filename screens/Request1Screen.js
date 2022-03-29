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
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import theme from '../theme';

export default function Request1Screen({ navigation }) {
  const [bankName, setBankName] = React.useState(null);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      keyboardShouldPersistTaps='handled'>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.hero}>
            <Image
              source={require('../assets/SureBucks.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.main}>
            <TextInput style={styles.input} placeholder='Account Number' />
            <TextInput style={styles.input} placeholder='BVN' />
            <View style={styles.picker}>
              <RNPickerSelect
                placeholder={{
                  label: 'Bank Name',
                  value: null
                }}
                onValueChange={value => setBankName(value)}
                style={{ inputAndroid: { color: 'black' } }}
                value={bankName}
                items={[
                  { label: 'First Bank', value: 'First Bank' },
                  { label: 'GT Bank', value: 'GT Bank' },
                  { label: 'Sterling Bank', value: 'Sterling Bank' }
                ]}
              />
            </View>
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                navigation.navigate('Request2');
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
    height: 100,
    width: 200,
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
