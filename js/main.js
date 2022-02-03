var place = 0;
document.querySelector("#generate").addEventListener("click", function(){
    createNFTcard(place);
    place++;
    
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
    <img src='https://images.unsplash.com/photo-1597600159211-d6c104f408d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80' />
      
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
          <p>3 days ago</p>
        </div>
      </div>
    </div>
    <!--     <div class='line' /> -->
    `
    document.body.appendChild(newdiv);
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
      img = data.val();
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
      time = data.val();
    });
    setTimeout(function(){
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
