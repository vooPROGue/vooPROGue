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
       portfolio.classList.toggle("show-portfolio");
       footer.classList.add("close-footer");
     }
     btnContact.addEventListener("click", showContact);
     
     function showContact(){
      contact.classList.toggle("show-contact");
    }

    // const closePortfolio = document.createElement("div");
    // portfolio.appendChild(closePortfolio);
    // closePortfolio.classList.add("close-portfolio");

    // const closeContact = document.createElement("div");
    // contact.appendChild(closeContact);
    // closeContact.classList.add("close-contact");

    const glass = document.createElement("div");
    portfolio.appendChild(glass);
    glass.classList.add("glass");


    

     menuBtn.addEventListener("click",showMenuBtns);

     function showMenuBtns(){
      btnContainer.classList.toggle("show-btns");
      }

      
      
     
     }