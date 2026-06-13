import type {
  CategoryCard,
  // ComboCard,
  PriceRange,
  // ProductCard,
  // ReturnCard,
  TeamMember,
} from "../../typescript/interface/rituals.interface";

// // Category card images
import categories1 from "../../assets/categories_card/categories_1.png";
import categories2 from "../../assets/categories_card/categories_2.png";
import categories3 from "../../assets/categories_card/categories_3.png";
import categories4 from "../../assets/categories_card/categories_4.png";
import categories5 from "../../assets/categories_card/categories_5.png";
import categories6 from "../../assets/categories_card/categories_6.png";

// // Team images
import team1 from "../../assets/team_images/team_1.jpg";
import team2 from "../../assets/team_images/team_2.jpeg";
import team3 from "../../assets/team_images/team_3.jpg";
import team4 from "../../assets/team_images/team_4.jpg";

// // Wedding / selling card images
// import card1 from "../../assets/Selling/card1.jpg";
// import card2 from "../../assets/Selling/card2.jpg";
// import card3 from "../../assets/Selling/card3.jpg";
// import card4 from "../../assets/Selling/card4.jpg";
// import card5 from "../../assets/Selling/card5.jpg";

// // Return card images
// import return1 from "../../assets/return_card/return_1.jpg";
// import return2 from "../../assets/return_card/return_2.jpg";
// import return3 from "../../assets/return_card/return_3.jpg";
// import return4 from "../../assets/return_card/return_4.jpg";
// import return5 from "../../assets/return_card/return_5.jpg";

// // Combo card images
// import combo1 from "../../assets/combo_card/combo_1.jpg";
// import combo2 from "../../assets/combo_card/combo_2.jpg";
// import combo3 from "../../assets/combo_card/combo_3.jpg";
// import combo4 from "../../assets/combo_card/combo_4.jpg";
// import combo5 from "../../assets/combo_card/combo_5.jpg";

export const Categoriescards: CategoryCard[] = [
  { id: 1, title: "Wedding Cards", image: categories1 },
  { id: 2, title: "Digital Invites Templates", image: categories2 },
  { id: 3, title: "Personalized Stationery", image: categories3 },
  { id: 4, title: "Return Gifts & Hampers", image: categories4 },
  { id: 5, title: "Wedding Accessories", image: categories5 },
  { id: 6, title: "Favour Bags", image: categories6 },
];

export const priceRanges: PriceRange[] = [
  { id: 1, min: 100, max: 500 },
  { id: 2, min: 500, max: 1000 },
  { id: 3, min: 1000, max: 1500 },
  { id: 4, min: 1500, max: 2000 },
  { id: 5, min: 2000, max: 2500 },
  { id: 6, min: 2500, max: 3000 },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Samantha Edwards",
    image: team3,
    socials: { fb: "#", tw: "#", linkedin: "#", ig: "#" },
  },
  {
    id: 2,
    name: "Helen Miller",
    image: team2,
    socials: { fb: "#", tw: "#", linkedin: "#", ig: "#" },
  },
  {
    id: 3,
    name: "Adriana Grande",
    image: team1,
    socials: { fb: "#", tw: "#", linkedin: "#", ig: "#" },
  },
  {
    id: 4,
    name: "Selena Macnageds",
    image: team4,
    socials: { fb: "#", tw: "#", linkedin: "#", ig: "#" },
  },
];

// export const gifts: Gifts[] = [
//   {
//     id: 1,
//     name: "Handcrafted Decorative Box",
//     image: gift1,
//     price: 80,
//     oldPrice: 94,
//     reviews: 4,
//     rating: 5,
//     discount: 25,
//   },
//   {
//     id: 2,
//     name: "Madhubani Art Gift Box",
//     image: gift2,
//     price: 65,
//     oldPrice: 85,
//     reviews: 6,
//     rating: 4,
//     discount: 20,
//   },
//   {
//     id: 3,
//     name: "Traditional Wooden Trinket Box",
//     image: gift3,
//     price: 120,
//     oldPrice: 150,
//     reviews: 8,
//     rating: 5,
//     discount: 30,
//   },
//   {
//     id: 4,
//     name: "Hand Painted Storage Box",
//     image: gift4,
//     price: 70,
//     oldPrice: 95,
//     reviews: 3,
//     rating: 4,
//     discount: 18,
//   },
//   {
//     id: 5,
//     name: "Vintage Jewelry Organizer",
//     image: gift5,
//     price: 95,
//     oldPrice: 120,
//     reviews: 7,
//     rating: 5,
//     discount: 22,
//   },
//   {
//     id: 6,
//     name: "Ethnic Gift Storage Box",
//     image: gift6,
//     price: 60,
//     oldPrice: 80,
//     reviews: 5,
//     rating: 4,
//     discount: 25,
//   },
//   {
//     id: 7,
//     name: "Decorative Craft Box",
//     image: gift7,
//     price: 75,
//     oldPrice: 90,
//     reviews: 4,
//     rating: 4,
//     discount: 15,
//   },
//   {
//     id: 8,
//     name: "Artisan Handmade Box",
//     image: gift8,
//     price: 110,
//     oldPrice: 135,
//     reviews: 9,
//     rating: 5,
//     discount: 20,
//   },
//   {
//     id: 9,
//     name: "Traditional Art Storage Box",
//     image: gift9,
//     price: 85,
//     oldPrice: 105,
//     reviews: 6,
//     rating: 4,
//     discount: 19,
//   },
//   {
//     id: 10,
//     name: "Decorative Keepsake Box",
//     image: gift10,
//     price: 130,
//     oldPrice: 160,
//     reviews: 10,
//     rating: 5,
//     discount: 28,
//   },
// ];

