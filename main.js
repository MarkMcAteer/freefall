title = "Free Fall";

description = `[Click/Hold]
`;

characters = [];

options = {
    theme: "shapeDark",
};

/** @type {Vector[]} */
let player;

let scr = 0.5; // The barrier movement speed

let tracker = 100;

function update() {
    // Initiailization process of the game happens here.
    if (!ticks) {
        player = [vec(50, 20)];  // The starting positions 
        greenBarrier = [vec(0, 100)]; // "                    " 
        redBarrier = [vec(0, 80)]; // "                    " 
        barrierDist = 80;
        tracker = 100;
    }

    // Increase the speed based on the score here.
    if (score > tracker) {
        scr += 0.05;
        tracker += 100;
    }

    // Increase score
    addScore(0.25);

    color("green")
    if (input.isPressed) {
        color("green");
    } else {
        color("red");
    }
    remove(player, (p) => {
        box(p, 3);  
    });

    color("light_green")
    remove(greenBarrier, (gb) => {
        gb.y -= scr;
        rect(gb, 100, 4);
        if (rect(gb, 100, 4).isColliding.rect.red) {
            end()
        }
        return gb.y < -2;
    });

    barrierDist -= scr;

    while (barrierDist < 0) {
        greenBarrier.push(vec(0, 100));
        barrierDist += rnd(30, 60);
    }

    color("light_red")
    remove(redBarrier, (rb) => {
        rb.y -= scr;
        rect(rb, 100, 4);
        if (rect(rb, 100, 4).isColliding.rect.green) {
            end()
        }
        return rb.y < -2;
    });

    barrierDist -= scr;

    while (barrierDist < 0) {
        redBarrier.push(vec(0, 100));
        barrierDist += rnd(30, 60);
    }

}