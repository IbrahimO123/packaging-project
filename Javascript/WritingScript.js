
// const main = document.querySelector(".maincontent");

// const newArticle = document.createElement("div");
// main.append(newArticle);

// const navContent = 
//                     <li><a href="#">Home</a>   </li>
//                    <li><a href="#">About </a>   </li>
//                    <li><a href="#" >Backapacks</a>   </li>
//                    <li><a href="#" >Other things</a>   </li>f
//                    <li><a href="#">Contact</a>   </li>;
                   
// const mainNav= document.createElement("nav")
// mainNav.classList.add("main-navigation");
// const navList = document.createElement("ul")
// navList.innerHTML = navContent
// mainNav.append(NavList)

// document.querySelector(".siteheader").append(mainNav)
let comingToSagamu = {
    name:"Temitope", 
    gender:"Female", 
    Single:true, 
    age: 23, 
};
console.log(comingToSagamu);




let happyTemitope = () => {
    let user = "Temitope"; 
    if (user == "Temitope"){
        console.log( `${user} is coming to Sagamu and ${user} is very happy about it. the happiness level is ${user.length} out of ${user.length+2}`);
    }
    else { console.log("Temitope is still in Ilesa")};

} ;
happyTemitope();


let dogBreeed = ["German Shepherd" , "Bull Dog", "Amercian Wolf" ]
let schoolsNames = ["Gold beam", "Sun Flower", "Lord Favour", "Anointed"];
let bothIn = [...dogBreeed, ...schoolsNames]
for (let schools of schoolsNames){
    console.log(schools)
};

let supremeMember = new Map();
 supremeMember.set("Packer Operator", "Samuel");
 supremeMember.set("Filler Operator", "Kazeem");
 supremeMember.set("Unpacker Operator", "Collins");
 supremeMember.set("Depalletizer Operator", "Ernest");
 supremeMember.set("Palletizer Operator", "Akowe");
 for (let member of supremeMember.values()){
     console.log(member)
 };
 for (let member of supremeMember.keys()){
    console.log(member)
};





let listout = document.createElement("li");
let con = document.createElement("a");
con.setAttribute("href", "#")
con.textContent="Land is Green"
listout.appendChild(con)
console.log(listout)

let media = document.getElementById("news");
media.append(listout)
console.log(media);

let getSpacePeople = () => fetch(
    "http://api.open-notify.org/astros.json"
    ).then((res)=>res.json());

let peopleInSpace = () => 
    getSpacePeople()
    .then((json)=> json.people)
    .then((people) => people.map((p)=> p.name))
    .then ((name)=> name.join(", "));
    
    peopleInSpace().then(console.log);

