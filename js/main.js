const SLIDERCONTAINER = document.querySelector('.slider-outer-wrapper');
const SLIDER = document.querySelector('.slider-inner-wrapper');
const SLIDES = document.querySelectorAll('.slide');

SLIDER.style.width = `${SLIDES.length * 100}%`;

const HAMMER = new Hammer(SLIDER);
const SLIDERSIZE = 100;
const SENSITIVITY = 15;

let timer;
let panIsRunning = false;
let activeIndex = 1;

HAMMER.on('pan', ($event) => {
    panIsRunning = true;
    const panDistance = (SLIDERSIZE / SLIDES.length) * $event.deltaX / SLIDER.clientWidth;
    const panDistanceCalculated = panDistance - SLIDERSIZE / SLIDES.length * activeIndex;
    animateSlider(panDistanceCalculated);
    if ($event.isFinal) {
        if (panDistance <= -(SENSITIVITY / SLIDES.length)) {
            goToSlide(activeIndex + 1);
        } else if (panDistance >= (SENSITIVITY / SLIDES.length)) {
            goToSlide(activeIndex - 1);
        } else {
            goToSlide(activeIndex);
        }
    }
});


const generateBullets = (elements, target) => {
    const newNavigation = document.createElement('div');
    newNavigation.classList.add('navigation');
    elements.forEach((bullet, index) => {
        const newBullet = document.createElement('button');
        newBullet.classList.add('bullet');
        newBullet.dataset.active = index;
        if (index === activeIndex) {
            newBullet.classList.add('bullet-active');
        }
        newNavigation.appendChild(newBullet);
    });
    target.appendChild(newNavigation);
    document.querySelectorAll('.bullet').forEach(bullet => {
        bullet.addEventListener('click', bulletClick, false);
    });
}

const bulletClick = ($event) => {
    activeIndex = Number($event.target.dataset.active);
    goToSlide(activeIndex);
}

const setActiveBullet = () => {
    const activeBullet = document.querySelector('.bullet-active');
    if (activeBullet) {
        activeBullet.classList.remove('bullet-active');
    }
    document.querySelectorAll('.bullet').forEach(bullet => {
        if (bullet.dataset.active === activeIndex.toString()) {
            bullet.classList.add('bullet-active');
        }
    });
}

const goToSlide = (index) => {
    if (index < 0) {
        activeIndex = 0;
    } else if (index > (SLIDES.length - 1)) {
        activeIndex = (SLIDES.length - 1);
    } else {
        activeIndex = index;
    }
    SLIDER.classList.add('is-animating');
    const percentage = -(SLIDERSIZE/SLIDES.length) * activeIndex;
    animateSlider(percentage);
    setActiveBullet();
    setActiveSlide(activeIndex);
    addSmoothTransition();
}

const addSmoothTransition = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        SLIDER.classList.remove('is-animating');
        panIsRunning = false;
    }, 400);
}

const animateSlider = (percentage) => {
    const distance = (SLIDERSIZE / SLIDES.length) * (SLIDES.length - 1);
    if(percentage > 0) {
        percentage = 0;
    } else if (percentage < -distance) {
        percentage = -distance;
    }
    SLIDER.style.transform = 'translateX( ' + percentage + '% )';
}

const setActiveSlide = (index) => {
    const ELEMENT = document.querySelector('.active');
    if (ELEMENT) {
        ELEMENT.classList.remove('active');
    }
    SLIDES[index].classList.add('active');
}

setActiveSlide(activeIndex);
//generateBullets(SLIDES, SLIDERCONTAINER);
document.getElementById("input_2").checked = true;


document.getElementById("input_1").addEventListener("click", function(){
    goToSlide(0);
});

document.getElementById("input_2").addEventListener("click", function(){
    goToSlide(1);
});

document.getElementById("input_3").addEventListener("click", function(){
    goToSlide(2);
});

goToSlide(activeIndex);























var currentUser = "Sandro";
var place = 0;
document.querySelector("#generate").addEventListener("click", function(){
    createNFTcard(place);
    place++;
    ////
    // var currentdate = Date.now();
    // firebaseRef = firebase.database().ref("NFTs");
    // firebaseRef.child("timestamp").set(currentdate);
});

document.querySelector("#delete").addEventListener("click", function(){
    for(let i=0; i<place; i++){
        var el = document.getElementById(i);
        el.remove();
        console.log(i);
    };
    place = 0;
});

function createNFTcard (number,description,img,name,price,seller,time,e) {
    const newdiv = document.createElement('div');
    newdiv.id = `${number}`;
    newdiv.classList = `card`;
    newdiv.innerHTML = `
    <img src='${img}' /> <!-https://images.unsplash.com/photo-1597600159211-d6c104f408d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80->
      
    <div class='cardContent'>
      <h1>${name} #${e}</h1>
      <p>${description}</p>
      
      <div class='cardContentFooter'>
        <div>
          <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
          <p class='eth'>${price} ETH</p>
        </div>
        <div>
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
          <p>${time} days ago</p>
        </div>
      </div>
    </div>
    <!--     <div class='line' /> -->
    `
    document.getElementById("slide3").appendChild(newdiv);
}



// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDttxxVrooFSbmMeqxC2QgrLP9keT45WT4",

  authDomain: "nft-project-b286f.firebaseapp.com",

  databaseURL: "https://nft-project-b286f-default-rtdb.firebaseio.com",

  projectId: "nft-project-b286f",

  storageBucket: "nft-project-b286f.appspot.com",

  messagingSenderId: "390564185484",

  appId: "1:390564185484:web:884a5f884258fb11efc2a9"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

var nftsarray = [];

firebaseRef = firebase.database().ref("NFTs");
firebaseRef.on("value", function(data){
    value = data.val();
    nftsarray = Object.keys(value);
    console.log(nftsarray);
});

setTimeout(function(){
  nftsarray.forEach(function(e){
    console.log("working");
    var description = "";
    var img = "";
    var name = "";
    var price = "";
    var seller = "";
    var time = "";
  
    firebaseRef = firebase.database().ref("NFTs/"+e);
    firebaseRef.child("description").once("value", function(data){
      description = data.val();
    });
    firebaseRef = firebase.database().ref("NFTs/"+e);
    firebaseRef.child("img").once("value", function(data){
      firebase.storage().ref(data.val()).getDownloadURL().then(imgUrl => {
        img = imgUrl;
      });
    });
    firebaseRef = firebase.database().ref("NFTs/"+e);
    firebaseRef.child("name").once("value", function(data){
      name = data.val();
    });
    firebaseRef = firebase.database().ref("NFTs/"+e);
    firebaseRef.child("price").once("value", function(data){
      price = data.val();
    });
    firebaseRef = firebase.database().ref("NFTs/"+e);
    firebaseRef.child("seller").once("value", function(data){
      seller = data.val();
    });
    firebaseRef = firebase.database().ref("NFTs/"+e);
    firebaseRef.child("time").once("value", function(data){
      time = Math.trunc((new Date().getTime() - data.val())*1.1574E-8);
    });
    setTimeout(function(){
      if (img.indexOf("http://") == 0 || img.indexOf("https://") == 0) {
      }
      else{
        //Standard Image
        img = "https://dummyimage.com/739x581/000/00ffff&text=Error:+Image+not+found";
      }
      createNFTcard(place,description,img,name,price,seller,time,e);
      place++;
      console.log(description);
      console.log(img);
      console.log(name);
      console.log(price);
      console.log(seller);
      console.log(time);
    },1000)
  });
},3000);




//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	console.log(username.value, email.value, password.value);
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'NFT-Name cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Description cannot be blank');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Price cannot be blank');
	} else {
		setSuccessFor(password);
	}

    if(usernameValue != '' && emailValue != '' && passwordValue != ''){
        alert("Your NFT was successfully created !");
        var yourPrivateKey = generateId();
        var currentdate = Date.now();
        firebaseRef = firebase.database().ref("NFTs");
        firebaseRef.child(yourPrivateKey).set({
            description: emailValue,
            img: file.name,
            name: usernameValue,
            price: passwordValue,
            seller: currentUser,
            time: currentdate,
        });
        firebase.storage().ref(file.name).put(file).then(function(snapshot) {
          console.log('Uploaded a file!');
        });

    }
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	

password.addEventListener("change", function(){
    getapi(api_url);
});


// api url
const api_url = 
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}

  
// Function to define innerHTML for HTML table
function show(data) {
    
    document.getElementById("price").textContent = "Price " + "(" + Object.values(data)[2] * password.value + "€" + ")";
    console.log(Object.values(data)[2]);
}





function generateId() {
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var gameId = "";
    for (var j = 0; j < 8; j++) gameId += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    return gameId;
}