// Products-array

const Products = [
  { image: "./Images/pro-1.png", tile: "Granular Potash", price: "$45" },
  { image: "./Images/pro-2.png", tile: "Multiphose", price: "$55" },
  { image: "./Images/pro-3.png", tile: "Muriate of Potash", price: "$35" },
  { image: "./Images/pro-4.png", tile: "NPK 10:26:26", price: "$75" },
  { image: "./Images/pro-5.png", tile: "NPK 11:22:21", price: "$85" },
  { image: "./Images/pro-6.png", tile: "NPK 15:15:15", price: "$45" },
  { image: "./Images/pro-7.png", tile: "NPK 20-10-10", price: "$65" },
  { image: "./Images/pro-8.png", tile: "SOA", price: "$45" },
  { image: "./Images/pro-9.png", tile: "NPX 11", price: "$50" },
];

// navbar-function

const navbar = () => {
  const navbtn = document.querySelector("#menu-bar");
  navbtn.addEventListener("click", function () {
    document.querySelector("#menu-bar").classList.toggle("icon");
    document.querySelector("#nav-links").classList.toggle("change");
  });
};
navbar();

// cart-function

const cart = () => {
  const cart = document.querySelector(".cart");
  cart.addEventListener("click", function () {
    document.querySelector("#cart-section").classList.add("open");
  });
  const close = document.querySelector("#cart-nav .close");
  close.addEventListener("click", function () {
    document.querySelector("#cart-section").classList.remove("open");
  });
};
cart();

// mobile-cart

const cartMobile = () => {
  const cart = document.querySelector("#mobile .cart");
  cart.addEventListener("click", function () {
    document.querySelector("#cart-section").classList.add("open");
  });
  const close = document.querySelector("#cart-nav .close");
  close.addEventListener("click", function () {
    document.querySelector("#cart-section").classList.remove("open");
  });
};
cartMobile();

// product-details

const productDetail = () => {
  document
    .querySelector("#product-container .s-product")
    .addEventListener("click", function () {
      document.querySelector("#sp-detail-section").style.display = "block";
    });
  document
    .querySelector("#sp-nav .pro-close")
    .addEventListener("click", function () {
      document.querySelector("#sp-detail-section").style.display = "none";
    });
};
productDetail();

// const showTheProducts = () => {
//     var clutter = "";
//     Products.forEach(function (product, index) {
//       clutter += `
//       <div id="details">
//       <div id="images-group">
//               <img src="${product.image}" width="100%" id="main-img" alt="">
//       </div>
//       <div id="product-details">
//           <h5>Home/Shop</h5>
//           <h3>${product.title}</h3>
//           <h3>${product.price}</h3>
//           <input type="number" value="1">
//           <button>Add To Cart</button>
//           <h3>Product Details</h3>
//           <p id="para-det">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis architecto natus. Eos omnis eum quis in sit consequatur repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit numquam quidem sint sed. Minima atque quia suscipit natus dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi necessitatibus accusantium amet quae voluptatibus architecto aliquid tenetur voluptatum. Eligendi, sapiente.</p>
//       </div>
//       </div>`;
//     });
//     document.querySelector("#sp-detail-section").innerHTML = clutter;
//   };
// showTheProducts();

