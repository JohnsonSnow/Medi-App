import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import theme from '../theme';

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator
            animating={isLoading}
            size='large'
            color={theme.color.primary}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.color.loader.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99
  }
});

export default Loader;
