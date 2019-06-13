function main(audioWand, audioPlayer) {


    //Kamera
    var canvas = document.getElementById("paper");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    c = canvas.getContext("2d");
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);

    var myBall = new Ball(canvas, audioPlayer, audioWand);
    var myPlayer = new Player(canvas);
    var myAi = new Ai(canvas);
    var scores = [new Text(canvas.width-100, 50), new Text(100, 50)];


    var move = 0;
    window.addEventListener('keydown', function (e) {
        if (e.keyCode == 40) {
            move = 1;
        }
        if (e.keyCode == 38) {
            move = -1;
        }
    }, false);
        window.addEventListener('keyup', function (e) {
            move = 0;
    }, false);

    //GAME LOOP
    var fps = 33;
    function gameloop() {
        setTimeout(function() {

            requestAnimationFrame(gameloop);

            myBall.update(1, 1, myPlayer, myAi, scores, move, canvas);
            myPlayer.update(move, canvas);
            myAi.update(myBall, canvas);

            c.fillStyle = "black";
            c.fillRect(0, 0, canvas.width, canvas.height);
            myBall.draw(c);
            myPlayer.draw(c);
            myAi.draw(c);
            for (var i = 0; i < scores.length; i++) {
                  scores[i].draw(c);
            }
        }, 1000 / fps);
    }

    gameloop();
}