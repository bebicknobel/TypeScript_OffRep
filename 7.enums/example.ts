

enum Direction{

    Up,
    Down,
    Right,
    Left

}

function move(direction){

    console.log(`Moving :${Direction[direction].toLowerCase()}`);

}

move(Direction.Left);