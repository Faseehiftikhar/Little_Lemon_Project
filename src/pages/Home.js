import Hero from "../components/Hero";
import Special from "../components/Special";
import brus from "../images/specials/bruschetta.jpg";
import greek from "../images/specials/greeksalad.jpg";
import dessert from "../images/specials/mascarponeLikier.jpg";
import Testimonials from "../components/Testimonials";

const data = [
  {
    name: "Greek Salad",
    price: "$6.99",
    image: greek,
    description: "It typically consists of a colorful medley of crisp lettuce, juicy tomatoes, cucumber slices, red onions, and briny Kalamata olives.",
  },
  {
    name: "Bruschetta",
    price: "$6.99",
    image: brus,
    description: "Italian antipasto that consists of grilled or toasted bread slices rubbed with garlic and topped with various fresh and flavorful ingredients.",
  },
  {
    name: "Mascarpone Dessert",
    price: "$4.99",
    image: dessert,
    description: "Refers to a sweet dish that prominently features mascarpone cheese, an Italian cream cheese known for its rich and velvety texture.",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Testimonials />
    </>
  );
};

export default Home;
