import React from 'react';

import { motion } from "framer-motion";

import Truck from '../../../../Img/heed/Trucks_Road.jpg'

import './NeedHelp.scss'
import BlockQuestion from './BlockQuestion/BlockQuestion';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../../../Img/heed/trend/1.jpg'
import img2 from '../../../../Img/heed/trend/2.jpg'
import img3 from '../../../../Img/heed/trend/3.jpg'
import img4 from '../../../../Img/heed/trend/4.jpg'
import img5 from '../../../../Img/heed/trend/5.jpg'
import Slide from '../OurEnterprise/Slide/Slide.jsx';


const NeedHelp = () => {

  const allianceMap = [{ id: 1, img: img1, text: 'Minimalism and purity of design: Nike is increasingly focusing on simple and modern designs, making their products more versatile and easily combined with other sportswear and accessories.' },
  { id: 2, img: img2, text: 'Technological materials: Nike is constantly looking for new materials and technologies to improve the production and comfort of its shoes and clothing, which makes their products more innovative and high-quality.' },
  { id: 3, img: img3, text: "Sports Training and Women: Nike actively promotes and supports women in sports by creating special collections and campaigns that inspire and motivate women to play sports and maintain an active lifestyle." },
  { id: 4, img: img4, text: "Sustainability and eco-friendly: Nike is increasingly paying attention to the sustainable production and use of environmentally friendly materials in order to reduce the negative impact on the environment and take a more responsible approach to the production of sportswear." },
  { id: 5, img: img5, text: "The return of classic models. Nike is updating and re-releasing its iconic models such as the Air Max, Air Jordan and Cortez to meet the demand for retro styling." },
  
]
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='need__help'
    >
      <section className="shipping__str">
        <img className='img__truck' src={Truck} alt="" />
        <div className="chadow" />
        <div className="container">
          <h2 className='title'>Shipping</h2>
          <p className='text'>Transportation in a Nike store is usually carried out with the help of specialized logistics companies or delivery services. Goods arrive at the store's warehouse from the manufacturer or central distributor, and are then distributed to departments in accordance with the planogram and the requirements of the established logistics system. Goods that need to be delivered to other stores are also shipped according to the schedule and delivery methods approved by the company.</p>
        </div>
      </section>
      <section className='return__exchanges'>
        <div className="container">
          <h2 className='title'>Return and Exchanges</h2>
          <ul className='ul'>
            <li>Register on the Nike website and log in to your account -</li>
            <li>Find the "Refund and Exchange" section on the website or on your order page -</li>
            <li>Choose a refund method (money or exchange for another product) and fill in the necessary information, such as the order number, reason for the return, etc -</li>
            <li>Get a label for the return to the post office or courier service -</li>
            <li>Pack the product in its original packaging along with the receipt or receipt -</li>
            <li>Send the product back to Nike using the provided label -</li>
            <li>Wait for Nike to confirm the refund or exchange -</li>
          </ul>
        </div>
      </section>
      <section className='questions'>
        <div className="container">
          <h2 className='title'>Frequently Asked Questions</h2>
          <BlockQuestion />
        </div>
      </section>
      <section className='rewards'>
        <div className="container">
          <h2 className='title'>Rewards</h2>
          <ul>
            <li className='reward'>Award for the best sports brand -</li>
            <li className='reward'>Award for innovation in sportswear and footwear -</li>
            <li className='reward'>Award for the best design of sporting goods -</li>
            <li className='reward'>Award for social responsibility in business -</li>
            <li className='reward'>Award for contribution to the sports industry -</li>
            <li className='reward'>An award for the environmentally friendly production of goods. -</li>
          </ul>
        </div>
      </section>
      <section className='loyalty__program'>
        <div className="container">
          <h2 className='title'>Loyalty program</h2>
          <p className='text'>The loyalty program at Nike is called NikePlus. With its help, customers can receive a number of privileges and bonuses, including special discounts on purchases, invitations to exclusive events and access to unique product collections. To access the NikePlus program, you need to register on the company's official website or download the Nike app for mobile devices. After registration, participants can accumulate points for each purchase and exchange them for various bonuses. Program participants can also receive personalized recommendations and special offers based on their preferences and purchase history.</p>
        </div>
      </section>
      <section className="your__product">
        <div className="container">
          <h2 className='title'>How to choose your product?</h2>
          <ul className='ul'>
            <li>Identify your needs: first think about what you need Nike products for. These can be running shoes for sports, sportswear or accessories.</li>
            <li>Determine your budget: Nike has products in different price categories, so decide how much you are willing to spend on a purchase.</li>
            <li>Choose a model: Nike has a wide range of products, so choose the model that suits you in style, functionality and color.</li>
            <li>Take a closer look at technology: Nike is constantly developing new technologies to improve the performance and comfort of its products. Study the available technology information to choose a product that meets your needs.</li>
            <li>Purchase from authorized dealers: in order to be sure of the quality and originality of products, buy Nike products only from authorized sellers.</li>
          </ul>
        </div>
      </section>
      <section className="sports__trends">
        <div className="container">
          <h2 className='title'>Sports Trends</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
          >
            {allianceMap.map((data) => {
              return (
                <SwiperSlide>
                  <Slide data={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </motion.main>
  );
};

export default NeedHelp;