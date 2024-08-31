import {Text, TextInput, View } from 'react-native';
import { styles } from './textbox.style';

interface TextBoxProps {
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
}

const TextBox = ({ label, placeholder, isPassword, onChangeText, value }: TextBoxProps) => {
  return ( 
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        secureTextEntry={isPassword}
        onChangeText={onChangeText}
        value={value}
      />
    </>
   );
}
 
export default TextBox; 

