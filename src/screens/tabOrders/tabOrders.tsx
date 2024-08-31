import { FlatList, Image, Text, View } from "react-native";
import { orders } from "../../constants/data";
import icons from "../../constants/icons";
import { styles } from "./tabOrders.style";
import Order from "../../components/order/order";

interface navigationProps {
  navigation: any;
}

function TabOrders({ navigation }: navigationProps) {

  const OrderDetails = () => {
    navigation.navigate("OrderDetails");
  }

  return (
    <View style={styles.container}>
      <FlatList data={orders}
        keyExtractor={(order) => order.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Order
            order={item}
            OpenDetails={OrderDetails}
          />
        )}

        contentContainerStyle={styles.containerList}

        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Image source={icons.empty} />
            <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
          </View>
        )}
      />
    </View>
  )
}

export default TabOrders;