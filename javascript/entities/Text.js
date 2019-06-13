class Text {
    constructor(x, y) {
        this.score = 0;
        this.x = x;
        this.y = y;
        this.fontsize = 30;
    }

    update() {
        this.score += 1;
    }

    draw(c) {
        c.font=this.fontsize+"px Verdana";
        c.fillText(this.score, this.x, this.y);
    }
}