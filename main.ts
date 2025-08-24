input.onButtonPressed(Button.A, function () {
    eleccion2 = opciones[Math.randomRange(0, 2)]
    eleccion2.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let eleccion2: Image = null
let opciones: Image[] = []
// Dibujos para cada opción
let piedra = images.createImage(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
let papel = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
let tijera = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
opciones = [piedra, papel, tijera]
