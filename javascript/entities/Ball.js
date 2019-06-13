class Ball {
    constructor(canvas, audioPlayer, audioWand) {
        this.speed = 5;
        this.width = 10;
        this.height = 10;
        this.x = canvas.width/2-this.width/2;
        this.y = canvas.height/2-this.height/2;
        this.x_speed = this.speed;
        this.y_speed = this.speed;
        this.speed_up = 2;
        this.audioPlayer = audioPlayer;
        this.audioWand = audioWand;

        c.fillRect(this.x,this.y,this.width,this.height);
        c.fillStyle = "white";
    }

    update(x, y, player, ai, text, move, canvas) {
        if (this.x < 0 && (player.y > (this.y+this.height) || ((player.y+player.height) < this.y)) )  {
            player.y = canvas.height/2-player.height/2;
            ai.y = canvas.height/2-ai.height/2;
            this.respawn(canvas);
            text[0].update();
            this.x_speed *= -1;
        } else if (this.x+this.width > canvas.width  && (ai.y > (this.y+this.height) || ((ai.y+ai.height) < this.y))) {
            player.y = canvas.height/2-player.height/2;
            ai.y = canvas.height/2-ai.height/2;
            this.respawn();
            text[1].update();
        }

        if (y > 0) {
            if (this.y < 0 || (this.y+this.height) > canvas.height) {
                this.y_speed *= -1;
            }
            this.y += this.y_speed;
        }
        if (x > 0) {
            this.x += this.x_speed;
        }

        if (this.x < player.x+player.width && this.y < player.y+player.height && this.y+this.height > player.y) {
            if (this.x_speed > -40) {
                this.x_speed -= this.speed_up;
            }
            this.x_speed *= -1;

            if (move > 0 && this.y_speed < 0) {
                this.y_speed *= -1;
            } else if (move < 0 && this.y_speed > 0) {
                this.y_speed *= -1;
            }
            this.audioPlayer.play();
        }

        if (this.x+this.width > ai.x && this.y < ai.y+ai.height && this.y+this.height > ai.y) {
            if (this.x_speed < 40) {
                this.x_speed += this.speed_up;
            }
            this.x_speed *= -1;
            this.audioPlayer.play();
        }
    }

    respawn(canvas) {
        this.x_speed = this.speed;
        this.y_speed = this.speed;
        this.x = canvas.width/2-this.width/2;
        this.y = canvas.height/2-this.height/2;
        this.audioWand.play();
    }

    draw(c) {
        c.fillStyle = "white";
        c.fillRect (this.x,this.y,this.width,this.height);
    }
}