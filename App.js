import React, { useRef, useState } from 'react'
import { StyleSheet, View, Text, Animated, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import { CircleList } from './circle/CircleList';
import { horizontalScale as wp, verticalScale as hp } from './size';
const { width, height } = Dimensions.get('window')

const App = () => {
  const [data, setData] = useState([
    { id: 0, value: "C1CD2F", name: 'Football' },
    { id: 1, value: "360EF5", name: 'Salsa' },
    { id: 2, value: "51BB75", name: 'Chess' },
    { id: 3, value: "340A57", name: 'Snooker' },
    { id: 4, value: "99E11F", name: 'Dancing' },
    { id: 5, value: "937F07", name: 'Coding' },
    { id: 6, value: "A341B9", name: 'Dating' },
    { id: 7, value: "BC8BFB", name: 'Making' },
    { id: 8, value: "ADC304", name: 'Cars Show' },
    { id: 9, value: "4496C2", name: 'Race' },
    { id: 10, value: 'A0B2BC', name: 'Cooking' },
    { id: 11, value: "DC4460", name: 'Riding' },
    { id: 12, value: "E391CA", name: 'Cinema' },
    { id: 13, value: '707500', name: 'Dancing' },
    { id: 14, value: "ADA323", name: 'Football' },
    { id: 15, value: "D18572", name: 'Coding' },
    { id: 16, value: 'A341B9', name: 'Fitness' },
  ])
  const _keyExtractor = item => item.id

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    )
  }

  return (
    <CircleList
      height={height}
      data={data}
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}
    />
  )
}

export default App

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


