input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    custom.forward_right(speed)
    basic.pause(3000)
    custom.reverse_right(speed)
    basic.pause(1000)
    custom.stop_right()
    basic.pause(1000)
    custom.forward_left(speed)
    basic.pause(3000)
    custom.reverse_left(speed)
    basic.pause(1000)
    custom.stop_left()
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
	custom.read_epoch()
    custom.read_left()
    custom.read_right()
})
let speed = 0
speed = 120
basic.forever(function () {
	
})
