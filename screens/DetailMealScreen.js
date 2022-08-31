import { useLayoutEffect } from "react"
import { Image, ScrollView, StyleSheet, Text } from "react-native"
import MealHeader from "../components/MealHeader"
import MealPills from "../components/MealPills"
import { MEALS } from "../data/dummy-data"

function DetailMealScreen({ route, navigation }) {
  const mId = route.params.mealId
  const displayedMeal = MEALS.find((meal) => meal.id === mId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: displayedMeal.title
    })

  }, [mId, navigation])

  const headerMeal = {
    imageUrl: displayedMeal.imageUrl,
    title: displayedMeal.title,
    duration: displayedMeal.duration,
    complexity: displayedMeal.complexity,
    affordability: displayedMeal.affordability,
  }



  return (
    <ScrollView>
      <MealHeader { ...headerMeal } />
      <MealPills title='Ingridients' items={ displayedMeal.ingredients } />
      <MealPills title='Steps' items={ displayedMeal.steps } />
    </ScrollView>
  )
}

export default DetailMealScreen


