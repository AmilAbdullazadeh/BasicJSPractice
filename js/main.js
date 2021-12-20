let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");
let searchInput = document.querySelector("#search-box");
let searchBtnClick = document.querySelector("#search-btn--click");
let cartBtn = document.querySelector("#cart-btn");
let cartItemsContainer = document.querySelector(".cart-items-container");
let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
  cartItemsContainer.classList.remove("active");
  navbar.classList.remove("active");
};

searchBtnClick.onclick = () => {
  let dataSearch = {
    search: searchInput.value,
  };

  let dataSearchStorage = localStorage.getItem("dataSearch");

  dataSearchStorage !== null && //true
  dataSearchStorage !== undefined && // true
  dataSearchStorage && // true
  dataSearchStorage.search === searchInput.value // true
    ? alert("Bu product haqqinda evvelce axtarish etmisiniz")
    : localStorage.setItem("dataSearch", JSON.stringify(dataSearch));
};

cartBtn.onclick = () => {
  cartItemsContainer.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
  cartItemsContainer.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  cartItemsContainer.classList.remove("active");
  searchForm.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");
let checkoutBtn = document.querySelector("#checkout-btn--click");

checkoutBtn.addEventListener("click", function (e) {
  e.preventDefault;
  let items = [];
  for (let i = 1; i < cartItem.childElementCount; i++) {
    let cartItemName;
    let cartItemQuantity;
    let cartItemNth;
    cartItemNth = document.querySelector(
      `.cart-items-container .cart-item:nth-child(${i})`
    );
    cartItemName = cartItemNth.querySelector(".content h3").innerHTML;
    cartItemQuantity = cartItemNth.querySelector(".content .price").innerHTML;
    items.push({
      productName: cartItemName,
      productQty: cartItemQuantity,
    });
  }
  console.log("items", items);
});

for (let i = 1; i < cartItem.childElementCount; i++) {
  let cartItemNth;
  cartItemNth = document.querySelector(
    `.cart-items-container .cart-item:nth-child(${i})`
  );
  cartItemNth.onclick = () => {
    console.log("cartItemNth", cartItemNth);
    let elementDataId = cartItemNth.getAttribute("data-id");
    console.log("data-id", elementDataId);
    cartItemNth.remove();
  };
}

let boxItem = document.querySelector(".box-container");

for (let i = 1; i < boxItem.childElementCount; i++) {
  let box = [];
  let boxItemNth;
  boxItemNth = document.querySelector(
      `.box-container .box:nth-child(${i})`
  );
  boxItemNth.onclick = (e) => {
    e.preventDefault;
    let boxItemName;
    let boxItemQuantity;
    let boxItemNth;
    let cartItemClone = document.querySelector(".cart-items-container .cart-item");
    let cloneCartItem = cartItemClone.cloneNode(true);
    boxItemNth = document.querySelector(
        `.cart-items-container .cart-item:nth-child(${i})`
    );
    boxItemName = boxItemNth.querySelector(".content h3").innerHTML;
    boxItemQuantity = boxItemNth.querySelector(".content .price").innerHTML.slice(0, 6);
    box.push({
      productName: boxItemName,
      productQty: boxItemQuantity,
    });
    box.forEach(boxItem => {
      cloneCartItem.querySelector(".content h3").innerHTML = boxItem.productName;
      cloneCartItem.querySelector(".content .price").innerHTML = boxItem.productQty;
    })
    cartItem.appendChild(cloneCartItem);
    cartItemsContainer.classList.add("active");
    setTimeout(function (){
      cartItemsContainer.classList.remove("active");
    }, 2500);
  };
}
