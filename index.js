
// import Swiper from 'swiper';
// import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
// import '/node_modules/swiper/swiper-bundle.min.js';

// import Swiper, { Navigation, Pagination } from 'https://unpkg.com/swiper@8/swiper-bundle.min.js';

// import 'swiper.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// $(".fee-count-option").click(()=> {
//     $(".fee-block").toggleClass(".fee-block");
// });

// $(".btn-top").click(()=>{
//     $("").addClass(".red-eye");
// })
 
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
// });    

const myswiper = new Swiper ('.swiper', {
    modules: [Navigation, Pagination],
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
