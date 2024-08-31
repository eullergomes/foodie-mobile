import { Image, Text, View } from 'react-native';
import { styles } from './header.style';
import icons from '../../constants/icons';

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return ( 
    <View style={styles.header}>
      <Image style={styles.logo} source={icons.logo}/>

      <Text>{label}</Text>
    </View>
   );
}
 
export default Header;