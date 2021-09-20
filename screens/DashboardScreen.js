import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useSelector } from 'react-redux';

export default function DashboardScreen({ navigation }) {
  const { firstName, lastName } = useSelector(state => state.app);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome, {firstName} {lastName}
      </Text>
      <View style={styles.main}>
        <View style={styles.card}>
          <Text style={{ ...styles.text, textAlign: 'left' }}>
            Your Treatment Bills
          </Text>
          <View style={styles.cardLine}></View>
          <Text style={{ ...styles.text, marginTop: 5 }}>NGN 20,000.00</Text>
          <View style={styles.cardLine}></View>
        </View>
        <View style={styles.buttonGroup}>
          <Pressable
            onPress={() => navigation.navigate('Request1')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#767c96' : '#687089'
              },
              styles.button
            ]}>
            <Text style={styles.buttonText}>Request</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('AppointmentHistory')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#767c96' : '#687089'
              },
              styles.button
            ]}>
            <Text style={styles.buttonText}>Appointment History</Text>
          </Pressable>
        </View>
        <View style={styles.buttonGroup}>
          <Pressable
            onPress={() => navigation.navigate('Payment')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#767c96' : '#687089'
              },
              styles.button
            ]}>
            <Text style={styles.buttonText}>Payment</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Refer')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#767c96' : '#687089'
              },
              styles.button
            ]}>
            <Text style={styles.buttonText}>Referral</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1f8',
    paddingVertical: 10
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    marginBottom: 20,
    paddingVertical: 50
  },
  cardLine: {
    height: 5,
    width: '100%',
    backgroundColor: '#eff1f8',
    marginTop: 5
  },
  main: {
    padding: 20,
    flex: 1,
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 24,
    color: '#687089',
    fontWeight: '600',
    paddingHorizontal: 20,
    marginTop: 20
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#687089',
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  subtext: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
    color: '#687089',
    paddingHorizontal: 10
  },
  textDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
    marginTop: 10
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 100
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  }
});
