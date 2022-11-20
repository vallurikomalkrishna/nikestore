const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 6000,
    colors: [
      {
        code: "black",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/air.png?raw=true",
      },
      {
        code: "white",
        img: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/qh1yrftymm3kpifgtkva/air-force-1.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 5000,
    colors: [
      {
        code: "lightgray",
        img: "https://raw.githubusercontent.com/safak/youtube/html-css-js-ecommerce/img/jordan.png",
      },
      {
        code: "blue",
        img: "https://cconnect.s3.amazonaws.com/wp-content/uploads/2020/09/Evolution-of-the-Nike-Air-Jordan-Shoe-Series-1984-2020-Nike-Air-Jordan-35-XXXV.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 4500,
    colors: [
      {
        code: "lightgray",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/blazer.png?raw=true",
      },
      {
        code: "black",
        img: "https://cdn.fashiola.in/L78377647/nike-men-black-white-blazer-low-77-vintage-leather-sneakers.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 5000,
    colors: [
      {
        code: "black",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/crater.png?raw=true",
      },
      {
        code: "black",
        img: "https://www.thenextsole.com/storage/images/DD0747-001.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 4000,
    colors: [
      {
        code: "gray",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/hippie.png?raw=true",
      },
      {
        code: "black",
        img: "https://m.media-amazon.com/images/I/619Hnz-662L._UL1100_.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});