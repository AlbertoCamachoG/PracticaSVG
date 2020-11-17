var arr=[];
class Bola{
    constructor(arrPos){
        this.posX=random(50,document.getElementsByTagName("svg")[0].width.animVal.value-50);
        this.posY=random(50,document.getElementsByTagName("svg")[0].height.animVal.value-50);
        this.incX=Math.floor(random(-5,5));
        this.incY=Math.floor(random(-5,5));
        this.radio=random(15,20);
        this.arrPos=arrPos;

        var circ=document.createElementNS("http://www.w3.org/2000/svg","circle");
        var colores=color();
        circ.setAttributeNS(null,"cx",this.posX);
        circ.setAttributeNS(null,"cy",this.posY);
        circ.setAttributeNS(null,"r",this.radio);
        circ.setAttributeNS(null,"id",this.arrPos);
        circ.setAttributeNS(null,"fill","rgb("+colores[0]+","+colores[1]+","+colores[2]+")");
        document.getElementsByTagName("svg")[0].appendChild(circ);
        
    }
    moverX(bola){
        document.getElementById(bola.arrPos+"").setAttribute("cx",bola.posX);
        document.getElementById(bola.arrPos+"").setAttribute("cy",bola.posY);
        bola.posX+=bola.incX;
        bola.posY+=bola.incY;
        var svgX=document.getElementsByTagName("svg")[0].width.animVal.value;
        if(bola.posX>svgX)bola.posX=svgX;
        if(bola.posX>=svgX-bola.radio){
            bola.incX*=-1
            if(Math.round(Math.random())*3==3){
                if(bola.incY>0){
                    bola.incY+=2;
                    if(bola.incY>10)bola.incY=5;
                }else{
                    bola.incY+=-2;
                    if(bola.incY<-10)bola.incY=-5;
                }
            }
        }
        if(bola.posX<=bola.radio){
            bola.incX*=-1
            if(Math.round(Math.random())*3==3){
                if(bola.incY>0){
                    bola.incY+=2;
                    if(bola.incY>10)bola.incY=5;
                }else{
                    bola.incY+=-2;
                    if(bola.incY<-10)bola.incY=-5;
                }
            }
        }
    }
    moverY(bola){
        document.getElementById(bola.arrPos+"").setAttribute("cx",bola.posX);
        document.getElementById(bola.arrPos+"").setAttribute("cy",bola.posY);
        bola.posX+=bola.incX;
        bola.posY+=bola.incY;
        var svgY=document.getElementsByTagName("svg")[0].height.animVal.value;
        if(bola.posY>svgY)bola.posY=svgY;
        if(bola.posY+bola.radio>=svgY){
            bola.incY*=-1
            if(Math.round(Math.random())*3==3){
                if(bola.incX>0){
                    bola.incX+=3;
                    if(bola.incX>10)bola.incX=10;
                }else{
                    bola.incX+=-3;
                    if(bola.incX<10)bola.incX=-10;
                }
            }
        }
        if(bola.posY<0)bola.posY=0;
        if(bola.posY<=bola.radio){
            bola.incY*=-1
            if(Math.round(Math.random())*3==3){
                if(bola.incX>0){
                    bola.incX+=3;
                    if(bola.incX>10)bola.incX=10;
                }else{
                    bola.incX+=-3;
                    if(bola.incX<10)bola.incX=-10;
                }
            }
        }
    }
}
function choque(bolas){
    //bolas.forEach(el=>{bolas.forEach(element => {colisionan(element,el)});})
    for(var i=0;i<=bolas.length-1;i++){
        for(var j=0;j<=bolas.length-1;j++){
            if(i!=j)colisionan(bolas[i],bolas[j]);
        }
    }
}
function colisionan(a,b){
    var ra=a.radio;
    var rb=b.radio;
    var distancia=Math.sqrt(Math.pow(b.posX-a.posX,2)+Math.pow(b.posY-a.posY,2));
    
    if(distancia<=ra+rb){
        a.posX-=2*a.incX;
        a.posY-=2*a.incY;
        b.posX-=2*b.incX;
        b.posY-=2*b.incY;

        a.incX*=-1;
        a.incY*=-1;
        b.incX*=-1;
        b.incY*=-1;

        /**a.incX-=2;
        a.incY+=2;
        b.incX-=2;
        b.incY+=2;*/
    }

}

setInterval(anima,30);
    
function createCircles(n){
    for(var i=0;i<n;i++){
        arr.push(new Bola(i));
    }
}

function anima(){
    actualiza();
}

function actualiza(){
    for(var i=0;i<arr.length;i++){
        arr[i].moverX(arr[i]);
        arr[i].moverY(arr[i]);
    }
    choque(arr);
}

function random(min,max){
    return Math.random() * (max - min) + min;
}

function color(){
    var col=[];
    col[0]=random(1,255);
    col[1]=random(1,255);
    col[2]=random(1,255);
    return(col);
}
createCircles(100);