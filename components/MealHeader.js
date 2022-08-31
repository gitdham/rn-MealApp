import { Image, StyleSheet, Text, View } from "react-native";

function MealHeader({ imageUrl, title, duration, complexity, affordability }) {
  return (
    <View>
      <Image source={ { uri: imageUrl } } style={ styles.image } />
      <View>
        <Text>{ title }</Text>
        <View>
          <Text>{ duration }</Text>
          <Text>{ complexity }</Text>
          <Text>{ affordability }</Text>
        </View>
      </View>
    </View>
  )
}

export default MealHeader

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  }
})
