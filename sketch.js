//
//Made by Alan Murphy 2017, all code my own
//
//p5js - https://p5js.org/
//Lauren McCarthy, creator of p5js - http://lauren-mccarthy.com/
//p5js tutorials by Daniel Shiffman - http://thecodingtrain.com/
//Music - Tomohiro Nishikado/The Prodigy - 'Space Invaders'

var spaceship;
var grid = [[],[],[],[],[],[]];
var z = 0;
var alienGrid;
var trigger = false;
var engaged = false;
var firespeed = 645;
var originInstance = 0;
var score = 0;
var difficulty = 900;
var lives = 650;
var level = 1;
var directionRight = true;
var directionLeft = false;
var fallRate = 0.01;
var deadAliens = 0;
var game = true;
var alienKilled;
var laser;
var vbn;
var difficultyIncrement = 100;
var fallIncrement = 0.01;
var spaceInvaders;

function setup() {
    spaceInvaders = loadSound('https://s0.vocaroo.com/media/download_temp/Vocaroo_s0T3iDVAaJZO.mp3');
//    spaceInvaders = loadSound('sound/spaceinvaders.mp3');
    laser = loadSound('https://s1.vocaroo.com/media/download_temp/Vocaroo_s1wVAd6vbYvs.mp3');
//    laser = loadSound('sound/shoot.wav');
    alienKilled = loadSound('https://s0.vocaroo.com/media/download_temp/Vocaroo_s0RlDnvwEPnN.mp3');
//    alienKilled = loadSound('sound/invaderkilled.wav');
    vbn = new star();
    spaceship = new ship();
    alienGrid = make2DArray(12,5);
    createCanvas(800,800);
    background(0);
    
    for(var i=0; i<grid.length; i++){
        grid[i] = new shield(i);
    }
    
    for(var j=0; j<12; j++){
        for(var k=0; k<5; k++){
            if(k < 1){
                alienGrid[j][k] = new alien(j,k);
            }
            else if(k >= 1 && k < 3){
                alienGrid[j][k] = new alien2(j,k);
            }
            else    {
                alienGrid[j][k] = new alien3(j,k);
            }
        }
    }
}


function draw() {
    holdCheck();
    spaceship.show();
    vbn.show();
    
    for(var i=0; i<grid.length; i++){
        grid[i].showShield();
    }
    
    for(var x=0; x<12; x++){
        for(var y=0; y<5; y++){
            alienGrid[x][y].show();
        }
    }
    
    if(firespeed < 0 && engaged === true){
        trigger = false;
        engaged = false;
        firespeed = 645;
    }
    
    if(trigger === false){
        engaged = false;
        firespeed = 645;
    }
    
    if(trigger === true){
        fill(51,255,0);
        rect(originInstance, firespeed,5,5);
        firespeed -=21;
    }
    
    for(var x=0; x<12; x++){
        for(var y=0; y<5; y++){
            alienGrid[x][y].registerHit();
        }
    }
    
    for(var f=0; f<12; f++){
        alienGrid[f][4].frontLine = true;
    }
    
    for(var i=0; i<12; i++){
        for(var j=0; j<5; j++){
        alienGrid[i][j].fire();
        if(alienGrid[i][j].missile){
            fill(Math.floor(Math.random() * 255) + 1,Math.floor(Math.random() * 255) + 1,Math.floor(Math.random() * 255) + 1);
            rect(alienGrid[i][j].originX, alienGrid[i][j].originY,7,7);
            alienGrid[i][j].originY +=10;
        }
        if(alienGrid[i][j].missile){
            if(alienGrid[i][j].originY > 805){
                alienGrid[i][j].missile = false;
            }
        } 
            
        /////////// shield hit register ////////
        for(var s=0; s<grid.length; s++){
            if(dist(alienGrid[i][j].originX,alienGrid[i][j].originY,grid[s].x+30,580) < 35){
                if(grid[s].shieldOn){
                alienGrid[i][j].missile = false;
                grid[s].health -=1;
                }
            }
        }
            
        for(var s=0; s<grid.length; s++){
            if(trigger){
            if(dist(originInstance,firespeed,grid[s].x+30,580) < 35){
                if(grid[s].shieldOn){
                trigger = false;
                grid[s].health -=3000;
                }
            } 
        }
        }    
            
            
        if(dist(alienGrid[i][j].originX,alienGrid[i][j].originY,spaceship.origin,655) < 15){
            alienGrid[i][j].missile = false;
            lives -=0.5;
        }
            
        if(dist(alienGrid[i][j].x,alienGrid[i][j].y,800,alienGrid[i][j].y) < 15){
            directionRight = false;
            directionLeft = true;
        }
            
        if(dist(alienGrid[i][j].x,alienGrid[i][j].y,0,alienGrid[i][j].y) < 15){
            directionRight = true;
            directionLeft = false;
        }
            
        if(dist(alienGrid[i][j].x,alienGrid[i][j].y,spaceship.origin,650) < 50){
            game = false;
        }    
        }
    }
    stroke(51,255,0);
    noFill();
    beginShape();
    vertex(0,0);
    vertex(800, 0);
    vertex(800, 800);
    vertex(0, 800);
    endShape(CLOSE);
    beginShape();
    vertex(1,1);
    vertex(799, 1);
    vertex(799, 799);
    vertex(1, 799);
    endShape(CLOSE);
    
    if(deadAliens === 60){
        deadAliens = 0;
        fallRate += fallIncrement;
        difficulty -= difficultyIncrement;
        level++;
        for(var i=0; i<12; i++){
            for(var j=0; j<5; j++){
                alienGrid[i][j].x = 45 * (alienGrid[i][j].i+1);
                alienGrid[i][j].y = 50 * (alienGrid[i][j].j+1);
                alienGrid[i][j].frontLine = false;
                alienGrid[i][j].alive = true;
            }
        }
    }
    
    if(!game){
        noLoop();
        alert('Game Over! Your score is '+score);
    }
}
    
    

function holdCheck() {
    if(keyIsDown(LEFT_ARROW)){
        spaceship.move(-5);
    }
    else if (keyIsDown(RIGHT_ARROW)){
        spaceship.move(5);
    }
    background(0);
}  


function make2DArray(col, row) {
    var arr = new Array(col);
    for(var i=0; i<arr.length; i++){
        arr[i] = new Array(row);
    }
    return arr;
}

function keyPressed() {
    if(keyCode === 32 && engaged === false){
        trigger = true;
        engaged = true;
        originInstance = spaceship.origin;
        laser.play();
    }
} 



