  window.onload=function(){
    const footer = document.createElement("div");
    document.body.appendChild(footer);
    footer.classList.add("footer");
    const menuBtn = document.querySelector(".menu-button");
     const btnContainer =document.querySelector(".btn-container");
     const btnPortfolio = document.querySelector(".portfolio-btn");
     const btnContact = document.querySelector(".contact-btn");
    
    const portfolio = document.createElement("div");
     document.body.appendChild(portfolio);
     portfolio.classList.add("portfolio-overlay");

     const contact = document.createElement("div");
     document.body.appendChild(contact);
     contact.classList.add("contact-overlay");

     btnPortfolio.addEventListener("click", showPortfolio);
    
     function showPortfolio(){
       portfolio.classList.add("show-portfolio");
       footer.classList.add("close-footer");
       closePortfolio.classList.add(".show");

     }
     btnContact.addEventListener("click", showContact);
     
     function showContact(){
      contact.classList.toggle("show-contact");
      footer.classList.add("close-footer");
    }

    const categoriesOverlay = document.createElement("div");
   portfolio.appendChild(categoriesOverlay);
   categoriesOverlay.classList.add("categories-overlay");

   const informationOverlay = document.createElement("div");
   contact.appendChild(informationOverlay);
   informationOverlay.classList.add("information-overlay");

    const closePortfolio = document.createElement("div");
    portfolio.appendChild(closePortfolio);
    closePortfolio.classList.add("close-portfolio");

    const closeContact = document.createElement("div");
    contact.appendChild(closeContact);
    closeContact.classList.add("close-contact");

    closePortfolio.addEventListener("click",closePort);
    closeContact.addEventListener("click",closeCont);
     
    function closePort(){
portfolio.classList.remove("show-portfolio");
footer.classList.remove("close-footer");

 }

 function closeCont(){
   contact.classList.remove("show-contact");
   footer.classList.remove("close-footer");

 }

    const glass1 = document.createElement("div");
    categoriesOverlay.append(glass1);
    glass1.classList.add("glass");
    glass1.id = "glass1";
    
    const glass2 = document.createElement("div");
    categoriesOverlay.append(glass2);
    glass2.classList.add("glass");
    glass2.id = "glass2";

    const glass3 = document.createElement("div");
    categoriesOverlay.append(glass3);
    glass3.classList.add("glass");
    glass3.id = "glass3";

    const glass4 = document.createElement("div");
    categoriesOverlay.append(glass4);
    glass4.classList.add("glass");
    glass4.id = "glass4";
    
    
   
     
    

     menuBtn.addEventListener("click",showMenuBtns);

     function showMenuBtns(){
      btnContainer.classList.toggle("show-btns");
      }

      
      
     
     }