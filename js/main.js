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
