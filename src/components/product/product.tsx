import { TouchableOpacity, Image, View, Text } from "react-native";
import { styles } from "./product.style";
import icons from "../../constants/icons";
import { ProdutoType } from '@/types/types';

interface ProductProps {
  product: ProdutoType;
  openDetails?: () => void;
  onClickDelete?: () => void;
}

function Product({ product, openDetails }: ProductProps) {
  return (
    <TouchableOpacity style={styles.produto} onPress={() => openDetails?.()}>
      <Image source={product.image} style={styles.image} />

      <View style={styles.texts}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View>
        <Text style={styles.value}>{
          new Intl.NumberFormat("pt-BR",
            { style: "currency", currency: "BRL" }).format(product.valor)
        }</Text>

        {
          product.onClickDelete &&
          <TouchableOpacity style={styles.containerDelete}
            onPress={() => product.onClickDelete?.()}>
            <Image source={icons.remove} style={styles.delete} />
          </TouchableOpacity>
        }
      </View>
    </TouchableOpacity>
  )
}

export default Product;