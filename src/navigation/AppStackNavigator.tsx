import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import ScreenA from '../ScreenA';
import ScreenB from '../ScreenB';
const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f7f3f2', // ヘッダーのスタイル（背景色や影など）を設定
          // backgroundColor: 'tomato',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'ホーム画面',
        }}
      />
      <Stack.Screen
        name="ScreenA"
        component={ScreenA}
        options={{
          title: 'ScreenA',
        }}
      />
      <Stack.Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          title: 'ScreenB',
        }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(AppStackNavigator);
