// import inputmask
// import inputmask from "inputmask";

// import attrClear function
import attrClear from "./functions/attrClear";

// import modalWindow functions
import { modalClose } from "./functions/modalWindow";

// import modalWindow init functions
import modalWindowInit from "./functions/modalWindowInit";

// import  btns functions
import btnsFunc from "./functions/btns";

// import lazyLoading functions
import observer from "./functions/lazyLoading";

// import customSelectFunc functions
import customSelectFunc from "./functions/customSelect";

// import tabsChange functions
// import tabsChange from "./functions/tabsChange";

// import collapsibleFunc function
import collapsibleFunc from "./functions/collapsible";

// import lazyBg function
import lazyBg from "./functions/lazyBg";

//import swiperJsSliders function
import swiperJsSliders from "./functions/swiperJsSliders";
// import ytPlayer function
// import ytPlayer from "./functions/youtubePlayer";

// import menuDropdown function
import menuDropdown from "./functions/menuDropdown";
// import showVisible
import showVisible from "./functions/showVisible";

import setMarginTop from "./functions/setMarginTop";

document.addEventListener("DOMContentLoaded", () => {
  // variable start
  const phoneInput = document.querySelectorAll("input[type=tel]");
  const images = document.querySelectorAll("img");
  const phoneLink = document.querySelectorAll("a[href^='tel']");
  const burgerMenu = document.querySelector(".menu__burger");
  const menu = document.querySelector(".menu-nav");
  const modalCloseIcons = document.querySelectorAll(".close__modal");
  const body = document.querySelector("body");
  const breadcrumb = document.querySelector(".breadcrumb");
  const currentYear = document.querySelector(".current__year");
  const lazyImages = document.querySelectorAll(
    "img[data-lazy-src],source[data-lazy-srcset] "
  );
  const productCardSizes = document.querySelectorAll(
    ".product-card__size-item"
  );
  const main = document.querySelector(".main");
  const preloaderProgress = document.querySelector(".preloader__progress");

  const animateItems = document.querySelectorAll(".animate");

  // variable end

  // function call start
  // ytPlayer();
  swiperJsSliders();
  lazyBg();
  modalWindowInit();
  btnsFunc();

  window.onscroll = showVisible;
  menuDropdown();
  customSelectFunc();
  collapsibleFunc();
  const setMainMarginTop = () => {
    if (main) {
      !main.classList.contains("mt__nan")
        ? setMarginTop("#header", ".main")
        : "";
    }
  };
  setMainMarginTop();
  // tabsChange();
  // function call end
  if (productCardSizes.length > 0) {
    productCardSizes.forEach((element) => {
      element.addEventListener("click", (e) => {
        // e.preventDefault();
        let _this = e.currentTarget;
        let productCardSizesClicked = document.querySelector(
          ".product-card__size-item.__clicked"
        );
        productCardSizesClicked
          ? productCardSizesClicked.classList.remove("__clicked")
          : "";
        element.classList.remove("__clicked");
        !_this.classList.contains("__clicked")
          ? _this.classList.add("__clicked")
          : "";
      });
    });
  }

  if (animateItems.length > 0) {
    animateItems.forEach((item) => {
      if (!item.classList.contains("scroll")) {
        setInterval(() => {
          item.classList.add("__show");
        }, 1000);
      }
    });
  }

  if (currentYear) {
    const year = new Date().getFullYear();
    currentYear.innerHTML = year;
  }
  setTimeout(() => {
    let body = document.querySelector("body");
    body.classList.add("__loading");
    body.classList.add("--fixed");
    for (let i = 0; i < 100; i++) {
      preloaderProgress.value++;
    }
    window.setTimeout(function () {
      body.classList.add("__load");
      body.classList.remove("__loading");
      body.classList.remove("--fixed");
    }, 700);
  }, 100);
  //animate not scroll items
  if (animateItems.length > 0) {
    animateItems.forEach((item) => {
      if (!item.classList.contains("scroll")) {
        setInterval(() => {
          item.classList.add("__show");
        }, 1000);
      }
    });
  }
  //preventDefault last lastBreadcrumb item click
  if (breadcrumb) {
    let lastBreadcrumb = breadcrumb.lastElementChild;

    if (lastBreadcrumb) {
      lastBreadcrumb.addEventListener("click", (e) => {
        e.preventDefault();
      });
    }
  }

  // init modal close btn
  if (modalCloseIcons.length > 0) {
    modalCloseIcons.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        modalClose(icon.closest(".modal"));
        e.preventDefault();
      });
    });
  }

  // call close popup func on ESC keypress
  document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
      const modalOpen = document.querySelector(".modal.--open");
      modalClose(modalOpen);
    }
  });

  // set Belarus phone mask
  // let phoneMaskBy = new inputmask({
  //   mask: "+375-99-999-99-99",
  //   clearIncomplete: true,
  //   greedy: false,
  // });

  // inputmask for phone input
  if (phoneInput.length > 0) {
    phoneInput.forEach((input) => {
      input.addEventListener("input", function (e) {
        var x = e.target.value
          .replace(/\D/g, "")
          .match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2]
          ? x[1]
          : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] + "-" + x[4] : "");
      });
    });

    // phoneInput.forEach((phoneMask) => {
    //   phoneMaskBy.mask(phoneMask);
    // });
  }

  // phone link clear white space
  if (phoneLink.length > 0) {
    phoneLink.forEach((link) => {
      attrClear(link, "href", 2);
    });
  }

  // images clear title and alt attribute
  if (images.length > 0) {
    images.forEach((img) => {
      attrClear(img, "title", 1);
      attrClear(img, "alt", 1);
    });
  }

  //init lazy loading images
  if (lazyImages.length > 0) {
    lazyImages.forEach((image) => {
      observer.observe(image);
    });
  }

  //  burgerMenu function
  if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      this.classList.toggle("--clicked");
      body.classList.toggle("--fixed");
      menu.classList.toggle("--show");
      e.preventDefault();
    });
  }
  window.onresize = function () {
    setMainMarginTop();
    setTimeout(() => {
      setMainMarginTop();
    }, 1000);
  };
  window.onscroll = function () {
    showVisible();
    let header = document.querySelector("#header");
    let topScroll;
    header
      ? (window.innerWidth <= 800 ? (topScroll = 10) : (topScroll = 0),
        this.pageYOffset > topScroll
          ? header.classList.add("__scrolled")
          : header.classList.remove("__scrolled"))
      : "";
  };
});
