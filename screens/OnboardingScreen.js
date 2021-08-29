import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <Text style={styles.title}>AppName</Text>
      <Image source={require('../assets/phone.png')} style={styles.image} />
      <Text style={styles.text}>Need our service?</Text>
      <Text style={styles.text}>
        Get a quick consult in less than 5 minutes.
      </Text>
      <Pressable
        onPress={() => navigation.navigate('Signup1')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#767c96' : '#687089'
          },
          styles.button
        ]}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  title: {
    fontSize: 28,
    color: '#687089',
    fontWeight: '600'
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
    marginBottom: 50
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#b3b8c6',
    fontWeight: '600'
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 50,
    padding: 14
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});
