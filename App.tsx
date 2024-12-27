/**
 * ReactNativeMap試験用プロジェクト
 */

import React from 'react';
import {SafeAreaView, useColorScheme, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStackNavigator from './src/navigation/AppStackNavigator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      {/* navigationの設定 */}
      <NavigationContainer>
        <SafeAreaView style={[styles.backgroundStyle, backgroundStyle]}>
          {/* navigationの呼出 */}
          <AppStackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
