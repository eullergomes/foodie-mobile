import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native";
import { styles } from "./restaurant.style";
import { restaurante } from "../../constants/data";
import icons from "../../constants/icons";
import Product from "../../components/product/product";
import { navigationProps } from '@/types/types';

function Restaurant({ navigation }: navigationProps) {
  const openDetails = () => {
    navigation.navigate("ProductDetails");
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBanner}>
        <Image source={restaurante.banner} style={styles.banner} resizeMode="contain" />

        <TouchableOpacity style={styles.containerBack} onPress={navigation.goBack}>
          <Image source={icons.back} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.name}>Nome do estabelecimento</Text>
          <Text style={styles.taxa}>Taxa de entrega: R$ 5,00</Text>
        </View>

        <Image source={icons.favoritoFull} style={styles.favorito} />
      </View>

      <ScrollView>

        <View style={styles.location}>
          <Image source={icons.location} style={styles.locationImg} />
          <Text style={styles.address}>Avenida Brigadeiro Luis Antonio, 1250 - CJ 1651</Text>
        </View>

        {
          restaurante.menu.map((category) => (
            <View key={category.id} style={styles.containerProduto}>
              <Text style={styles.category}>{category.categoria}</Text>
              {
                category.itens.map((prod) => (
                  <Product
                    key={prod.id}
                    product={prod}
                    openDetails={openDetails}
                  />
                ))
              }

            </View>
          ))
        }

      </ScrollView>

    </View>
  )
}

export default Restaurant;