function alien(xoff,yoff) {
    this.alive = true;
    this.reward = 30;
    this.x = 45 * (xoff+1);
    this.y = 50 * (yoff+1);
    this.i = xoff;
    this.j = yoff;
    this.originX = 0;
    this.originY = 0;
    this.missile = false;
    this.frontLine = false;    
    this.show = function() {
        rectMode(CENTER);
        if(this.alive){
        fill(217,11,127);
        rect(this.x,this.y,18,18);
        this.y += fallRate;    
        if(directionRight){
            this.x +=1;   
        } else {
            this.x -=1;
        }            
        } else {
            this.missile = false;
    }
    }
    
    this.registerHit = function() {
        if(this.alive){
        if(dist(originInstance,firespeed,this.x,this.y) < 15){
            score += this.reward;
            alienKilled.play();
            trigger = false;
            this.alive = false;
            deadAliens++;
        }
    }    
    }
    
    this.fire = function() {
        if(random(difficulty) < 1 && this.missile === false && this.alive === true && this.frontLine === true){
            this.missile = true;
            this.originX = this.x;
            this.originY = this.y;
        }
    }    
}

function alien2(xoff,yoff) {
    this.alive = true;
    this.reward = 20;
    this.x = 45 * (xoff+1);
    this.y = 50 * (yoff+1);
    this.i = xoff;
    this.j = yoff;
    this.originX = 0;
    this.originY = 0;
    this.missile = false;
    this.frontLine = false;    
    this.show = function() {
        if(this.alive){
        fill(147,39,144);
        rect(this.x,this.y,18,18);
        this.y += fallRate;
        if(directionRight){
            this.x +=1;   
        } else if(directionLeft) {
            this.x -=1;
        }            
        } else {
            this.missile = false;
            if(this.i !== 0){
                alienGrid[this.i][this.j-1].frontLine = true;
            }
    }
    }
    
    this.registerHit = function() {
        if(this.alive){
        if(dist(originInstance,firespeed,this.x,this.y) < 15){
            score += this.reward;
            alienKilled.play();
            trigger = false;
            this.alive = false;
            deadAliens++;
        }
    }    
    }
    
    this.fire = function() {
        if(random(difficulty) < 1 && this.missile === false && this.alive === true && this.frontLine === true){
            this.missile = true;
            this.originX = this.x;
            this.originY = this.y;
        }
    }    
}

function alien3(xoff,yoff) {
    this.alive = true;
    this.reward = 10;
    this.x = 45 * (xoff+1);
    this.y = 50 * (yoff+1);
    this.i = xoff;
    this.j = yoff;
    this.originX = 0;
    this.originY = 0;
    this.missile = false;
    this.frontLine = false;
    this.show = function() {
        if(this.alive){
        fill(27,192,214);
        rect(this.x,this.y,18,18);
        this.y += fallRate;    
        if(directionRight){
            this.x +=1;   
        } else if(directionLeft) {
            this.x -=1;
        }   
        } else {
            this.missile = false;
            if(this.i !== 0){
                alienGrid[this.i][this.j-1].frontLine = true;
            }
    }
    }
    
    this.registerHit = function() {
        if(this.alive){
        if(dist(originInstance,firespeed,this.x,this.y) < 15){
            score += this.reward;
            alienKilled.play();
            trigger = false;
            this.alive = false;
            deadAliens++;
        }
    }
    }
    
    this.fire = function() {
        if(random(difficulty) < 1 && this.missile === false && this.alive === true && this.frontLine === true){
            this.missile = true;
            this.originX = this.x;
            this.originY = this.y;
        }
    }
}