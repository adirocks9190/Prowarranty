import React from 'react';
import { motion } from 'framer-motion';

const BrandMarquee: React.FC = () => {
  // Brand logos data based on the provided image
  const brands = [
    { name: 'Adidas', logo: 'https://i.imgur.com/9PAwF5p.png' },
    { name: 'Johnson Bathware', logo: 'https://i.imgur.com/JgrtVTh.png' },
    { name: 'Dell', logo: 'https://i.imgur.com/DCbQcfy.png' },
    { name: 'Havells', logo: 'https://i.imgur.com/jVnCq4z.png' },
    { name: 'Cera', logo: 'https://i.imgur.com/Yv1gqQ1.png' },
    { name: 'Jaquar', logo: 'https://i.imgur.com/xL2A0sP.png' },
    { name: 'Lenovo', logo: 'https://i.imgur.com/2mOFc2z.png' },
    { name: 'LG', logo: 'https://i.imgur.com/u3p4iH1.png' },
    { name: 'Puma', logo: 'https://i.imgur.com/4Y0j2b6.png' },
    { name: 'Samsung', logo: 'https://i.imgur.com/gHkRkxY.png' },
    { name: 'Skechers', logo: 'https://i.imgur.com/v82aTzD.png' },
    { name: 'HP', logo: 'https://i.imgur.com/3YfB3uF.png' },
  ];

  // Duplicate the array for a seamless, infinite loop
  const extendedBrands = [...brands, ...brands];

  return (
    <div className="py-20 bg-white/30 backdrop-blur-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Our Trusted Partners & Collaborators</h2>
          <p className="text-lg text-brand-light font-light max-w-3xl mx-auto">
            We are proud to collaborate with industry leaders to deliver exceptional services and support for a wide range of products.
          </p>
        </div>
      </div>
      
      <div className="relative group w-full overflow-hidden">
        {/* Gradient overlays for a seamless fade-out effect on the edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-brand-bg-end to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-brand-bg-end to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="flex flex-shrink-0">
            {extendedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-10"
                style={{ width: '220px' }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-12 w-auto object-contain transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 hover:!scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandMarquee;
