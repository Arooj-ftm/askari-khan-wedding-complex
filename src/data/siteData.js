import { Gem, UtensilsCrossed, Flower2, Car, Camera, Music } from 'lucide-react'

export const services = [
    { icon: Gem, title: 'Wedding Events', text: 'Barat, Walima, Mehndi and Engagement ceremonies, each with a beautifully crafted setup.' },
    { icon: UtensilsCrossed, title: 'Royal Catering', text: 'Desi, Continental and BBQ menus with live counters, prepared by expert chefs.' },
    { icon: Flower2, title: 'Floral Decor', text: 'Fresh flowers, crystal chandeliers and stage designs that make your day unforgettable.' },
    { icon: Car, title: 'Valet & Parking', text: 'Spacious parking and professional valet service for all your guests.' },
    { icon: Camera, title: 'Photo & Video', text: 'Cinematic shoots, drone coverage and same-day highlight films.' },
    { icon: Music, title: 'Sound & Lights', text: 'Premium DJ, LED walls and dance floor lighting.' },
]

export const packages = [
    { name: 'Essential', price: 'Rs. 950', features: ['Barat & Walima Menu 1', '6 Dishes', 'Hall Free for 300+ Guests', 'Ample Parking'] },
    { name: 'Classic', price: 'Rs. 1,250', popular: true, features: ['Barat & Walima Menu 6', '8 Dishes', 'Hall Free for 300+ Guests', 'Stage Decor Options', 'Lighting & DJ Available'] },
    { name: 'Royal', price: 'Rs. 2,000', features: ['Barat & Walima Menu 10', '9 Dishes', 'Hall Free for 300+ Guests', 'VIP / VVIP Stage Options', 'AC Hall Available'] },
]

export const stats = [
    { value: '600', label: 'Guests in Hall 1' },
    { value: '2', label: 'Banquet Halls' },
    { value: '1000', label: 'Car Parking Spaces' },
    { value: '12', label: 'Menu Options' },
]

export const menu = {
    'Main Course': [
        { name: 'Mutton Qorma', desc: 'Slow-cooked mutton in a rich, aromatic gravy.', special: true },
        { name: 'Chicken Karahi', desc: 'Tender chicken tossed with tomatoes, ginger and green chillies.' },
        { name: 'Beef Nihari', desc: 'Traditional slow-braised stew served with fresh garnish.' },
        { name: 'Chicken Handi', desc: 'Creamy, mildly spiced chicken cooked in a clay pot.' },
        { name: 'Daal Mash', desc: 'Classic lentils finished with butter and fried onions.' },
        { name: 'Mixed Vegetables', desc: 'Seasonal vegetables cooked in light, flavourful spices.' },
    ],
    'BBQ & Starters': [
        { name: 'Chicken Malai Boti', desc: 'Creamy, marinated chicken grilled over charcoal.', special: true },
        { name: 'Seekh Kabab', desc: 'Minced meat skewers seasoned with house spices.' },
        { name: 'Fish Fry', desc: 'Crispy golden fish with a tangy masala coating.' },
        { name: 'Chicken Spring Rolls', desc: 'Crunchy rolls served with sweet chilli sauce.' },
        { name: 'Chicken Wings', desc: 'Smoky, spicy wings straight from the grill.' },
        { name: 'Hot & Sour Soup', desc: 'A warm, tangy soup to begin the meal.' },
    ],
    'Rice & Bread': [
        { name: 'Chicken Biryani', desc: 'Fragrant basmati layered with spiced chicken.', special: true },
        { name: 'Mutton Pulao', desc: 'Delicately flavoured rice cooked in rich mutton stock.' },
        { name: 'Zarda', desc: 'Sweet saffron rice garnished with dry fruits.' },
        { name: 'Kashmiri Naan', desc: 'Soft naan stuffed with nuts and dried fruits.' },
        { name: 'Roghni Naan', desc: 'Sesame-topped, freshly baked in the tandoor.' },
        { name: 'Plain Naan', desc: 'Warm, soft and served fresh.' },
    ],
    Desserts: [
        { name: 'Gulab Jamun', desc: 'Soft milk dumplings soaked in saffron syrup.', special: true },
        { name: 'Kheer', desc: 'Creamy rice pudding with cardamom and pistachios.' },
        { name: 'Gajar Halwa', desc: 'Slow-cooked carrot dessert with khoya and nuts.' },
        { name: 'Kulfi', desc: 'Traditional frozen dessert with a rich, creamy taste.' },
        { name: 'Ice Cream Counter', desc: 'A live counter with a variety of flavours.' },
        { name: 'Fruit Trifle', desc: 'Layers of custard, cream and fresh fruit.' },
    ],
    Beverages: [
        { name: 'Green Tea (Kehwa)', desc: 'Warm, aromatic tea served after the meal.', special: true },
        { name: 'Doodh Patti Chai', desc: 'Classic milk tea, brewed fresh.' },
        { name: 'Soft Drinks', desc: 'Chilled bottles served throughout the event.' },
        { name: 'Mint Margarita', desc: 'Refreshing mint and lemon cooler.' },
        { name: 'Fresh Juice Station', desc: 'Seasonal fresh juices, served chilled.' },
        { name: 'Mineral Water', desc: 'Bottled water available on every table.' },
    ],
}