'use client';

import { FaUtensils, FaCoffee, FaHamburger, FaWineGlassAlt } from 'react-icons/fa';

export default function CafeMenu() {
  const menuItems = [
    {
  category: 'Main Dishes',
  items: [
    { 
      name: 'Jollof Rice', 
      price: '₦2,500', 
      icon: <FaUtensils className="text-amber-600" />,
      image: {
       src: '/images/menu/Censad15.jpeg',
       width: 500, 
       height: 300

      }
    },
    // ...
  ]
},
 {
  category: 'Snacks',
  items: [
    { 
      name: 'Snacks', 
      price: '₦2,500', 
      icon: <FaUtensils className="text-amber-600" />,
      image: '/images/menu/Censad14.jpeg' 
    },
    // ...
  ]
},
];
   

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Park Cafe Menu</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItems.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              {category.category}
            </h2>
            <ul className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between items-center border-b border-gray-100 pb-2">
  <div className="flex items-center gap-2">
    {item.icon}
    <div className="relative w-8 h-8 rounded-full overflow-hidden">
    </div>
    <span>{item.name}</span>
  </div>
  <span className="font-medium">{item.price}</span>
</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-amber-50 p-6 rounded-lg border border-amber-100">
        <h2 className="text-xl font-bold mb-2">Special Offers</h2>
        <p className="mb-4">Combo meals available at discounted prices!</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Jollof Rice + Juice = ₦3,200 (Save ₦500)</li>
          <li>Burger + Smoothie = ₦2,800 (Save ₦500)</li>
        </ul>
      </div>
    </div>
  );
}