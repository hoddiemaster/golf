canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

golf_width = 100;
golf_height = 90;

background_image = "golf.jpg";
golf_image = "golf ball.jpg";
golf_x = 10;
golf_Y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    golf_imgTag = new Image();
    golf_imgTag.onload = uploadgolf;
    golf_imgTag.src = golf_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgolf() {
    ctx.drawImage(golf_imgTag, golf_x, golf_Y, golf_width, golf_height);
}

window.addEventListener("keydown", mykeyDown);

function mykeyDown(e) {
    keypress = e.keyCode;
    if (keypress == '38') {
        up();
    }

    if (keypress == '39') {
        right();
    }

    if (keypress == '40') {
        down();
    }
    if (keypress == '37') {
        left();
    }
}

function up() {
    if (golf_Y >= 0) {
        golf_Y = golf_Y - 10;
        uploadBackground();
        uploadgolf();
    }
}
function down() {
    if (golf_Y <= 500) {
        golf_Y = golf_Y + 10;
        uploadBackground();
        uploadgolf();
    }
}

function left() {
    if (golf_x >= 0) {
        golf_x = golf_x - 10;
        uploadBackground();
        uploadgolf();
    }
}

function right() {
    if (golf_x <= 700) {
        golf_x = _x + 10;
        uploadBackground();
        uploadgolf();
    }
}