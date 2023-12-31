availableImages32=['images/a_1.JPG','images/a_2.JPG','images/a_3.JPG','images/a_4.JPG','images/a_5.JPG','images/a_6.JPG','images/a_7.JPG','images/a_8.JPG','images/a_9.JPG','images/a_10.JPG','images/a_11.JPG','images/a_12.JPG','images/a_13.JPG','images/a_14.JPG','images/a_15.JPG','images/a_16.JPG','images/a_1.JPG','images/a_2.JPG','images/a_3.JPG','images/a_4.JPG','images/a_5.JPG','images/a_6.JPG','images/a_7.JPG','images/a_8.JPG','images/a_9.JPG','images/a_10.JPG','images/a_11.JPG','images/a_12.JPG','images/a_13.JPG','images/a_14.JPG','images/a_15.JPG','images/a_16.JPG']
availableImages16=['images/a_1.JPG','images/a_2.JPG','images/a_3.JPG','images/a_4.JPG','images/a_5.JPG','images/a_6.JPG','images/a_7.JPG', 'images/a_8.JPG','images/a_1.JPG','images/a_2.JPG','images/a_3.JPG','images/a_4.JPG','images/a_5.JPG','images/a_6.JPG','images/a_7.JPG','images/a_8.JPG']
const maindiv = document.getElementById("boardgame")
const scorediv = document.getElementById("score");
const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
let password = "undefined";
let tileCount = 32;

function validate() {
    if (document.getElementById('radio-one').checked) {
        tileCount = 32;
        return tileCount;
    } else {
        tileCount = 16;
        return tileCount;
    }
}

function setTileSize(height,width) {
    if(width >= height) {
        TileWidth = width * 0.85 / 8;
        return TileWidth;
    }
    else {
        TileWidth = width * 0.95 / 4;
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
    tileCount = validate();
    let movecounter = document.createElement('button');
    movecounter.setAttribute('class' , 'btn btn-warning');
    movecounter.setAttribute('id' , 'MoveCounter');
    let node = "Platzhalter";
    node = document.createTextNode("Züge: 0");
    movecounter.appendChild(node);
    document.getElementById('counterPlaceholder').appendChild(movecounter);
    console.log(tileCount);
    imgWidth = tileWidth - 3;
    console.log(tileWidth);
    passwordCorrect = protectpasscode();
    console.log(passwordCorrect);
    if (passwordCorrect=="False"){
        return;
    }
    let moves =0;
    if (tileCount == 32){
        ImagesCopy = JSON.parse(JSON.stringify(availableImages32));
    } else {
        ImagesCopy = JSON.parse(JSON.stringify(availableImages16));
    }
    for(let j=1;j<=tileCount;j++){
        var div = document.createElement('div');
        div.setAttribute('class','imgdiv');
        div.setAttribute('style', 'height:' + tileWidth + 'px; width:' + tileWidth + 'px')
        var image = document.createElement('img')
        randomImg = ImagesCopy.splice(Math.floor(Math.random() * ImagesCopy.length),1);
        image.setAttribute('src',randomImg);
        image.setAttribute('class','hide');
        image.setAttribute('style', 'height:' + imgWidth + 'px; width:' + imgWidth + 'px')
        div.appendChild(image)
        document.getElementById('boardgame').append(div);
        div.addEventListener('click',function(event){
            moves++;
            let counterText = "Züge: " + moves;
            document.getElementById('MoveCounter').innerText = counterText;
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
 
            if(document.getElementsByClassName('match').length==tileCount){
                let button = document.createElement('button');
                button.setAttribute('class' , 'btn btn-warning');
                button.setAttribute('id', 'scoreAlert')
                let node = "Platzhalter";
                console.log(moves);
                if(moves >= tileCount*4) {
                    node = document.createTextNode("Du hast es geschafft! Hat ja auch lange genug gedauert... Züge: "+moves); 
                } else if(moves >= tileCount*2){
                    node = document.createTextNode("Du hast es geschafft in " + moves + ' Zügen. Geht da noch was?'); 
                } else {
                    node = document.createTextNode("Du hast es geschafft in nur " + moves + ' Zügen! Damit trägt du nun offiziell den Titel Mr. Media Worlwide!'); 
                }
                button.appendChild(node)
                document.getElementById('score').appendChild(button) 
            }
 
            if(flag==0)
            currImg.classList.add('showimg');
        })
    }
}
