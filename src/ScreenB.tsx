import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';
// import RenderItem from './renderItem';
const ScreenB = ({navigation, route}) => {
  return (
    <BottomSheetScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>- B画面 -</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.push('ScreenB');
        }}>
        <Text style={styles.buttonTxt}>B:push</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ScreenB');
        }}>
        <Text style={styles.buttonTxt}>B:navigate</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ScreenC');
        }}>
        <Text style={styles.buttonTxt}>C:navigate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.replace('ScreenD');
        }}>
        <Text style={styles.buttonTxt}>D:replac</Text>
      </TouchableOpacity>
      {/* レンダリングアイテム */}
      {/* <RenderItem filterIcons={route?.params.filterIcons ?? []} /> */}
    </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eef8ee',
  },
  text: {
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 45,
  },
  buttonTxt: {
    textAlign: 'center',
    fontSize: 28,
    color: '#226d88',
  },
});

export default React.memo(ScreenB);
