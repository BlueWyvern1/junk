function makeEnemy() {
    let evilBurger  = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . e e e e e e e e e . .
        . . . . e e . 2 . . 2 . . e e .
        . . e e . . . . . . . . . . . e
        . . e 7 7 7 7 7 7 7 7 7 7 7 7 e
        . . e 2 2 2 2 2 2 2 2 2 2 2 2 e
        . . e e 5 5 5 5 5 5 5 2 2 2 2 e
        . . . e 5 5 . 5 5 5 5 5 5 5 5 e
        . . . e c c c c c c c c 5 5 5 e
        . . . e e . c c c c c c c c c e
        . . . . e e e e e e e e e e e e
        . . . . . . . . . . e e e e e .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
     `,SpriteKind.Enemy)
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    fish.setImage(fishImageLeft)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    fish.setImage(fishImageRight)
})
let fishImageRight=img`
    . . . . . . . . . . 1 . . . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . 1 1 . 1 . . . .
    . . . . . . . . 1 . . 1 . . . .
    . . . . . . 1 1 1 1 1 1 1 1 1 1
    . . . . . 1 1 6 6 6 6 6 6 6 6 1
    . . . . 1 1 6 6 6 6 6 6 6 6 2 1
    . . . 1 6 6 6 6 6 6 6 6 6 6 6 1
    . . 1 6 6 6 6 6 6 6 6 6 6 6 6 1
    . . . 1 1 6 6 6 6 6 6 6 6 6 6 1
    . . . . 1 6 6 6 6 6 6 6 6 6 6 1
    . . . . 1 6 6 6 6 6 6 6 6 6 2 1
    . . . . 1 1 6 6 6 6 6 6 6 6 1 1
    . . . . . 1 1 1 1 1 1 1 1 1 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
let fishImageLeft = fishImageRight.clone()
fishImageLeft.flipX()
let fish = sprites.create(fishImageLeft,SpriteKind.Player)
fish.setPosition(80, 110)
controller.moveSprite(fish,100, 0)
fish.setStayInScreen(true)
makeEnemy()