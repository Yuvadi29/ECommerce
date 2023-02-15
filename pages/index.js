import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components/index';

// Instead of using useEffect, there is something called getServerSideProps in NextJS which helps in the server side rendering.

const Home = ({ products, bannerData }) => (
  <>
    <HeroBanner heroBanner = {bannerData.length && bannerData[0]} />

    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of Many Variations</p>
    </div>

    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner footerBanner = {bannerData && bannerData[0]} />
  </>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]' //Here the * means to grab all the items from the collection type product which we made in sanity
  const products = await client.fetch(query);

  const Bannerquery = '*[_type == "banner"]' //Here the * means to grab all the items from the collection type Banner which we made in sanity
  const bannerData = await client.fetch(Bannerquery);

  return {
    props: { products, bannerData }
  }
}

export default Home;