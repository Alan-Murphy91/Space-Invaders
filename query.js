$(document).ready(function(){
    
    setInterval(function(){ 
     $('.level').html('Level'+'</br>'+'</br>'+'<span id="xxc">'+level+'');    
        
    if(score === 0){
    $('.score').html('Score'+'</br>'+'</br>'+'<span id="xxc">'+' 0000'+'');    
    }    
        
    else if(score < 10 && score > 0){    
    $('.score').html('Score'+'</br>'+'</br><span id="xxc">'+' 000'+score+'');
    }
        
    else if(score <100 && score > 10){
    $('.score').html('Score'+'</br>'+'</br><span id="xxc">'+' 00'+score+'');
    }
        
    else if(score <1000 && score > 100){
    $('.score').html('Score'+'</br>'+'</br><span id="xxc">'+' 0'+score+'');
    }
        
    else if(score > 1000){
    $('.score').html('Score'+'</br>'+'</br><span id="xxc">'+score+'');
    }
    }, 1); 

});