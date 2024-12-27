import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScreenD = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ScreenD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d7cffd',
  },
  text: {
    fontSize: 45,
    textAlign: 'center',
  },
});
export default React.memo(ScreenD);
