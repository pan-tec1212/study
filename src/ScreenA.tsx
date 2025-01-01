import React, {useMemo, useRef, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import RenderItem from './component/bottomSheet/RenderItem';

const ScreenA = props => {
  const {navigation, route} = props;

  const snapPoints = useMemo(() => [100, 300, 500], []); // 数値で指定
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheet = useCallback(() => {
    console.log('Opening BottomSheet');
    if (bottomSheetRef.current) {
      bottomSheetRef.current.snapToIndex(1); // 中間スナップポイントに移動
    }
  }, []);

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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>{route.params.screenName}: goBack</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleParamChange();
          if (bottomSheetRef.current) {
            bottomSheetRef.current.snapToIndex(0); // 中間スナップポイントに移動
          }
          // requestAnimationFrame(() => {
          //   handleBottomSheet();
          // });
        }}>
        <Text style={styles.changeButtonTxt}>パラメータ切替</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        index={0} // 初期スナップポイント
        snapPoints={snapPoints}
        backgroundStyle={styles.background}
        handleStyle={styles.handle}>
        <Text>dddddddddddddd</Text>
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
  background: {
    backgroundColor: '#f0f0f0',
  },
  handle: {
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
});

export default React.memo(ScreenA);
