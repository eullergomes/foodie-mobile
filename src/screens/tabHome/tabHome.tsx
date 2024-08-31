import { Image, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./tabHome.style";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox";
import { useState } from "react";
import Categories from '../../components/categories/categories';
import { categories, banners, restaurants } from "../../constants/data";
import Banners from "../../components/banners/banners";
import Resturant from "../../components/restaurant-item/restaurant-item";

interface navigationProps {
  navigation: any;
}

function TabHome({ navigation }: navigationProps) {

  const OpenMenu = () => {
    navigation.navigate("Restaurant");
  }

  const [busca, setBusca] = useState("");

  return <SafeAreaView style={styles.container}>
    <View style={styles.headerBar}>
      <Image source={icons.logo} style={styles.logo} />

      <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
        <Image source={icons.cart} style={styles.cart} />
      </TouchableOpacity>
    </View>

    <View style={styles.busca}>
      <TextBox placeholder="O que vamos pedir hoje?"
        onChangeText={(texto) => setBusca(texto)}
        value={busca} />
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>

      <Categories categories={categories} />

      <Banners banners={banners} />

      {
        restaurants.map((restaurant, index) => (
          <View key={index}>
            <Resturant
              restaurant={restaurant}
              icon={icons.favoritoFull}
              OpenMenu={OpenMenu}
            />
          </View>
        ))
      }

    </ScrollView>

  </SafeAreaView>
}

export default TabHome;