input.onButtonPressed(Button.A, function () {
    custom.forward(100)
    basic.pause(2000)
    custom.stop()
})
input.onButtonPressed(Button.B, function () {
    custom.read_epoch()
    custom.read_left()
    custom.read_right()
})
let speed = 120
basic.forever(function () {
	
})
