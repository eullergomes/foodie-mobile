import { FlatList, Image, Text, View } from "react-native";
import { restaurants } from "../../constants/data";
import Restaurant from "../../components/restaurant-item/restaurant-item";
import icons from "../../constants/icons";
import { styles } from "./tabFavorites.style";

function TabFavorites() {
  return (
    <View style={styles.container}>
      <FlatList data={restaurants}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Restaurant
            restaurant={item}
            icon={icons.remove}
          />
        )}

        contentContainerStyle={styles.containerList}

        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={icons.empty} />
              <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

export default TabFavorites;