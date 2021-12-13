input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(2, neopixel.rgb(50, 255, 25))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(1, neopixel.hsl(300, 55, 30))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
