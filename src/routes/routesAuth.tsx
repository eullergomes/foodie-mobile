import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from '@/screens/search/search';
import Main from '@/screens/main/main';
import ProductDetails from '@/screens/product-details/product-details';
import Restaurant from '@/screens/restaurant/restaurant';
import OrderDetails from '@/screens/order-details/order-details';
import Checkout from '@/screens/checkout/checkout';
import { Text, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants/theme';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{
        headerShown: false
      }} />

      <Stack.Screen name="Checkout" component={Checkout} options={{
        headerShadowVisible: false,
        title: "Meu Pedido",
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => alert("OK")}>
              <Text style={{ color: COLORS.red }}>Limpar</Text>
            </TouchableOpacity>
          )
        },
        animation: "slide_from_bottom",
      }} />

      <Stack.Screen name="OrderDetails" component={OrderDetails} options={{
        headerShadowVisible: false,
        title: "Detalhes do Pedido",
        headerTitleAlign: "center",
        animation: "slide_from_bottom"
      }} />

      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{
        headerShown: false
      }} />

      <Stack.Screen name="Restaurant" component={Restaurant} options={{
        headerShown: false
      }} />

      <Stack.Screen name="Search" component={Search} options={{
        headerShown: false
      }} />

    </Stack.Navigator>
  )
}

export default StackRoutes;