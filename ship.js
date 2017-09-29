function ship() {
    this.x = 0;
    this.origin = 403;
    
    this.show = function() {
        if(lives > 400){
        fill(51,255, 0);
        }
        else if(lives >300 && lives <400){
        fill(255,234, 31);    
        }
        else if(lives >200 && lives <300){
        fill(255,118, 21);    
        }
        else if(lives > 100 && lives < 200){
        fill(255,50, 46);    
        }
        else if(lives < 99 && lives > 1){
        fill(89,2, 0);    
        }
        else if(lives < 0){
        fill(0);
        game = false;
        }
        noStroke();
        beginShape();
        vertex(385 + this.x,650);
        vertex(400 + this.x,650);
        vertex(400 + this.x,645);
        vertex(405 + this.x,645);
        vertex(405 + this.x,650);
        vertex(420 + this.x,650);    
        vertex(420 + this.x,660);    
        vertex(385 + this.x,660);
        endShape(CLOSE);
        
    }
    
    this.move = function(newPos) {
        this.x += newPos;
        this.origin += newPos;
        if(this.x >= 380){
            this.x = 380;
            this.origin = 782;
        }
        else if(this.x <=-385){
            this.x = -385;
            this.origin = 17;
        }
    }
}