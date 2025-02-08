import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const products = [
  {
    id: 1,
    name: 'Neon Dreamcatcher',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Holographic Glasses',
    price: 89.99,
    image: 'https://cdn.websparks.ai/3_475061553_1560880521237250_3146518653439031621_n-8ea81fd3.jpg',
  },
  {
    id: 3,
    name: 'LED Umbrella',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Glow-in-the-Dark Paint Set',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
];

const ProductCard = ({ product }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <animated.div ref={ref} style={cardAnimation} className="card">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" crossOrigin="anonymous" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-300 mb-4">${product.price.toFixed(2)}</p>
        <button className="btn btn-primary w-full">Add to Cart</button>
      </div>
    </animated.div>
  );
};

const ProductList = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
