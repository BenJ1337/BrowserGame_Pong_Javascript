class Player {
    constructor(canvas) {
        this.width = 15;
        this.height = canvas.height/3;
        this.y = canvas.height/2-this.height/2;
        this.x = 10;
        this.speed = 4;
    }

    update(y, canvas) {
        if (y > 0) {
            if (!((this.y+this.height) > canvas.height)) {
                this.y += this.speed;
            }
        }
        if (y < 0) {
            if ( !(this.y < 0 ) ) {
                this.y += -this.speed;
            }
        }
    }

    draw(c) {
        c.fillStyle = "white";
        c.fillRect (this.x,this.y,this.width,this.height);
    }
}