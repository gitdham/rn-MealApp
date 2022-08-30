import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import DetailMealScreen from './screens/DetailMealScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <ExpoStatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={ {
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        } }>
          <Stack.Screen
            name='MealsCategories'
            component={ CategoriesScreen }
            options={ { title: 'All Categories', } }
          />
          <Stack.Screen
            name='MealsOverview'
            component={ MealsOverviewScreen }
          />
          <Stack.Screen
            name='DetailMeal'
            component={ DetailMealScreen }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
})
