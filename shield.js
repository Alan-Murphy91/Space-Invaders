function shield(pos) {
    this.health = 55000;
    this.shieldOn = true;
    this.x = 110 * (pos+1);
    
    this.showShield = function() {
        if(this.health > 15000){
            fill(51,255, 0);
        }
        else if(this.health > 9999 && this.health < 15000){
            fill(236,255, 67);
        } 
        else if(this.health > 6999 && this.health < 10000){
            fill(255,171, 75);
        }  
        else if(this.health > 3999 && this.health < 7000){
            fill(255, 84, 56);
        }
        else if(this.health > 999 && this.health < 4000){
            fill(178, 0, 25);
        }
        else if(this.health > 1 && this.health < 1000){
            fill(26, 0, 7);
        }        
        else if(this.health < 0){
            fill(0);
            this.shieldOn = false;
        }
        beginShape();
        vertex(this.x,600);
        vertex(this.x,570);
        vertex(this.x+10,560);
        vertex(this.x+50,560);
        vertex(this.x+60,570);
        vertex(this.x+60,600);
        vertex(this.x+55,600);
        vertex(this.x+40,600);
        vertex(this.x+40,600);
        vertex(this.x+35,595);
        vertex(this.x+20,595);
        vertex(this.x+15,600);
        vertex(this.x+15,600);
        vertex(this.x,600);
        endShape(CLOSE);
    }   
}