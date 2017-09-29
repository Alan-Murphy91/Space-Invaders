function star() {
    this.a = 125;
    this.b = -5;
    
    this.c = 200;
    this.d = -197;
    
    this.e = 255;
    this.f = -1715;
    
    this.g = 315;
    this.h = -505;
    
    this.i = 405;
    this.j = -1135;
    
    this.k = 455;
    this.l = -10;
    
    this.m = 500;
    this.n = -2502;
    
    this.o = 515;
    this.p = -8441;
    
    this.q = 605;
    this.r = -28;
    
    this.s = 615;
    this.t = -819;
    
    this.u = 705;
    this.v = -3113;
    
    this.w = 765;
    this.x = -1875;
    
    this.y = 799;
    this.z = -133;    
    
    this.show = function() {
        fill(255);
        noStroke();
        ellipse(this.a,this.b,1,1);
        this.a-=0.5;
        this.b+=2;
        ellipse(this.c,this.d,1,1);
        this.c-=0.5;
        this.d+=2;
        ellipse(this.e,this.f,1,1);
        this.e-=0.5;
        this.f+=2;
        ellipse(this.g,this.h,1,1);
        this.g-=0.5;
        this.h+=2;
        ellipse(this.i,this.j,1,1);
        this.i-=0.5;
        this.j+=2;
        ellipse(this.k,this.l,1,1);
        this.k-=0.5;
        this.l+=2;
        ellipse(this.m,this.n,1,1);
        this.m-=0.5;
        this.n+=2;
        ellipse(this.o,this.p,1,1);
        this.o-=0.5;
        this.p+=2;
        ellipse(this.q,this.r,1,1);
        this.q-=0.5;
        this.r+=2;
        ellipse(this.s,this.t,1,1);
        this.s-=0.5;
        this.t+=2;
        ellipse(this.u,this.v,1,1);
        this.u-=0.5;
        this.v+=2;
        ellipse(this.w,this.x,1,1);
        this.w-=0.5;
        this.x+=2;  
        ellipse(this.y,this.z,1,1);
        this.y-=0.5;
        this.z+=2;        
        
        
        if(this.b > 700){
            this.b = -5;
            this.a = 125;
        }
        if(this.d > 800){
    this.c = 200;
    this.d = -47;
        }
        if(this.f > 800){
    this.e = 235;
    this.f = -15;
        }
        if(this.h > 800){
    this.g = 315;
    this.h = -5;
        }
        
        if(this.j > 800){
    this.i = 405;
    this.j = -35;
        }
        if(this.l > 800){
    this.k = 455;
    this.l = -10;
        }
        if(this.n > 800){
    this.m = 500;
    this.n = -2;
        }
        if(this.p > 800){
    this.o = 515;
    this.p = -41;
        }
        if(this.r > 800){
    this.q = 605;
    this.r = -28;
        }        
        if(this.t > 800){
    this.s = 615;
    this.t = -19;
        }
        if(this.v > 800){
    this.u = 705;
    this.v = -13;
        }
        if(this.x > 800){
    this.w = 765;
    this.x = -75;
        }
        if(this.z > 800){
    this.y = 799;
    this.z = -33;
        }        
        
        
    }
}