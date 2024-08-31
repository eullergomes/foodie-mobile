import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { BannerType } from '@/types/types';
import { styles } from './banners.style';

interface BannersProps {
  banners: BannerType[];
}

const Banners = ({ banners }: BannersProps) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          banners.map((banner) => (
            <TouchableOpacity key={banner.id} style={styles.banner}>
                <Image source={banner.image} style={styles.image} />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}

export default Banners;