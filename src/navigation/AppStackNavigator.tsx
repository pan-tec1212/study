import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import ScreenA from '../test/screen/ScreenA';
import ScreenB from '../test/screen/ScreenB';
import ScreenC from '../test/screen/ScreenC';
import ScreenD from '../test/screen/ScreenD';
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
      <Stack.Screen
        name="ScreenC"
        component={ScreenC}
        options={{
          title: 'ScreenC',
        }}
      />
      <Stack.Screen
        name="ScreenD"
        component={ScreenD}
        options={{
          title: 'ScreenD',
        }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(AppStackNavigator);
