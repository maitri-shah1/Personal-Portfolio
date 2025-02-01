// about tabs
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".tab-item.active").classList.remove("active");
         e.target.classList.add("active");
         const target = e.target.getAttribute("data-target");
        
         aboutSection.querySelector(".tab-content.active").classList.remove("active");
         aboutSection.querySelector(target).classList.add("active");
    }
});
//portfolio items pop
function portfolioItemDetails(portfolioItem){
    const thumbnail = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    const title = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    const details = portfolioItem.querySelector(".portfolio-item-details").innerHTML;

    document.querySelector(".pp-thumbnail img").src = thumbnail;
    document.querySelector(".pp-header h3").innerHTML = title;
    document.querySelector(".pp-body").innerHTML = details;
}
// Optional: Close popup when clicking on the close button
document.querySelector(".pp-close").addEventListener("click", () => {
    togglePortfolioPopup();
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
// Hide popup when clicking outside of it
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
});
// Event listener for portfolio items
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    }
});
//contact backend
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzFSx21VKxWKjXbinBmNnRD0EqmXTxz0jqMzwDoMkQhLB79wABwp5wQcPn8xNHjGf57/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML = " "
      },2000)
      form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  //header
  const navToggler = document.querySelector(".nav-toggler");
  navToggler.addEventListener("click" , () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
  });
  function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
  }
  function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
  }
  //active section
  document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !==""){
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
        },500);
    }
  })