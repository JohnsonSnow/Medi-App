import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import reducers from './store/reducers';
import AppointmentHistoryScreen from './screens/AppointmentHistoryScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PaymentCompleteScreen from './screens/PaymentCompleteScreen';
import ReferralScreen from './screens/ReferralScreen';
import Request1Screen from './screens/Request1Screen';
import Request2Screen from './screens/Request2Screen';
import Request3Screen from './screens/Request3Screen';
import RequestSummaryScreen from './screens/RequestSummaryScreen';
import SigninScreen from './screens/SigninScreen';
import Signup1Screen from './screens/Signup1Screen';
import Signup2Screen from './screens/Signup2Screen';
import Signup3Screen from './screens/Signup3Screen';
import Signup4Screen from './screens/Signup4Screen';
import Signup5Screen from './screens/Signup5Screen';
import SignupCompleteScreen from './screens/SignupCompleteScreen';
import DashboardNavigation from './navigations/DashboardNavigation';
import theme from './theme';

const store = createStore(reducers);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Onboarding'
          screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: theme.color.primaryLight
            },
            headerTintColor: '#fff'
          }}>
          <Stack.Screen
            name='Onboarding'
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Signup1'
            component={Signup1Screen}
            options={{
              title: 'Sign Up'
            }}
          />
          <Stack.Screen
            name='Signup2'
            component={Signup2Screen}
            options={{
              title: 'Sign Up'
            }}
          />
          <Stack.Screen
            name='Signup3'
            component={Signup3Screen}
            options={{
              title: 'Sign Up'
            }}
          />
          <Stack.Screen
            name='Signup4'
            component={Signup4Screen}
            options={{
              title: 'Verify Phone'
            }}
          />
          <Stack.Screen
            name='Signup5'
            component={Signup5Screen}
            options={{
              title: 'Finish Sign Up'
            }}
          />
          <Stack.Screen
            name='SignupComplete'
            component={SignupCompleteScreen}
            options={{
              title: 'Sign Up'
            }}
          />
          <Stack.Screen
            name='Signin'
            component={SigninScreen}
            options={{
              title: 'Sign In'
            }}
          />
          <Stack.Screen
            name='DashboardNavigation'
            component={DashboardNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Request1'
            component={Request1Screen}
            options={{
              title: 'Request'
            }}
          />
          <Stack.Screen
            name='Request2'
            component={Request2Screen}
            options={{
              title: 'Request'
            }}
          />
          <Stack.Screen
            name='Request3'
            component={Request3Screen}
            options={{
              title: 'Request'
            }}
          />
          <Stack.Screen
            name='RequestSummaryScreen'
            component={RequestSummaryScreen}
            options={{
              title: 'Request summary'
            }}
          />
          <Stack.Screen
            name='Payment'
            component={PaymentScreen}
            options={{
              title: 'Payment'
            }}
          />
          <Stack.Screen
            name='PaymentComplete'
            component={PaymentCompleteScreen}
            options={{
              title: 'Payment Complete'
            }}
          />
          <Stack.Screen
            name='AppointmentHistory'
            component={AppointmentHistoryScreen}
            options={{
              title: 'Appointment History'
            }}
          />
          <Stack.Screen
            name='Refer'
            component={ReferralScreen}
            options={{
              title: 'Refer'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
