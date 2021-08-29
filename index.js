const colorArray=["green","yellow","blue","red"];

var NextSequence=[];
var mySequence=[];
var level=0;
var start=0;

$('#playButton').click(()=>{
    $(`#playButton`).html('Try again');
    NextSequence=[];
    level=0;
    $(`#playButton`).attr("disabeled","disabled");
    if(start===1){ 
        $('body').css("background-color","rgb(24,24,24)")
    }
    if(start===0){
        start=1;
    }
    showAnimation();
})

const GameOver=()=>{
 $('#playBUtton').removeAttr("disabed")
 $('score').html(`Previous game results - ${level}`)
 NextSequence=[];
 level=0;
 mySequence=[];
 $('body').css("background-color","rgb(150, 7, 7)");
 
}
function showAnimation(){
    level++;
    $('level').html(`LEVEL ${level}`);
    NextSequence.push(Math.ceil(Math.random()*3));
    console.log('added',NextSequence[NextSequence.length-1]);
    NextSequence.forEach((e,index)=>{
        setTimeout(()=>{
          $(`#${colorArray[e]}`).fadeIn(100).fadeOut(100).fadeIn(100);
        },[(index+1)*1000]);
    });
}

$(`.colorButton`).click(function(){
    mySequence.push(`${$(this).attr('id')}`);
    $(`#${$(this).attr('id')}`).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log(mySequence[mySequence.length-1],colorArray[NextSequence[mySequence.length-1]]);
    if(mySequence[mySequence.length-1]!==colorArray[NextSequence[mySequence.length-1]]){
         GameOver();
    }
    else if(mySequence.length==NextSequence.length){
        mySequence=[];
        console.log('cleared sequence');
        showAnimation();
    }
    
    
})