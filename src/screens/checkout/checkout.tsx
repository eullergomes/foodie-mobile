import { View, Text, FlatList } from "react-native";
import { styles } from "./checkout.style";
import { order } from "../../constants/data";
import Product from '@/components/product/product';

// receber os pedidos
const Checkout = () => {
  const ClickDelete = () => {
    alert("Produto deletado");
  }

  return (<View style={styles.container}>

    <FlatList data={order.itens}
      keyExtractor={(item) => item.idItem.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Product
          key={item.id}
          product={
            {
              id: item.idItem,
              name: item.name,
              description: item.description,
              valor: item.total,
              image: item.foto,
              onClickDelete: ClickDelete
            }
          }
        />
      )}  
    />

    <View style={styles.containerDetails}>
      <View style={styles.values}>
        <Text style={styles.total}>Resumo dos Valores</Text>
      </View>

      <View style={styles.values}>
        <Text style={styles.value}>Subtotal</Text>
        <Text style={styles.value}>R$ 66,00</Text>
      </View>

      <View style={styles.values}>
        <Text style={styles.value}>Taxa de entrega</Text>
        <Text style={styles.value}>R$ 5,00</Text>
      </View>

      <View style={styles.values}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>R$ 71,00</Text>
      </View>
    </View>

  </View>
  )
}

export default Checkout;