class MobileNavBar {
  constructor(mobileMenu, menuBar, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.menuBar = document.querySelector(menuBar);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }


  animateLinks() {
    this.navLinks.forEach((link, index) => {
      console.log(index / 7 + 0.3);
      link.style.animation 
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
    });
}

  handleClick() {
    this.menuBar.classList.toggle(this.activeClass);
    this.animateLinks();
}


  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".menubar",
  ".menubar li",
);
mobileNavBar.init();