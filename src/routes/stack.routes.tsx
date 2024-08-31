import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@/screens/login/login';
import Register from '@/screens/register/register';
import RegisterAddr from '@/screens/register_addr/register_addr';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />

      <Stack.Screen name="Register" component={Register} options={{
        //headerShown: false
        headerShadowVisible: false,
        title: "",
        headerBackTitle: "Voltar"
      }} />

      <Stack.Screen name="RegisterAddr" component={RegisterAddr} options={{
        //headerShown: false
        headerShadowVisible: false,
        title: "",
        headerBackTitle: "Voltar"
      }} />

    </Stack.Navigator>
  )
}

export default StackRoutes;