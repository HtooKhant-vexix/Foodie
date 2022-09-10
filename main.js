import './style.scss';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'animate.css';
import Typed from 'typed.js';
import './node_modules/waypoints/lib/noframework.waypoints';

//typed.js
let options = {
    strings: ['GOOD FOOD..', 'GOOD MOOD !'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 900,
    loop:true
  };

let typed = new Typed('.element', options);

//waypoint
let navList = ['home', 'about', 'service', 'menu', 'contact'];

navList.forEach((e)=>{
  new Waypoint({
  element: document.querySelector('.'+e),
  handler: function(direction) {

    let old_active = document.querySelector('.nav-link.active');
    old_active.classList.remove("active");

    let about = document.querySelector(`[href='#${e}']`);
    about.classList.add("active");
  },
  offset: '50%'
});
});

let data = [
  {
    id : 1,
    name: "Barbecue Salad",
    des: "Special Delicious Dish",
    price: "22.2",
    image: "./public/img/plate1.png",
    sec: "0.2s"
  },
  {
    id : 2,
    name: "Salad With Fish",
    des: "Special Delicious Dish",
    price: "30.5",
    image: "./public/img/plate2.png",
    sec: "0.6s"
  },
  {
    id : 1,
    name: "Spinach Salad",
    des: "Special Delicious Dish",
    price: "50",
    image: "./public/img/plate3.png",
    sec: "0.9s"
  },
];

data.forEach((e)=>{
  let con = document.querySelector(".con");
  let ele = document.createElement("div");
  ele.classList.add("mt-5", "mt-md-0", "col-10", "col-md-4", "col-lg-3", "wow", "animate__fadeInUp");
  ele.setAttribute("data-wow-duration","1.2s");
  ele.setAttribute("data-wow-delay",`${e.sec}`);
  ele.innerHTML = `
  <div class="card hv">
    <img src="${e.image}" class="p-5 w-100" alt="">
    <div class="card-body p-4">
      <h5 class="kanit text-primary">${e.name}</h5>
      <p class="text-black-50">${e.des}</p>
      <div class="d-flex justify-content-between mt-4">
        <div class="">
          <i class="fs-4 me-1 fa-solid fa-dollar-sign"></i>
          <span class=" fs-4 text-dark">${e.price}</span>
        </div>
        <button class="btn btn-outline-primary">
          <i class="fa-solid fa-fw fa-cart-plus"></i>
        </button>
      </div>
    </div>
  </div>
  `;
  console.log(ele)
  con.append(ele);
});