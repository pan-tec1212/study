import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RenderItem = ({filterIcons}) => {
  return (
    <View style={styles.itemContainer}>
      {filterIcons?.map(item => {
        return (
          <View key={item.key}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  itemContainer: {
    marginTop: 15,
    rowGap: 5,
    backgroundColor: '#7cbb75',
  },
  itemText: {
    fontSize: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 45,
    textAlign: 'center',
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
});
export default RenderItem;
