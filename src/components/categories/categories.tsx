import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { CategoryType } from '@/types/types';
import { styles } from './categories.style';

interface CategoriesProps {
  categories: CategoryType[];
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.category}>
              <Image source={category.image} style={styles.image} />
              <Text style={styles.description}>{category.description}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}

export default Categories;
