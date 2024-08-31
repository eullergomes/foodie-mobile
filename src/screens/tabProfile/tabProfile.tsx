import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./tabProfile.style";
import icons from "../../constants/icons";

function TabProfile() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={[styles.item, styles.borderTop]}>
        <View style={styles.containerIcone}>
          <Image source={icons.address} style={styles.icone} />
        </View>

        <View style={styles.texts}>
          <Text style={styles.title}>Endereço</Text>
          <Text style={styles.subtitle}>Meu endereço de entrega</Text>
        </View>

        <View style={styles.containerIcone}>
          <Image source={icons.more} style={styles.more} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.dados} style={styles.icone} />
        </View>

        <View style={styles.texts}>
          <Text style={styles.title}>Meus Dados</Text>
          <Text style={styles.subtitle}>Informações da minha conta</Text>
        </View>

        <View style={styles.containerIcone}>
          <Image source={icons.more} style={styles.more} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.logout} style={styles.icone} />
        </View>

        <View style={styles.texts}>
          <Text style={styles.title}>Desconectar</Text>
          <Text style={styles.subtitle}>Desconectar seu usuário desse aparelho</Text>
        </View>

        <View style={styles.containerIcone}>
          <Image source={icons.more} style={styles.more} />
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default TabProfile;