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

export default function SignupCompleteScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={require('../assets/complete.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Sign up was successful.</Text>
          <Text style={styles.subtitle}>
            You can now use AppName to get a consult.
          </Text>
        </View>
        <View style={styles.main}>
          <Pressable
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'Signin' }]
              })
            }
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#767c96' : '#687089'
              },
              styles.button
            ]}>
            <Text style={styles.buttonText}>Go to Login</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1f8'
  },
  hero: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    paddingHorizontal: 20,
    paddingVertical: 50
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
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
    marginBottom: 30
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20
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
