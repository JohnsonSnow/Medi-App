import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PaymentTabScreen from '../shared/PaymentTabScreen';

const FirstRoute = () => <PaymentTabScreen />;

const SecondRoute = () => <PaymentTabScreen />;

const ThirdRoute = () => <PaymentTabScreen />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});

export default function PaymentScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Debit Card' },
    // { key: 'second', title: 'Paypal' },
    // { key: 'third', title: 'Pay with Bank' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          labelStyle={{ color: '#687089' }}
          style={{ backgroundColor: '#eff1f8' }}
          indicatorStyle={{ backgroundColor: '#687089' }}
        />
      )}
    />
  );
}
