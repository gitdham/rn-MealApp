import { useLayoutEffect } from "react"
import { Text } from "react-native"
import { MEALS } from "../data/dummy-data"

function DetailMealScreen({ route, navigation }) {
  const mId = route.params.mealId
  const displayedMeal = MEALS.find((meal) => meal.id === mId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: displayedMeal.title
    })
  }, [mId, navigation])

  return <Text>Detail meal screen</Text>
}

export default DetailMealScreen
