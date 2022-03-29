import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

export default function RequestSummaryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <SwiperFlatList
          showPagination
          style={{ flex: 1 }}
          paginationStyle={{ top: 370 }}
          paginationStyleItem={{ height: 10, width: 10 }}
          paginationStyleItemActive={{ backgroundColor: '#fff' }}
          paginationStyleItemInactive={{ backgroundColor: '#aaa' }}>
          <View style={styles.card}>
            <Text style={styles.text}>Your Loan Details</Text>
            <Text style={styles.subtext}>
              Documents will be mailed in 19 - 30 mins
            </Text>
            <Text style={{ ...styles.text, marginBottom: 20 }}>
              Loan Date: 31/12/2099
            </Text>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Loan Amount
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Administrative Charges
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Service Charge
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Your Loan Details</Text>
            <Text style={styles.subtext}>
              Documents will be mailed in 19 - 30 mins
            </Text>
            <Text style={{ ...styles.text, marginBottom: 20 }}>
              Loan Date: 31/12/2099
            </Text>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Consult Fees
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Administrative Charges
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Service Charge
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Your Loan Details</Text>
            <Text style={styles.subtext}>
              Documents will be mailed in 19 - 30 mins
            </Text>
            <Text style={{ ...styles.text, marginBottom: 20 }}>
              Loan Date: 31/12/2099
            </Text>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Consult Fees
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Administrative Charges
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Service Charge
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
          </View>
        </SwiperFlatList>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate('Dashboard')}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#767c96' : '#687089'
            },
            styles.button
          ]}>
          <Text style={styles.buttonText}>Agree</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#687089'
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 10,
    width: Dimensions.get('window').width - 60,
    marginHorizontal: 10
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
  buttonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});
