import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../../../Img/Subpages/alliance/Nike-SB-Dunk-Low-Grateful-Dead-Bears-Green.jpg'
import img2 from '../../../../Img/Subpages/alliance/A-Ma-Maniere-x-Air-Jordan-1-Retro-High-OG.jpg'
import img3 from '../../../../Img/Subpages/alliance/Nike-SB-Dunk-Low-What-The-Paul-scaled.jpg'
import img4 from '../../../../Img/Subpages/alliance/J-Balvin-x-Air-Jordan-1-Retro-High.jpg'
import img5 from '../../../../Img/Subpages/alliance/Nike-SB-Dunk-Low-Sean-Cliver-scaled.jpg'
import img6 from '../../../../Img/Subpages/alliance/Sacai-x-Nike-VaporWaffle-Sport-Fuchsia-Game-Royal.jpg'
import img7 from '../../../../Img/Subpages/alliance/Off-White-x-Nike-Dunk-Low-University-Gold-scaled.jpg'
import img8 from '../../../../Img/Subpages/alliance/Off-White-x-Nike-Dunk-Low-Lot-50-2-scaled.webp'



import Slide from './Slide/Slide';



const OurAlliance = () => {

  const allianceMap = [{ id: 1, img: img1, text: 'Nike Skateboarding teamed up with the legendary California psychedelic rock band Grateful Dead, founded back in 1965, to release a very cool, colorful pack of sneakers. They have a green top (there are also orange and yellow options) made of faux fur with suede overlays and a jagged Swoosh logo. There is a hidden pocket inside the tongue, ideal for storing small items.' },
    { id: 2, img: img2, text: 'Collaborations with the American boutique A Ma Manière almost always end up in the tops for the whole year. Their “ones” received a premium textured leather upper with burgundy collars and Swoosh logos with a reptilian texture. A silky quilted lining and branded labels on the tongue and insole complement this luxurious design.' },
    { id: 3, img: img3, text: "The silhouette pays homage to the past collaborations of the Nike SB division and the releases of the company's PRod line. The upper of the right and left sneakers, which are different in prints, is made of mesh, leather, suede, patent leather and woven materials. The signature of Paul Rodriguez on the tongue and special metal dubres complete the design." },
    { id: 4, img: img4, text: "During a halftime performance at Super Bowl LIV, Latin American musician Jay Calvin presented a pair of branded Jordan 1 sneakers with a tai-dai print. Then, in December 2020, he and the Jordan brand released these vibrant stickers with an emphasis on psychedelics and with Jay's signature logos." },
    { id: 5, img: img5, text: "In 2020, Nike SB and TV producer Sean Cleaver (creator of the legendary 2002 film Weirdos released seemingly simple but very memorable sneakers. The top of these low “dunks” is made of a combination of sky blue suede and white wrinkled leather. A gold Swoosh logo, a blue sole with gold flecks and printed insoles complete this design." },
    { id: 6, img: img6, text: "In the spring of 2020, the Japanese brand Sakai announced the creation of the Nike Vapor Waffle National Basketball Association in a frame featuring the Fall 2020 men's basketball team. Siluan was even more distinguished from abstract design than from its predecessor, Sakai x Nike LD Waffle." },
    { id: 7, img: img7, text: "With these sneakers, Virgil Tablo paid homage to the skateboarding culture of the 1980s. When Nike introduced Dunk as the centerpiece of its Nike College Color program in 1985, seven different colleges participated in the creation of the collection, and Michigan, with its signature yellow-gold and navy shades, was one of the first." },
    { id: 8, img: img8, text: "The latest sneakers in our top are the legendary, last in the entire voluminous series silhouette with a black canvas top and smooth black leather overlays along with silver Swoosh logos and iconic details from Virgil Abloh. A black sole with a purple 50 out of 50 mini nameplate completes the design." },

  ]


  return (
    <section className='our__alliance'>
      <h2 className='title__h2'>Our alliances</h2>
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
    </section>
  );
};

export default OurAlliance;