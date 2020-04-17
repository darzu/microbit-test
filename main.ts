radio.onReceivedValue(function (name, value) {
	
})
input.onGesture(Gesture.Shake, function () {
    led.plot(0, 0)
    led.plot(0, 0)
    led.plot(0, 0)
    led.plot(0, 0)
    led.plot(0, 0)
    led.plot(0, 0)
})
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
	
})
basic.forever(function () {
    basic.showNumber(0)
    basic.showNumber(Math.randomRange(1, 6))
    basic.showNumber(3)
})
