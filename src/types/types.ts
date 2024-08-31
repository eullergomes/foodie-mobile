import { ImageSourcePropType } from 'react-native';

export interface CategoryType {
  id: number;
  description: string;
  image: ImageSourcePropType;
}

export interface BannerType {
  id: number;
  description: string;
  image: ImageSourcePropType;
}

export interface RestaurantItemType {
  id: number;
  name: string;
  address: string;
  image: ImageSourcePropType;
}

export interface OrderType {
  id: number;
  name: string;
  address: string;
  status: string;
  date: string;
  total: number;
  image: ImageSourcePropType;
  onClickOrder?: () => void;
}

export interface ProdutoType {
  id: number;
  name: string;
  description: string;
  valor: number;
  image: ImageSourcePropType;
  onClickDelete?: () => void;
}

export interface CardapioType {
  id: number;
  categoria: string;
  itens: ProdutoType[];
}

export interface RestaurantType {
  id: number;
  name: string;
  address: string;
  logotipo: ImageSourcePropType;
  foto: ImageSourcePropType;
  deliveryFee: number;
  isFavorite: boolean;
  cardapio: CardapioType[];
}

export interface navigationProps {
  navigation: any;
}
