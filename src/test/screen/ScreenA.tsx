import React, {useMemo, useRef, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetStackNabigator from './BottomSheetStackNabigator';
// import RenderItem from './renderItem';

const ScreenA = props => {
  const {navigation, route} = props;
  const snapPoint = useMemo(() => ['20%', '70%', '99%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleParamChange = useCallback(() => {
    navigation.setParams({
      screenName: 'ScreenB',
      filterIcons: [
        {key: '1', name: 'lemon'},
        {key: '2', name: 'apple'},
        {key: '3', name: 'marinBlue'},
        {key: '4', name: 'tomato'},
        {key: '5', name: 'banana'},
        {key: '6', name: 'kiwi'},
        {key: '7', name: 'こんにちは'},
        {key: '8', name: 'おはよう'},
        {key: '9', name: 'おやすみ'},
      ],
    });
  }, [navigation]);

  // ボトムシートの制御を別のコールバックに分離
  const handleBottomSheet = useCallback(() => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.snapToIndex(1);
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* 戻るボタン */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.text}>{route.params.screenName}:goBack</Text>
      </TouchableOpacity>
      {/* パラメータ切替 */}
      <TouchableOpacity
        onPress={() => {
          handleParamChange();
          // レンダリング後にボトムシートを制御
          requestAnimationFrame(() => {
            handleBottomSheet();
          });
        }}>
        <Text style={styles.changeButtonTxt}>パラメータ切替</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true} // 下方向にスワイプで閉じる
        backgroundStyle={styles.background}
        handleStyle={styles.handle}
        containerStyle={styles.customContainer} // 位置をカスタマイズ
        // containerOffset={{top: 50, left: 0}}
        index={1}
        snapPoints={snapPoint}>
        <BottomSheetStackNabigator props={props} />
        {/* <RenderItem filterIcons={route?.params.filterIcons ?? []} /> */}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  customContainer: {
    position: 'absolute', // 絶対位置で配置
    top: 0, // 画面の上部に配置
  },
  itemContainer: {
    marginTop: 15,
    rowGap: 5,
    backgroundColor: '#7cbb75',
  },
  itemText: {
    fontSize: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 45,
    textAlign: 'center',
    color: 'blue',
  },
  changeButtonTxt: {
    textAlign: 'center',
    fontSize: 28,
    color: '#14d35d',
  },
  buttonTxt: {
    textAlign: 'center',
    fontSize: 28,
    color: '#226d88',
  },
  background: {
    backgroundColor: '#f0f0f0',
  },
  handle: {
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default React.memo(ScreenA);
