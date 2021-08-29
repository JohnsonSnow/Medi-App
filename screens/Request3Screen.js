import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Bar } from 'react-native-progress';

export default function Request3Screen({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => navigation.navigate('RequestSummaryScreen'), 3000);
  }, []);
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={require('../assets/default.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.main}>
          <Bar
            indeterminate
            width={200}
            unfilledColor='#ccc'
            borderColor='#ccc'
          />
          <Text style={styles.text}>Processing your request</Text>
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
    paddingTop: 80,
    alignItems: 'center'
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    color: '#687089',
    fontWeight: 'bold'
  }
});
