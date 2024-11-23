import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Sponser from './Sponser';
import FeaturedProperties from './FeautrePorperty';
import RecentProperty from './RecentProperty';
import Property from './Proterty';
// import PropertySlider from './PropertySlider';
import Statistics from './Statistics';
import Bike from './Bike';
import CarsSale from './CarsSale';
import EquipmentForm from './EquipmentForm';
import SearchForm from './SearchForm';
import Formpage from './Formpage';
export default function Front() {

  return (

    <>
    <Header />
    <Formpage />
    {/* <SearchForm /> */}
    {/* <EquipmentForm /> */}
    {/* <Property /> */}
<FeaturedProperties />
{/* <RecentProperty /> */}

{/* <Statistics />
<Bike /> */}

    {/* <PropertySlider /> */}
    {/* <Sponser />
    <CarsSale /> */}
    <Footer />
    </>
  )
}
