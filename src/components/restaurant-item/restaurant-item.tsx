import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./restaurant-item.style";
import { RestaurantItemType } from '@/types/types';

interface RestaurantProps {
  restaurant: RestaurantItemType;
  icon?: ImageSourcePropType;
  OpenMenu?: () => void;
}

function Restaurante({ restaurant, icon, OpenMenu }: RestaurantProps) {
  return (
    <TouchableOpacity style={styles.restaurant} onPress={() => OpenMenu?.()}>
      <Image source={restaurant.image} style={styles.image} />

      <View style={styles.texts}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.address}>{restaurant.address}</Text>
      </View>

      <TouchableOpacity>
        <Image source={icon} style={styles.favorite} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default Restaurante;