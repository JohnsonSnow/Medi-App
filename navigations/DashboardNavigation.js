import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import Request1Screen from '../screens/Request1Screen';
import AppointmentHistoryScreen from '../screens/AppointmentHistoryScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ReferralScreen from '../screens/ReferralScreen';
import theme from '../theme';

const Drawer = createDrawerNavigator();

export default function DashboardNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName='Dashboard'
      screenOptions={{
        headerStyle: { backgroundColor: theme.color.primaryLight },
        headerTintColor: '#fff'
      }}>
      <Drawer.Screen name='Dashboard' component={DashboardScreen} />
      <Drawer.Screen name='Request' component={Request1Screen} />
      <Drawer.Screen name='Loan History' component={AppointmentHistoryScreen} />
      <Drawer.Screen name='Fund Wallet' component={PaymentScreen} />
      <Drawer.Screen name='Referral' component={ReferralScreen} />
    </Drawer.Navigator>
  );
}
