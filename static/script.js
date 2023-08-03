availableImages=['images/a_1.jpg','images/a_2.jpg','images/a_3.jpg','images/a_4.jpg','images/a_5.jpg','images/a_6.jpg','images/a_7.jpg','images/a_8.jpg','images/a_9.jpg','images/a_10.jpg','images/a_11.jpg','images/a_12.jpg','images/a_13.jpg','images/a_14.jpg','images/a_15.jpg','images/a_16.jpg','images/a_1.jpg','images/a_2.jpg','images/a_3.jpg','images/a_4.jpg','images/a_5.jpg','images/a_6.jpg','images/a_7.jpg','images/a_8.jpg','images/a_9.jpg','images/a_10.jpg','images/a_11.jpg','images/a_12.jpg','images/a_13.jpg','images/a_14.jpg','images/a_15.jpg','images/a_16.jpg']
const maindiv = document.getElementById("boardgame")
const scorediv = document.getElementById("score");

function start(){
    let moves = 0;
    let cardOpen = 0;
    var row = document.createElement('div')
    ImagesCopy= JSON.parse(JSON.stringify( availableImages))
    for(let j=1;j<=32;j++){
        var div = document.createElement('div');
        div.setAttribute('class','imgdiv');
        var image = document.createElement('img');
        randomImg = ImagesCopy.splice(Math.floor(Math.random() * ImagesCopy.length),1);
        image.setAttribute('src',randomImg);
        image.setAttribute('class','hide');
        div.appendChild(image);
        row.appendChild(div);
        
        if(j%8==0){
            document.getElementById('boardgame').append(row);
            row = document.createElement('div');
        }
    };
        div.addEventListener('click',function(event){
            moves++;
            let curr = event.currentTarget.children
            let currImg = curr[0]
            var currentlyshowing = document.getElementsByClassName('showimg');
            if(cardOpen == 0){
                currImg.classList.add('showimg');
                let cardOpen = 1;
                let lastImg = currImg;
                return lastImg;
            }
            else if(currImg.src == lastImg.src){
                    currImg.classList.add('showimg');
                    lastImg.classList.add('showimg');
                    currImg.classList.add('match');
                    lastImg.classList.add('match');
                    let cardOpen = 0;
            }
            else {
                function makeTileInvisible() {
                    let currentlyshowing = document.getElementsByClassName('showimg');
                    let curr = event.currentTarget.children;
                    let currImg = curr[0];
                    currentlyshowing[i].classList.remove('showimg');
                    currImg.classList.remove('showimg');
                    let cardOpen = 0;
                }  
                       setTimeout(makeTileInvisible, 3000);
            }
 
            if(document.getElementsByClassName('match').length==32){
                let button = document.createElement('button');
                button.setAttribute('class' , 'btn btn-warning');
                let node= document.createTextNode("Du gewinnst! Benötigte Züge: "+moves);
                button.appendChild(node);
                document.getElementById('score').appendChild(button);
            }
        });
}
