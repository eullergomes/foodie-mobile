import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './login.style';
import Header from '@/components/header/header';
import TextBox from '../../components/textbox/textbox'
import Button from '@/components/button/button';
import { useState } from 'react';
import { navigationProps } from '@/types/types';

const Login = ({ navigation }: navigationProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Header label="Acesse sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox label="E-mail" value={email} onChangeText={(text) => setEmail(text)} placeholder="Insira seu e-mail" />
        </View>

        <View style={styles.form}>
          <TextBox label="Senha" value={password} onChangeText={(text) => setPassword(text)} placeholder="Insira sua senha" isPassword />
        </View>

        <View style={styles.form}>
          <Button label="Acessar" 
            onPress={() => console.log('Acessar')} 
            // disabled={!email || !password}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.footerText}>Criar minha conta</Text>
        </TouchableOpacity>
        
      </View>

    </View>
  );
}

export default Login;