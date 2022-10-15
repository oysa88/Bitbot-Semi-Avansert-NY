radio.onReceivedValue(function (name, value) {
    if (name == "V") {
        kjør = value * -22.5
    } else if (name == "A") {
        venstre = value
    } else if (name == "B") {
        høyre = value
    }
    if (venstre == 1) {
        bitbot.rotate(BBRobotDirection.Left, kjør)
    } else if (høyre == 1) {
        bitbot.rotate(BBRobotDirection.Left, kjør)
    } else {
        bitbot.motor(BBMotor.Both, kjør)
    }
})
let B = 0
let A = 0
let vinkel = 0
let høyre = 0
let venstre = 0
let kjør = 0
radio.setGroup(1)
basic.forever(function () {
    vinkel = input.rotation(Rotation.Pitch)
    if (input.buttonIsPressed(Button.A)) {
        A = 1
    } else {
        A = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        B = 1
    } else {
        B = 0
    }
    radio.sendValue("V", vinkel)
    radio.sendValue("A", A)
    radio.sendValue("B", B)
})
