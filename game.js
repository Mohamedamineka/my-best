
let faIcon = ["fab","fab","fab","fab","fab","fab","fab","far","fas","fab","fab","fas","far","fas","fas"
,"fab","fab","fab","fab","fab","fab","fab","far","fas","fab","fab","fas","far","fas","fas"]
let myString = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15"
let numberArray = myString.split(" ");
let theHelloSpan = document.querySelector(".information .hello span");
let theTriesSpan = document.querySelector(".information .tries span");
let theInputName = document.getElementById("yourName");
let mycounter = 0;
let numberArraytow =  ['1', '2', '3', '4', '5', '6', '7', '8','9','10', '1', '2', '3', '4', '5', '6', '7', '8','9','10']
let mySelect = document.querySelectorAll(".choice div");
let thecounterDiv = document.querySelectorAll(".counter div");
let faIcontow = ["fab","fab","fab","fab","fab","fab","fab","far","fas","fab",
"fab","fab","fab","fab","fab","fab","fab","far","fas","fab"]
let iconArraytow = ["fa-java","fa-js","fa-python","fa-php",
"fa-angular","fa-react","fa-vuejs","fa-angry","fa-apple-alt","fa-bandcamp",
"fa-java","fa-js","fa-python","fa-php",
"fa-angular","fa-react","fa-vuejs","fa-angry","fa-apple-alt","fa-bandcamp"

];
let iconArray = ["fa-java","fa-js","fa-python","fa-php",
"fa-angular","fa-react","fa-vuejs","fa-angry","fa-apple-alt",
"fa-bandcamp","fa-btc","fa-burn","fa-clock","fa-cloud-moon","fa-cloud-sun",
"fa-java","fa-js","fa-python","fa-php",
"fa-angular","fa-react","fa-vuejs","fa-angry","fa-apple-alt",
"fa-bandcamp","fa-btc","fa-burn","fa-clock","fa-cloud-moon","fa-cloud-sun"
];
let myContainer = document.querySelector(".numbers")
let theDivContainer = document.querySelector(".container");
let theButton = document.querySelector("button");
theTriesSpan.innerHTML = mycounter;
let theRestartButton = document.querySelector(".restart .button");
let thecontainerTow = document.querySelector(".containerTow");
theRestartButton.onclick = function () {
    setTimeout(()=>{location.reload();},1000)
    
    
    

}
for (let a = 0; a < mySelect.length; a++) {
    mySelect[a].onclick = function () {
    
        removeAllClass(mySelect);
        mySelect[a].classList.add("selectone")
    
    }
}
for (let b = 0; b < thecounterDiv.length; b++) {
    thecounterDiv[b].onclick = function () {
    
        removeAllClass(thecounterDiv);
        thecounterDiv[b].classList.add("selectone")
    
    }
}


theButton.onclick = function () {
    
    theDivContainer.classList.add("hide");
    theTriesSpan.innerHTML =`${ mycounter}/15`;
    theHelloSpan.innerHTML = theInputName.value;
    if (thecounterDiv[0].classList.contains("selectone")) {
        iconFunction(faIcon,iconArray,numberArray);
    }else{ iconFunction(faIcontow,iconArraytow,numberArraytow);}
    
    
    

}
 // function################################################################################################
function iconFunction(arrayOne,arrayTow,arrayThree) {
    for (let i = 0; i < arrayOne.length; i++) {
        let myBlock = document.createElement('div');
       let frontend = document.createElement('div');
       let theBack = document.createElement('div');
       if (mySelect[0].classList.contains("selectone")) {
        let thenumber = document.createTextNode(arrayThree[i]);
        theBack.appendChild(thenumber);
       }else{
       
        let theIcon = document.createElement("i");
        theIcon.classList.add(arrayOne[i])
        theIcon.classList.add(arrayTow[i]);
        theBack.appendChild(theIcon);
       }
       myBlock.dataset.technology = arrayThree[i];
       myBlock.classList.add("number");
       frontend.classList.add("face");
       frontend.classList.add("front");
       theBack.classList.add("face");
       theBack.classList.add("back");
       myBlock.appendChild(frontend);
       myBlock.appendChild(theBack);
       myContainer.appendChild(myBlock);   
        

 
    } 
    //   begin of startPlay function#############################################################################################
 let myDiv = document.querySelectorAll(".number");
let myelement = document.querySelectorAll(".numbers .back");
let myOrderNumber = Array.from(Array(myelement.length).keys());
let ArraNumbers = Array.from(myelement);
    function startPlay() {
        shuffle(myOrderNumber);
      
        let AllDiv = Array.from(myDiv);
        AllDiv.forEach((num , index) => {
            num.style.order = myOrderNumber[index]
        });
    AllDiv.forEach(nm => {
    
        nm.onclick = function () {
            nm.classList.add("is-flipped");
            let allFlippedBlock = AllDiv.filter(flippedblock => flippedblock.classList.contains("is-flipped"));
           
    if (allFlippedBlock.length == 2) {
       stopClicking();

     
    }
    checkMatchBlock(allFlippedBlock[0],allFlippedBlock[1])
    let mynm = document.querySelectorAll(".has-match");
    if (mynm.length == AllDiv.length) {
        document.querySelector(".message").innerHTML = "";
        document.querySelector(".message").innerHTML = `perfect you won`;
        document.querySelector(".correct").pause();
        thecontainerTow.classList.remove("hide");
        document.querySelector(".fanfare").play();
    }
    }
        }
    )
    
    
    
    };
    startPlay();  
}
 // beging shuffle function################################################################################################
function shuffle(array) {

    // Settings Vars
    let current = array.length,
        temp,
        random;
  
    while (current > 0) {
  
      // Get Random Number
      random = Math.floor(Math.random() * current);
  
      // Decrease Length By One
      current--;
  
      // [1] Save Current Element in Stash
      temp = array[current];
  
      // [2] Current Element = Random Element
      array[current] = array[random];
  
      // [3] Random Element = Get Element From Stash
      array[random] = temp;
  
    }
  
    return array;
  
  };

  
// beging of stopClicking function################################################################################################
  function stopClicking() {
    myContainer.classList.add("no-clicking");
    setTimeout(() =>{
        myContainer.classList.remove("no-clicking");
    },1000)
};
// beging of checkMatchBlock function################################################################################################
function checkMatchBlock(firstBlock,secondBlock) {
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        firstBlock.classList.remove("is-flipped")
        secondBlock.classList.remove("is-flipped")
        firstBlock.classList.add("has-match")
        secondBlock.classList.add("has-match")
        document.querySelector(".correct").play();
       
    }else{
        setTimeout(() =>{
            firstBlock.classList.remove("is-flipped")
            secondBlock.classList.remove("is-flipped")
            document.querySelector(".mistake").play();
            mycounter++;
            theTriesSpan.innerHTML =`${ mycounter}/15`;
            hidecontainertow();
        },1000)
       
    }
};
// removeallclass function##############################################################################""
function removeAllClass(array) {
    newarray = Array.from(array);
    newarray.forEach(na => {
        na.classList.remove("selectone")
    })
}
// hidecontainertow function################################################
function hidecontainertow () {
    if (mycounter === 15) {
        document.querySelector(".mistake").pause();
        document.querySelector(".finish").play();
        thecontainerTow.classList.remove("hide");
    }
    
}