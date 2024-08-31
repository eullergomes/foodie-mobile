import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './register.style';
import Header from '@/components/header/header';
import TextBox from '../../components/textbox/textbox'
import Button from '@/components/button/button';
import { useState } from 'react';

interface RegisterProps {
  navigation: any;
}

const Register = ({ navigation }: RegisterProps) => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  {/*ScrollView - adiciona um scrool caso o componente fique maior que a tela do usuário (responsividade) */ }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header label="Criar uma conta" />

        <View style={styles.formGroup}>
          <View style={styles.form}>
            <TextBox label="Nome Completo" value={name} onChangeText={(text) => setName(text)} placeholder="Insira seu name completo" />
          </View>

          <View style={styles.form}>
            <TextBox label="E-mail" value={email} onChangeText={(text) => setEmail(text)} placeholder="Insira seu e-mail" />
          </View>
          <View style={styles.form}>
            <TextBox label="Escolha um senha" value={password} onChangeText={(text) => setPassword(text)} placeholder="Insira a senha" isPassword />
          </View>

          <View style={styles.form}>
            <TextBox label="Confirme a senha" value={password} onChangeText={(text) => setPassword(text)} placeholder="Confirme a senha" isPassword />
          </View>

          <View style={styles.form}>
            <Button label="Acessar" onPress={() => navigation.navigate("register_addr")} />
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.footerText}>Acessar minha conta</Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
}

export default Register;