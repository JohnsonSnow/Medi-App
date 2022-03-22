import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import theme from '../theme';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      {/* <Text style={styles.title}>SureBucks</Text> */}
      <Image source={require('../assets/SureBucks.png')} style={styles.image} />
      <Text style={styles.text}>Need our service?</Text>
      <Text style={styles.text}>
        Get a quick consult in less than 5 minutes.
      </Text>
      <Pressable
        onPress={() => navigation.navigate('Signup1')}
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
    color: theme.color.primary,
    fontWeight: '600'
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 30
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.color.primary,
    fontWeight: '600'
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 20,
    padding: 14
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});
