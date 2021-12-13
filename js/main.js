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
