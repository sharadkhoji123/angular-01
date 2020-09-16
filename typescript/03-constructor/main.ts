class Point {
    x: number;
    y: number;
    
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log('X: '+ this.x + ', Y: '+ this.y);
    }

}

let point = new Point(7, 5);
point.draw();
point.x=1;
point.y=4;
point.draw();
let point1 = new Point();
point1.draw();