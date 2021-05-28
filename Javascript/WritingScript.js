
const main = document.querySelector(".maincontent");

const newArticle = document.createElement("div");
main.append(newArticle);

// const navContent = 
//                     <li><a href="#">Home</a>   </li>
//                    <li><a href="#">About </a>   </li>
//                    <li><a href="#" >Backapacks</a>   </li>
//                    <li><a href="#" >Other things</a>   </li>
//                    <li><a href="#">Contact</a>   </li>;
                   
const mainNav= document.createElement("nav")
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul")
navList.innerHTML = navContent
mainNav.append(NavList)

document.querySelector(".siteheader").append(mainNav)