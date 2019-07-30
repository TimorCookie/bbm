import React, {useEffect} from 'react';
import './home.scss';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';


function MySwiper(props) {
    useEffect(()=> {
        new Swiper ('.swiper-container', {
            loop: true,  //循环
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            pagination: {  //分页器
                el: '.swiper-pagination'
            }
        })
    })
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
            </div>
            <div className="swiper-pagination"></div>  
        </div>
    )
}
export default function Home() {
   
    return(
        <div className="home-page">
            <div className="home-page-banner">
                <MySwiper />
            </div>
        
        </div>
    )
}