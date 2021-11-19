function _1_décimale () {
    Unité = Math.trunc(Temp_brute)
    Reste = Temp_brute * 10 - Unité * 10
    dixième = Math.trunc(Reste)
}
let dixième = 0
let Reste = 0
let Temp_brute = 0
let Unité = 0
serial.redirectToUSB()
basic.forever(function () {
    Temp_brute = pins.analogReadPin(AnalogPin.P0) * -0.0888 + 71.7
    _1_décimale()
    serial.writeLine("" + Unité + "." + dixième + " oC")
    basic.pause(1000)
})
