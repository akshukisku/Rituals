export interface CategoryCard {
  id: number;
  title: string;
  image: string;
}
export interface PriceRange {
  id: number;
  min: number;
  max: number;
}

export interface SocialLinks {
  fb?: string;
  tw?: string;
  linkedin?: string;
  ig?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  image: string;
  socials: SocialLinks;
}
export interface Gifts {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  reviews: number;
  rating: number;
  discount: number;
}
export interface ProductCard {
  id:number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  reviews: number;
  rating: number;
}
export interface ReturnCard {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  reviews: number;
  rating: number;
}
export interface ComboCard {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  reviews: number;
  rating: number;
}
export interface CategoryCardProps {
  data: CategoryCard;
}

export interface PriceCardProps {
 price: PriceRange;
}

export interface ProfileCardProps{
  profile: TeamMember
}

export interface GiftCardProps {
  gift: Gifts
}
export interface ProductCardProps {
  data: ProductCard;
}

export interface ReturnCardProps {
  data: ReturnCard;
}

export interface ComboCardProps {
  data: ComboCard;
}