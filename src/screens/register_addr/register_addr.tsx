import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './register_addr.style.'
import Header from '@/components/header/header';
import TextBox from '../../components/textbox/textbox'
import Button from '@/components/button/button';
import { useState } from 'react';

const RegisterAddr = () => {

  const [address, setAddress] = useState<string>('');
  const [compl, setCompl] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');  

  {/*ScrollView - adiciona um scrool caso o componente fique maior que a tela do usuário (responsividade) */}  

  return (
    <ScrollView>   
      <View style={styles.container}>
      <Header label="Informe seu endereço" />

      <View style={styles.formGroup}>
        <View style={styles.formHorizontal}>
          <View style={styles.form70}>
            <TextBox label="Endereço" value={address} onChangeText={(text) => setAddress(text)}/>
          </View>
          
          <View style={styles.form30}>
            <TextBox label="Compl." value={compl} onChangeText={(text) => setCompl(text)}/>
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="Bairro" value={neighborhood} onChangeText={(text) => setNeighborhood(text)}/>
          
        </View>

        <View style={styles.formHorizontal}>
          <View style={styles.form70}>
            <TextBox label="Cidade" value={city} onChangeText={(text) => setCity(text)}/>
          </View>
          
          <View style={styles.form30}>
            <TextBox label="Estado" value={state} onChangeText={(text) => setState(text)}/>
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="CEP" value={zipCode} onChangeText={(text) => setZipCode(text)}/>
        </View>

        <View style={styles.form}>
          <Button label="Criar minha conta" />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Acessar minha conta</Text>
        </TouchableOpacity>
        
      </View>

    </View>
    </ScrollView>
  );
}

export default RegisterAddr;