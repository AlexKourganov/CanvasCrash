const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// // fillRect(x,y,width,height)
// ctx.fillStyle = 'red';
// ctx.fillRect(20,20,150,100);
// ctx.fillStyle = 'aqua';
// ctx.fillRect(200,20,150,100);

// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle  = 'green';
// ctx.strokeRect(100,200,150,100);
// // clearRect
// ctx.clearRect(25,25,140,90);
// // fillText
// ctx.fillStyle = 'black';
// ctx.font='30px Arial';
// ctx.fillText('Hello World',400,50);

// // StrokeText()
// ctx.lineWidth=1;
// ctx.strokeStyle='orange';
// ctx.strokeText('Hello World2',400,100);

// // Paths
// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(100,200);
// ctx.lineTo(50,50);
// // ctx.closePath();
// ctx.fillStyle = 'coral';
// ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(200,50);
// ctx.lineTo(150,200);
// ctx.lineTo(250,200);
// ctx.lineTo(200,50);
// ctx.fillStyle = 'aqua';
// ctx.fill();
// ctx.stroke();

// // Rectangle
// ctx.beginPath();
// ctx.rect(300,50,150,100);
// ctx.fillStyle = 'till';
// ctx.fill();

// Arc/circles
// ctx.beginPath();
// const centerX = canvas.width/2;
// const centerY = canvas.height/2;

// ctx.arc(centerX,centerY,200,0, Math.PI*2);
// // mouth
// ctx.moveTo(centerX + 100,centerY);
// // Draw mouth
// ctx.arc(centerX,centerY,100,0,Math.PI,false);

// // Move left eye
// ctx.moveTo(centerX - 60,centerY - 80);
// ctx.arc(centerX-80,centerY-80,20,0,Math.PI*2);
// // Move to Right Eye
// ctx.moveTo(centerX + 100,centerY - 80);
// ctx.arc(centerX+80,centerY-80,20,0,Math.PI*2);



// ctx.stroke();

// Animation 1
// const circle = {
//     x:200,
//     y:200,
//     size:30,
//     dx:5,
//     dy:4
// }
// function drawCircle(){
//     ctx.beginPath();
//     ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
//     ctx.fillStyle = 'purple';
//     ctx.fill();
// }

// function update(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     drawCircle();
//     // change position
//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     // Collison detection
//     if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
//         console.log('HIT');
//         circle.dx *= -1; // circle.dx=circle.dx * -1
//     }
//     // detetect top/bottom collision
//     if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
//         console.log('HIT');
//         circle.dy *= -1; // circle.dx=circle.dx * -1
//     }



//     requestAnimationFrame(update);
// }
// update();


// Animation 2
const image = document.getElementById('source');
const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
};

function drawPlayer() {
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
    player.x += player.dx;
    player.y += player.dy;
    detectWalls();
}

function detectWalls() {
    //left
    if (player.x < 0) {
        player.x = 0;
    }
    //right dont forget players width
    if (player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w;
    }
    //top
    if (player.y < 0) {
        player.y = 0;
    }
    //bottom
    if (player.y + player.h > canvas.height) {
        player.y = canvas.height - player.h;
    }
}

function update() {
    clear();
    drawPlayer();

    newPos();

    requestAnimationFrame(update);
}

function moveUp() {
    player.dy = -player.speed;
}

function moveDown() {
    player.dy = player.speed;
}

function moveLeft() {
    player.dx = -player.speed;
}

function moveRight() {
    player.dx = player.speed;
}

function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

function keyUp(e) {
    if (
        e.key == 'Right' ||
        e.key == 'ArrowRight' ||
        e.key == 'Left' ||
        e.key == 'ArrowLeft' ||
        e.key == 'Up' ||
        e.key == 'ArrowUp' ||
        e.key == 'Down' ||
        e.key == 'ArrowDown'
    ) {
        player.dx = 0;
        player.dy = 0;
    }
}
update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);