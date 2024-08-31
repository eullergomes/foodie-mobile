import { Text, TouchableOpacity } from 'react-native';
import { styles } from './button.style';

interface ButtonProps {
  label: string;
  onPress?: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  return ( 
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
   );
}
 
export default Button;
