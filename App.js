import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { CircleList } from './circle/CircleList';
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
      <TouchableOpacity
        onPress={() => console.log(item)}
        style={styles.item}>
        <Text>{item.id}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingTop: 100 }}>
        <CircleList
          data={data}
          keyExtractor={_keyExtractor}
          renderItem={_renderItem}
          radius={(width) / 2}
          height={height * 0.67}
        />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  item: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


