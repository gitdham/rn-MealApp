import { FlatList, Text, View } from "react-native";
import MealPill from "./MealPill";

function MealPills({ title, items }) {
  return (
    <View>
      <Text>{ title }</Text>
      { items.map((item, i) => <MealPill key={ i } item={ item } />) }
    </View>
  )
}

export default MealPills
