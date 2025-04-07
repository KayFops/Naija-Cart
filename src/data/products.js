// No need to import types
// import { Product } from "../stores/cart-store";

export const products = [
  {
    id: "1",
    name: "Nigerian Handmade Clay Pot",
    price: 3500,
    image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?...",
    category: "Home & Living",
    vendor: "Craft Nigeria",
    description: "Beautiful handcrafted clay pot made by skilled Nigerian artisans. Perfect for home decoration or as a thoughtful gift.",
    slug: "nigerian-handmade-clay-pot"
  },
  {
    id: "2",
    name: "Ankara Fabric - 6 Yards",
    price: 4500,
    image: "https://www.lighttrybe.ng/wp-content/uploads/2021/10/ankara-fabric-african-real-wax-print-cotton-100-new-design-2021-tissus-wax-africain-patchwork-fabric.jpg",
    category: "Fashion",
    vendor: "Lagos Fabrics",
    description: "Premium quality Ankara fabric with vibrant traditional patterns. 6 yards, perfect for dresses, shirts, or home decor.",
    slug: "ankara-fabric-6-yards"

  },
  {
    id: "3",
    name: "African Black Soap",
    price: 1200,
    image: "https://osmiaskincare.com/cdn/shop/articles/Untitled_design.jpg?v=1704920985",
    category: "Beauty & Personal Care",
    vendor: "Natural Nigeria",
    description: "Traditional African black soap made with natural ingredients. Great for all skin types, especially sensitive skin.",
    slug: "african-black-soap"
  },
  {
    id: "4",
    name: "Adire Throw Pillow Covers",
    price: 2800,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?...",
    category: "Home & Living",
    vendor: "Adire Designs",
    description: "Set of 2 throw pillow covers with traditional Adire patterns. Made from 100% cotton with hidden zipper closure.",
    slug: "adire-throw-pillow-covers"
  },
  {
    id: "5",
    name: "Jollof Rice Spice Mix",
    price: 850,
    image: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?...",
    category: "Food & Groceries",
    vendor: "Naija Flavors",
    description: "Premium blend of spices for authentic Nigerian Jollof rice. Make the perfect Jollof every time with this special mix.",
    slug: "jollof-rice-spice-mix"
  },
  {
    id: "6",
    name: "Nigerian Traditional Beaded Necklace",
    price: 7500,
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?...",
    category: "Jewelry",
    vendor: "Naija Beads",
    description: "Handcrafted traditional Nigerian beaded necklace. Perfect for special occasions and traditional ceremonies.",
    slug: "nigerian-traditional-beaded-necklace"
  },
  {
    id: "7",
    name: "Handwoven Raffia Basket",
    price: 3900,
    image: "https://images.unsplash.com/photo-1589196726441-47fb4473aa85?...",
    category: "Home & Living",
    vendor: "Rural Crafts",
    description: "Beautifully handwoven basket made from sustainable raffia palm. Versatile for storage or as a decorative piece.",
    slug: "handwoven-raffia-basket"
  },
  {
    id: "8",
    name: "Shea Butter - 100% Natural",
    price: 1800,
    image: "https://images.unsplash.com/photo-1575377222312-dd1a63a51638?...",
    category: "Beauty & Personal Care",
    vendor: "Natural Nigeria",
    description: "Pure, unrefined shea butter sourced from Northern Nigeria. Great for skin moisturizing and hair treatment.",
    slug: "shea-butter-100-natural"
  },
];

export const categories = [
  {
    id: "home-living",
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?...",
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?...",
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?...",
  },
  {
    id: "food",
    name: "Food & Groceries",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?...",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?...",
  },
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?...",
  },
];

export const vendors = [
  {
    id: "craft-nigeria",
    name: "Craft Nigeria",
    image: "https://images.unsplash.com/photo-1539873983094-a0017eb8fec5?...",
    description: "Authentic Nigerian crafts and home decor items.",
    rating: 4.7,
  },
  {
    id: "lagos-fabrics",
    name: "Lagos Fabrics",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?...",
    description: "Premium quality fabrics for all your fashion needs.",
    rating: 4.5,
  },
  {
    id: "natural-nigeria",
    name: "Natural Nigeria",
    image: "https://images.unsplash.com/photo-1591248541835-cc56062ce6c3?...",
    description: "Natural skincare and beauty products made in Nigeria.",
    rating: 4.8,
  },
  {
    id: "adire-designs",
    name: "Adire Designs",
    image: "https://images.unsplash.com/photo-1543331768-825d6ced3bdf?...",
    description: "Traditional Adire textiles and modern designs.",
    rating: 4.6,
  },
];

export const deals = [
  {
    id: "1",
    title: "Festive Season Special",
    discount: "30% off",
    image: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?...",
    endDate: "2025-05-15",
  },
  {
    id: "2",
    title: "Weekend Flash Sale",
    discount: "25% off",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?...",
    endDate: "2025-05-10",
  },
  {
    id: "3",
    title: "New Customer Special",
    discount: "15% off first order",
    image: "https://images.unsplash.com/photo-1556742077-0a6b6a0a2464?...",
    endDate: "2025-06-01",
  },
  {
    id: "4",
    title: "Buy One Get One Free",
    discount: "BOGO",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?...",
    endDate: "2025-05-20",
  },
];
