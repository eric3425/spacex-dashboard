import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../screens/auth/LogInScreen"
import SignUpScreen from "../screens/auth/SignUpScreen"
import HomeStack from "./HomeStack"

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Home" component={HomeStack} /> */}
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}
export default AuthStack
