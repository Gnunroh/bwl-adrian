availableImages=['images/a_1.jpg','images/a_2.jpg','images/a_3.jpg','images/a_4.jpg','images/a_5.jpg','images/a_6.jpg','images/a_7.jpg','images/a_8.jpg','images/a_9.jpg','images/a_10.jpg','images/a_11.jpg','images/a_12.jpg','images/a_13.jpg','images/a_14.jpg','images/a_15.jpg','images/a_16.jpg','images/a_1.jpg','images/a_2.jpg','images/a_3.jpg','images/a_4.jpg','images/a_5.jpg','images/a_6.jpg','images/a_7.jpg','images/a_8.jpg','images/a_9.jpg','images/a_10.jpg','images/a_11.jpg','images/a_12.jpg','images/a_13.jpg','images/a_14.jpg','images/a_15.jpg','images/a_16.jpg']
const maindiv = document.getElementById("boardgame")
const scorediv = document.getElementById("score");
const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
let password = "undefined";

function setTileSize(height,width) {
    if(width >= height) {
        TileWidth = width * 0.85 / 8;
        return TileWidth;
    }
    else {
        TileWidth = height * 0.85 / 8;
        return TileWidth;
    }
}

function protectpasscode() {
    const result = document.getElementById("tutorial").value;
    let passcode = 30;
    let space = '';
    if (result == space) {
       alert("Ich brauche ein Passwort.");
       let password = "False";
       return password;
    } else if (result != passcode) {
        alert("Falsches Passwort!");
        location.reload();
        let password = "False";
        return password;
       } else {
       let password = "True";
       return password;
       }
    }
function start(){
    tileWidth = setTileSize(screenHeight, screenWidth);
    console.log(tileWidth);
    passwordCorrect = protectpasscode();
    console.log(passwordCorrect);
    if (passwordCorrect=="False"){
        return;
    }
    let moves =0;
    ImagesCopy= JSON.parse(JSON.stringify( availableImages));
    for(let j=1;j<=32;j++){
        var div = document.createElement('div');
        div.setAttribute('class','imgdiv');
        div.setAttribute('style', 'height:' + tileWidth + 'px; width:' + tileWidth + 'px')
        var image = document.createElement('img')
        randomImg = ImagesCopy.splice(Math.floor(Math.random() * ImagesCopy.length),1);
        image.setAttribute('src',randomImg);
        image.setAttribute('class','hide');
        image.setAttribute('style', 'height:' + tileWidth + 'px; width:' + tileWidth + 'px')
        div.appendChild(image)
        document.getElementById('boardgame').append(div);

 
        div.addEventListener('click',function(event){
            moves++;
            let curr = event.currentTarget.children
            let currImg = curr[0]
           var currentlyshowing = document.getElementsByClassName('showimg');
            currentlyshowing = document.getElementsByClassName('showimg');
            let flag=0;
            if(currentlyshowing.length >= 1){
                for(let i=0;i<currentlyshowing.length;i++)
                {
                    if(currentlyshowing[i].src != currImg.src)
                    currentlyshowing[i].classList.remove('showimg');
                    else{
                        currentlyshowing[i].classList.add('match');
                        currImg.classList.add('match')
                        flag=1;
                    }
                }
            }
 
            if(document.getElementsByClassName('match').length==32){
                alert("You won !!! ")
                let button = document.createElement('button');
                button.setAttribute('class' , 'btn btn-warning');
                let node= document.createTextNode("You won!!! Moves "+moves);
                button.appendChild(node)
                document.getElementById('score').appendChild(button) 
            }
 
            if(flag==0)
            currImg.classList.add('showimg');
        })
    }
}