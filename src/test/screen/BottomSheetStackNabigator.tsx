import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenB from '../../test/screen/ScreenB';
import ScreenC from '../../test/screen/ScreenC';
import ScreenD from '../../test/screen/ScreenD';

const Stack = createNativeStackNavigator();

const BottomSheetStackNabigator = ({props}) => {
  return (
    <Stack.Navigator
      initialRouteName="ScreenB"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff', // ヘッダーのスタイル（背景色や影など）を設定
          // backgroundColor: 'tomato',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          title: 'ボトムシートナビルート',
        }}
        initialParams={props.route.params}
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

export default React.memo(BottomSheetStackNabigator);
