import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./order.style";
import { OrderType } from '@/types/types';

interface OrderProps {
  order: OrderType;
  OpenDetails?: () => void;
}

function Order({ order, OpenDetails }: OrderProps) {
  return <TouchableOpacity style={styles.pedido} onPress={() => OpenDetails?.()}>
    <Image source={order.image} style={styles.logotipo} />

    <View style={styles.textos}>
      <Text>{order.name}</Text>

      <View style={styles.containerValor}>
        <Text style={styles.total}>
          {
            new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(order.total)
          }
        </Text>
        <Text style={styles.total}>{order.date}</Text>
      </View>
      <Text style={styles.status}>{order.status}</Text>
    </View>

  </TouchableOpacity>
}

export default Order;