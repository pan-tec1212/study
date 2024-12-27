import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ScreenC = ({navigation}) => {
  // listnerの登録
  React.useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
      console.log('focusあたったよ');
    });

    return () => {
      console.log('クリーンアップfocus');
      focusListener();
    };
  }, [navigation]);

  React.useEffect(() => {
    const blurListener = navigation.addListener('blur', () => {
      console.log('focusはずれたよ');
    });

    return () => {
      // 数ミリ秒から数十ミリ秒の範囲;
      setTimeout(() => {
        console.log('クリーンアップblur');
        blurListener();
      }, 0);
    };
  }, [navigation]);

  React.useEffect(() => {
    const custumListener = navigation.addListener('customEvent', e => {
      console.log('カスタムイベントだよ', e.data.message);
    });

    return () => {
      // 数ミリ秒から数十ミリ秒の範囲;
      console.log('クリーンアップcustum');
      custumListener();
    };
  }, [navigation]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>ScreenC</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (navigation) {
            navigation.emit({
              type: 'customEvent',
              data: {testData: 'test'},
            });
          }
        }}>
        <Text style={styles.buttonTxt}>custumEvent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // navigation.push('ScreenB');
          navigation.navigate('ScreenB');
        }}>
        <Text style={styles.buttonTxt}>ScreenB</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //           ログイン後のメイン画面遷移
          // ログアウト時のログイン画面遷移
          // エラー発生時のエラー画面遷移
          // 複数の画面をセット
          navigation.reset({
            index: 0,
            routes: [{name: 'ScreenB'}],
          });
        }}>
        <Text style={styles.buttonTxt}>reset</Text>
      </TouchableOpacity>
    </>
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
  buttonTxt: {
    textAlign: 'center',
    fontSize: 28,
    color: '#226d88',
  },
});
export default React.memo(ScreenC);
