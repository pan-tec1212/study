import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BottomSheet from '@gorhom/bottom-sheet';

type navProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

/**
 * ホーム画面
 * @param param0.navigation
 * @returns ホーム画面
 */
export default function HomeScreen({navigation}: navProps): React.JSX.Element {
  const bottomSheeetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => [100, 300, 500], []); // 数値で指定
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // backgroundColor: 'black',
  };
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.buttonContainar}>
        <TouchableOpacity
          onPress={() => {
            if (bottomSheeetRef.current) {
              bottomSheeetRef.current.snapToIndex(0);
            }
          }}>
          <Text style={styles.buttonTxt}>test</Text>
        </TouchableOpacity>
        <BottomSheet index={0} snapPoints={snapPoints}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ScreenA', {
                // navigation: navigation,
                screenName: 'ScreenA',
                filterIcons: [
                  {key: '1', name: 'lemon'},
                  {key: '2', name: 'apple'},
                  {key: '3', name: 'marinBlue'},
                  {key: '4', name: 'tomato'},
                  {key: '5', name: 'banana'},
                  {key: '6', name: 'kiwi'},
                ],
              });
            }}>
            <Text style={styles.buttonTxt}>ScreenA</Text>
          </TouchableOpacity>
        </BottomSheet>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  buttonContainar: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  buttonTxt: {
    textAlign: 'center',
    fontSize: 28,
    color: '#41bce9',
  },
});
