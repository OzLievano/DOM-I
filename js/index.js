const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// all updates for the nav 
 const navSec = document.getElementsByTagName('a');
 navSec[0].textContent = siteContent["nav"]["nav-item-1"];
 navSec[1].textContent = siteContent["nav"]["nav-item-2"];
 navSec[2].textContent = siteContent["nav"]["nav-item-3"];
 navSec[3].textContent = siteContent["nav"]["nav-item-4"];
 navSec[4].textContent = siteContent["nav"]["nav-item-5"];
 navSec[5].textContent = siteContent["nav"]["nav-item-6"];

// all updates for the header

// update the h1 
const title1 = document.querySelector("h1");
title1.textContent = siteContent["cta"]["h1"];
// update the button 
const button1 = document.querySelector("button");
button1.textContent = siteContent["cta"]['button'];
// update the img src for the header 
const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src',siteContent["cta"]["img-src"]);


// all updates for the main-content section 

// add headers 
const header4 = document.getElementsByTagName("h4");
header4[0].textContent = siteContent["main-content"]["features-h4"];
header4[1].textContent = siteContent["main-content"]["about-h4"];
header4[2].textContent = siteContent["main-content"]["services-h4"];
header4[3].textContent = siteContent["main-content"]["product-h4"];
header4[4].textContent = siteContent["main-content"]["vision-h4"];
header4[5].textContent = siteContent["contact"]["contact-h4"];



//update the img src for the main-content
const midPage = document.getElementById("middle-img");
midPage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
