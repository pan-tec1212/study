import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenB from '../../test/screen/ScreenB';
import ScreenC from '../../test/screen/ScreenC';
import ScreenD from '../../test/screen/ScreenD';
// import {Text} from 'react-native-reanimated/lib/typescript/Animated';
// import {Button} from 'react-native';
// import ScreenE from '../test/screen/ScreenE';
// import ScreenF from '../test/screen/ScreenF';
// import ScreenG from '../test/screen/ScreenG';
// import ScreenH from '../test/screen/ScreenH';

const Stack = createNativeStackNavigator();

const BottomSheetStackNabigator = ({props}) => {
  //   console.log('BottomSheetStackNabigator:', props.route.params);
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
        // headerShown: false, // ヘッダーを表示するかどうかを指定
        // headerTitle: 'My Custom Title', //ヘッダーに表示するタイトルを指定
        // headerBackTitle: 'Back'// 戻るボタンのタイトルを設定します。
        // headerTintColor: 'white' // ヘッダー内のアイコンやタイトルの色を変更します。
        // cardStyle: {backgroundColor: 'lightblue'}, // 画面カードのスタイルを設定します（画面背景色など）。
        // gestureEnabled: true, // ジェスチャーによる画面遷移（スワイプバックなど）を有効にするかどうかを設定します。
        // animationEnabled: false, // スクリーン遷移時のアニメーションを制御します。
        // cardOverlayEnabled: false, // 画面遷移中に表示されるオーバーレイを制御します。
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
