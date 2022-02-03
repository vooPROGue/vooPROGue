  window.onload=function(){
    const footer = document.createElement("div");
    document.body.appendChild(footer);
    footer.classList.add("footer");
    const menuBtn = document.querySelector(".menu-button");
     const btnContainer =document.querySelector(".btn-container");
     const btnPortfolio = document.querySelector(".portfolio-btn");
     const btnContact = document.querySelector(".contact-btn");

     menuBtn.addEventListener("click",showMenuBtns);

     function showMenuBtns(){

      btnContainer.classList.toggle("show-btns");
      console.log("fiwehfio");
    }
     
     }