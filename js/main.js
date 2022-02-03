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
    console.log(place);
    console.log("deleted");
});

function createNFTcard (number) {
    const newdiv = document.createElement('div');
    newdiv.id = `${number}`;
    newdiv.classList = `card`;
    newdiv.innerHTML = `<img src='https://images.unsplash.com/photo-1597600159211-d6c104f408d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80' />
      
    <div class='cardContent'>
      <h1>The Prism #3232</h1>
      <p>A NFT that brings light and joy, the most wanted NFT collection</p>
      
      <div class='cardContentFooter'>
        <div>
          <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
          <p class='eth'>0.005 ETH</p>
        </div>
        <div>
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
          <p>3 days ago</p>
        </div>
      </div>
    </div>
    <!--     <div class='line' /> -->
    `
    console.log("worked");
    document.body.appendChild(newdiv);
}



