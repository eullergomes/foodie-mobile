import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icons from "../../constants/icons";

import TabHome from "../../screens/tabHome/tabHome";
import TabFavorites from '../tabFavorites/tabFavorites';
import TabOrders from '../tabOrders/tabOrders';
import TabProfile from '../tabProfile/tabProfile';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>

      <Tab.Screen name="TabHome" component={TabHome} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons.abaHome}
            style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
          />
        )
      }}
      />

      <Tab.Screen name="TabFavorites" component={TabFavorites} options={{
        title: "Favoritos",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        tabBarIcon: ({ focused }) => {
          return <Image source={icons.abafavorito}
            style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
        }
      }} />

      <Tab.Screen name="TabOrders" component={TabOrders} options={{
        title: "Pedidos",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        tabBarIcon: ({ focused }) => {
          return <Image source={icons.abaPedido}
            style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
        }
      }} />

      <Tab.Screen name="tabProfile" component={TabProfile} options={{
        title: "Meu Perfil",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        tabBarIcon: ({ focused }) => {
          return <Image source={icons.abaPerfil}
            style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
        }
      }} />

    </Tab.Navigator>
  )
}

export default Main;