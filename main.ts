controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ................
        ..222222222222..
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ..222222222222..
        ................
        `, X_wing_fighter, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Tie_Fighter: Sprite = null
let projectile: Sprite = null
let X_wing_fighter: Sprite = null
X_wing_fighter = sprites.create(img`
    .......................................................
    .......................................................
    ..........cccccc.......................................
    .........111111c11111111.111111111.....................
    .........ccccccc.......................................
    .........1122221.......................................
    .........1122221.......................................
    ........11121111.......................................
    ........1111111111.....................................
    .......11111111111.....................................
    .......11cccccc1111....................................
    c11111111cccccc21111111111111111111....................
    c11111111cccccc111111222222222222221111111111..........
    ......1111111111111111111111111111122222222211111111...
    ..111111111111111888121ccccccc1111111111111111222221...
    ...1cccccccccccc1888121ccccccc1111111111111111222221...
    ..111111111111111888121ccccccc1111111111111111222221...
    ......1111111111111111111111111111122222222211111111...
    c11111111cccccc1111112222222222222211111111111.........
    c11111111cccccc21111111111111111111....................
    .......11cccccc1111....................................
    .......11111111111.....................................
    ........1111111111.....................................
    ........11121111.......................................
    .........1122221.......................................
    .........1122221.......................................
    .........ccccccc.......................................
    .........111111c11111111.111111111.....................
    ..........cccccc.......................................
    .......................................................
    `, SpriteKind.Player)
X_wing_fighter.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(X_wing_fighter, 200, 200)
game.onUpdateInterval(500, function () {
    Tie_Fighter = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . c f c . . . . . . . . c f c . 
        . c f c . . . . . . . . c f c . 
        . c f c . . . c c . . . c f c . 
        . c f c . . c f f c . . c f c . 
        . c f c . c f f f f c . c f c . 
        . c f c c f f c c f f c c f c . 
        . c f f f f c f f c f f f f c . 
        . c f f f f c f f c f f f f c . 
        . c f c c f f c c f f c c f c . 
        . c f c . c f f f f c . c f c . 
        . c f c . . c f f c . . c f c . 
        . c f c . . . c c . . . c f c . 
        . c f c . . . . . . . . c f c . 
        . c f c . . . . . . . . c f c . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Tie_Fighter.setVelocity(-100, 0)
    Tie_Fighter.left = scene.screenWidth()
    Tie_Fighter.y = randint(0, scene.screenHeight())
    Tie_Fighter.setFlag(SpriteFlag.AutoDestroy, true)
})
