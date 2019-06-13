class Ai {
    constructor(canvas) {
        this.width = 15;
        this.height = canvas.height/3;
        this.y = canvas.height/2-this.height/2;
        this.x = canvas.width-this.width-10;
        this.speed = 4;
    }

    update(ball, canvas) {
        if (!((this.y+this.height) > canvas.height)) {
            if(ball.y+ball.height/2 > this.y+this.height/2) {
                this.y += this.speed;
            }
        }

        if ( !(this.y < 0 ) ) {
            if(ball.y+ball.height/2 < this.y+this.height/2) {
                this.y -= this.speed;
            }
        }
    }

    draw(c) {
        c.fillStyle = "white";
        c.fillRect (this.x,this.y,this.width,this.height);
      }
}