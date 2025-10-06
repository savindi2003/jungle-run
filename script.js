var audio1 = new Audio("sounds/audio1.wav");

var start = new Audio("sounds/startSound.wav");

var runSound = new Audio("sounds/run.mp3");
runSound.loop = true;

var jumpSound = new Audio("sounds/jump.mp3");

var deadSound = new Audio("sounds/dead.mp3")

var gameOver = new Audio("sounds/gameover.wav");

var audio2 = new Audio("sounds/desert.mp3")

var winSound = new Audio("sounds/win.wav");





function muteSound() {
    audio1.pause();
    audio2.pause();
}

function playSound() {
    audio1.play();
    audio2.play();
}

function keyCheck(event) {
    var keyCode = event.which;

    if (keyCode == 13) {

        document.getElementById("alert1").style.visibility = "hidden";

        if (girlRunAnimationId == 0) {
            girlRunAnimationId = setInterval(girlRunAnimation, 100);
            runSound.play();


        }

        if (moveBackground2AnimationId == 0) {
            moveBackground2AnimationId = setInterval(moveBackground2Animation, 60);
        }


        if (boxAnimationId == 0) {
            boxAnimationId = setInterval(boxAnimation, 150);
        }

    }


    if (keyCode == 32) {

        document.getElementById("alert2").style.visibility = "hidden";

        if (girlJumpAnimationId == 0) {
            clearInterval(girlRunAnimationId);

            girlRunAnimationId = 0;
            girlRunImageNumber = 1;

            girlJumpAnimationId = setInterval(girlJumpAnimation, 95);
            jumpSound.play();
            runSound.pause();
        }
    }
}


function clickButton() { //paly button click
    audio1play();
    removeHomePage();

}

function audio1play() {
    audio1.play();
    audio1.loop = true;
    start.play();
}

function removeHomePage() {
    //var background = document.getElementById("background");
    //  background.className = "background1";

    if (bgId == 1) {
        var background = document.getElementById("background");
        background.className = "background1";
        document.getElementById("girl").style.marginTop = "460px";

    }

    if (bgId == 2) {
        var background = document.getElementById("background");
        background.className = "background2";
        document.getElementById("girl").style.marginTop = "470px";
        audio1.pause();
        audio2.play();

    }

    if (bgId == 3) {
        var background = document.getElementById("background");
        background.className = "background3";

    }

    var name = document.getElementById("name");
    var playbtn = document.getElementById("playbtn");
    var footer = document.getElementById("footer");
    footer.style.visibility = "hidden";
    name.style.visibility = "hidden";
    playbtn.style.visibility = "hidden";
    var girl = document.getElementById("girl");
    girl.style.visibility = "visible";
    document.getElementById("girl1").style.visibility = "hidden";
    document.getElementById("score").style.visibility = "visible";
    document.getElementById("scoreframe").style.visibility = "visible";
    document.getElementById("mute").style.visibility = "visible";
    document.getElementById("soundon").style.visibility = "visible";
    document.getElementById("menu").style.visibility = "hidden";
    createBoxes();
    document.getElementById("alert1").style.visibility = "visible";

}

var score = 0;

var background2ImagePositionX = 0;
var moveBackground2AnimationId = 0;

function moveBackground2Animation() {
    background2ImagePositionX = background2ImagePositionX - 3;
    document.getElementById("background").style.backgroundPositionX = background2ImagePositionX + "px";


    score = score + 1;
    document.getElementById("score").innerHTML = score;
    if (score == 1400) {
        clearInterval(moveBackground2AnimationId);
        moveBackground2AnimationId = -1;

        clearInterval(girlRunAnimationId);
        runSound.pause();
        girlRunAnimationId = -1;

        clearInterval(girlJumpAnimationId)
        jumpSound.pause();
        girlJumpAnimationId = -1;

        document.getElementById("win").style.visibility = "visible";
        document.getElementById("malvedi").style.visibility = "visible";
        winSound.play();

        if (girlIdleAnimationId == 0) {
            girlIdleAnimationId = setInterval(girlIdleAnimation, 100);


        }

    }

    if (score == 135) {
        document.getElementById("alert2").style.visibility = "visible";
    }
}

var girlIdleImageNumber = 1;
var girlIdleAnimationId = 0;

function girlIdleAnimation() {
    girlIdleImageNumber = girlIdleImageNumber + 1;

    if (girlIdleImageNumber == 11) {
        girlIdleImageNumber = 1;
    }

    document.getElementById("girl").src = "resources/Idle (" + girlIdleImageNumber + ").png";

}



var girlRunImageNumber = 1;
var girlRunAnimationId = 0;

function girlRunAnimation() {
    girlRunImageNumber = girlRunImageNumber + 1;

    if (girlRunImageNumber == 9) {
        girlRunImageNumber = 1;
    }

    document.getElementById("girl").src = "resources/Run (" + girlRunImageNumber + ").png";

}


var girlJumpImageNumber = 1;
var girlJumpAnimationId = 0;
var girlMarginTop = 430;


function girlJumpAnimation() {
    girlJumpImageNumber = girlJumpImageNumber + 1;

    if (girlJumpImageNumber <= 6) {
        girlMarginTop = girlMarginTop - 40;
        var girl = document.getElementById("girl");
        girl.style.marginTop = girlMarginTop + "px";

    }

    if (girlJumpImageNumber > 6) {
        girlMarginTop = girlMarginTop + 40;
        var girl = document.getElementById("girl");
        girl.style.marginTop = girlMarginTop + "px";

    }

    if (girlJumpImageNumber == 11) {
        clearInterval(girlJumpAnimationId);
        jumpSound.pause();
        jumpSound.currentTime = 0;
        girlJumpAnimationId = 0;
        girlJumpImageNumber = 1;

        girlRunAnimationId = setInterval(girlRunAnimation, 100);
        runSound.play();

        if (moveBackground2AnimationId == 0) {
            moveBackground2AnimationId = setInterval(moveBackground2Animation, 60);
        }

        if (boxAnimationId == 0) {
            boxAnimationId = setInterval(boxAnimation, 150);
        }

    }

    document.getElementById("girl").src = "resources/Jump (" + girlJumpImageNumber + ").png";
}

var boxMarginLeft = 1000;

function createBoxes() {

    for (var i = 0; i < 20; i++) {

        if (i < 5) {
            boxMarginLeft = boxMarginLeft + 500;
        }
        if (i < 10) {
            boxMarginLeft = boxMarginLeft + 400;
        }

        if (i < 15) {
            boxMarginLeft = boxMarginLeft + 300;

        }
        if (i <= 20) {
            boxMarginLeft = boxMarginLeft + 250;
        }




        var box = document.createElement("div");

        if (bgId == 1) {
            box.className = "mushroom";


        }
        if (bgId == 2) {
            box.className = "goonussa";
        }
        if (bgId == 3) {
            box.className = "box";
        }

        box.id = "box" + i;

        box.style.marginLeft = boxMarginLeft + "px";
        box.style.visibility = "visible";

        document.getElementById("background").appendChild(box);
    }
}

var boxAnimationId = 0;

function boxAnimation() {
    for (var i = 0; i < 20; i++) {
        var box = document.getElementById("box" + i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 30;
        box.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft >= 260 & newMarginLeft < 370) {
            if (girlMarginTop >= 430) {
                clearInterval(boxAnimationId);

                clearInterval(girlRunAnimationId);
                runSound.pause();
                girlRunAnimationId = -1;

                clearInterval(girlJumpAnimationId)
                jumpSound.pause();
                girlJumpAnimationId = -1;

                clearInterval(moveBackground2AnimationId);
                moveBackground2AnimationId = -1;

                document.getElementById("box");
                box.style.visibility = "hidden";
                document.getElementById("girl");
                girl.style.marginTop = 480 + "px";


            }

        }

        // alert(newMarginLeft);

        if (newMarginLeft >= 260 & newMarginLeft < 370) {

            if (girlMarginTop >= 430) {

                clearInterval(boxAnimationId);

                clearInterval(girlRunAnimationId);
                runSound.pause();
                girlRunAnimationId = -1;

                clearInterval(girlJumpAnimationId)
                jumpSound.pause();
                girlJumpAnimationId = -1;

                clearInterval(moveBackground2AnimationId);
                moveBackground2AnimationId = -1;

                girlDeadAnimationId = setInterval(girlDeadAnimation, 100);

                document.getElementById("box");
                box.style.visibility = "hidden";
                document.getElementById("girl");
                girl.style.marginTop = 480 + "px";

                gameOver.play();
                gameOverText();
                yourScore();

            }
        }
    }
}

function gameVictory() {

    if (background2ImagePositionX == -1420) {
        clearInterval(boxAnimationId);

        clearInterval(girlRunAnimationId);
        runSound.pause();
        girlRunAnimationId = -1;

        clearInterval(girlJumpAnimationId)
        jumpSound.pause();
        girlJumpAnimationId = -1;

        clearInterval(moveBackground2AnimationId);
        moveBackground2AnimationId = -1;
    }

}


function gameOverText() {
    var gameOverText = document.getElementById("gameOverText");

    gameOverText.style.visibility = "visible";

}

function yourScore() {

    document.getElementById("scoreframe").style.visibility = "hidden";
    document.getElementById("score").style.visibility = "visible";
    score = "your score = " + score
    document.getElementById("score").innerHTML = score;
    document.getElementById("score").style.fontSize = "100px";
    document.getElementById("score").style.color = "white";

}

var girlDeadAnimationId = 0;
var girlDeadImageNumber = 1;


function girlDeadAnimation() {
    girlDeadImageNumber = girlDeadImageNumber + 1;

    if (girlDeadImageNumber == 11) {
        clearInterval(girlDeadAnimation);
        girlDeadImageNumber = 10;
        deadSound.pause();

    }
    //

    document.getElementById("girl").src = "resources/Dead (" + girlDeadImageNumber + ").png";

}


function menulist() {

    document.getElementById("menulist").style.visibility = "visible";
    var topic = document.getElementById("menuTopic");
    document.getElementById("menulist").appendChild(topic);
    document.getElementById("name").style.opacity = "0.3";
    document.getElementById("footer").style.opacity = "0.3";

}

function changeMenu() {
    menulist();
}

bg1Id = 1;
bg2Id = 2;
bg3Id = 3;

function bg1() {
    document.getElementById("menulist").style.visibility = "hidden";
    document.getElementById("name").style.opacity = "1";
    document.getElementById("footer").style.opacity = "1";
    bgId = 1;

}

function bg2() {
    document.getElementById("menulist").style.visibility = "hidden";
    document.getElementById("name").style.opacity = "1";
    document.getElementById("footer").style.opacity = "1";

    bgId = 2;



}

function bg3() {
    document.getElementById("menulist").style.visibility = "hidden";
    document.getElementById("name").style.opacity = "1";
    document.getElementById("footer").style.opacity = "1";
    bgId = 3;
}