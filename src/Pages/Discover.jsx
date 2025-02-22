import React from 'react';
import useTheme from '../contexts/theme';

const properties = [
  {
    id: 1,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: true,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
  {
    id: 2,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: true,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
  {
    id: 3,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: false,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
  {
    id: 4,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: true,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
  {
    id: 5,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: false,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
  {
    id: 6,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: false,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
  {
    id: 7,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: true,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
  {
    id: 8,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: true,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
  {
    id: 9,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: true,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
  {
    id: 10,
    price: 14000,
    title: 'Equestrian Family Home',
    location: 'California, CA, USA',
    featured: false,
    beds: 4,
    baths: 2,
    sqft: 2500,
    image: './assets/img1.avif',
  },
];

function PropertyCard({ property }) {
  const { theme, darkTheme, lightTheme } = useTheme();
  return (
    <div
      className={` bg-${
        theme === 'dark' ? '[#373739]' : ''
      } rounded-lg cursor-pointer hover:scale-110 transition ease-in-out overflow-hidden shadow-sm`}
    >
      <div className='relative '>
        <img
          className='w-full h-48 object-cover object-center'
          src={property.image}
          alt={property.title}
        />
        {property.featured && (
          <span className='flex absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.78667 5.87999C7.73333 5.71999 7.62667 5.63999 7.46667 5.63999H5.50667L6.06667 1.07999C6.09333 0.919992 6.03333 0.799993 5.88667 0.719993C5.74 0.639993 5.6 0.653326 5.46667 0.759993L0.106667 5.71999C0 5.85333 -0.0266667 5.99333 0.0266667 6.13999C0.08 6.28666 0.186667 6.35999 0.346667 6.35999H2.30667L1.74667 10.92C1.72 11.08 1.78 11.2 1.92667 11.28C2.07333 11.36 2.21333 11.3467 2.34667 11.24L7.70667 6.23999C7.81333 6.13333 7.84 6.01333 7.78667 5.87999ZM2.58667 10.04L3.06667 6.03999C3.09333 5.93333 3.06667 5.83999 2.98667 5.75999C2.90667 5.67999 2.81333 5.63999 2.70667 5.63999H1.22667L5.22667 1.95999L4.74667 5.95999C4.72 6.06666 4.74667 6.15999 4.82667 6.23999C4.90667 6.31999 5 6.35999 5.10667 6.35999H6.58667L2.58667 10.04Z'
                fill='white'
              />
            </svg>
            FEATURED
          </span>
        )}
      </div>
      <div className='p-4'>
        <div className=' flex justify-between items-center mb-2'>
          <span className='text-xl font-bold'> ${property.price}</span>
          <span className='text-gray-600'>/mo</span>
        </div>
        <h3 className='title'>{property.title}</h3>
        <p className='location'>{property.location}</p>
        <div className='flex justify-between text-gray-600 text-sm'>
          <span> {property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} sqft</span>
        </div>
      </div>
    </div>
  );
}

const Discover = () => {
  return (
    <div className='max-w-7xl ml-24 mx-auto px-4 py-8'>
      <h1 className='text-xl font-semibold mb-6'>
        Discover popular properties
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
