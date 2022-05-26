function boton_2 () {
    contador = contador + 1
    I2C_LCD1602.ShowString("*", posicion_signos, 0)
    posicion_signos = posicion_signos + 1
    basic.pause(1000)
    if (contador == 1) {
        password = password + 1000
        basic.pause(100)
    }
    if (contador == 2) {
        password = password + 100
        basic.pause(100)
    }
    if (contador == 3) {
        password = password + 10
        basic.pause(100)
    }
    if (contador == 4) {
        password = password + 1
        basic.pause(100)
        if (password == 1001) {
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("welcome", 0, 0)
            servos.P2.run(25)
            music.playMelody("E B C5 A B G A F ", 120)
            music.playMelody("E B C5 A B G A F ", 120)
        } else {
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("PASSWORD:", 0, 0)
            contador = 0
            posicion_signos = 10
            password = 0
        }
    }
}
function boton_ () {
    contador = contador + 1
    I2C_LCD1602.ShowString("+", posicion_signos, 0)
    posicion_signos = posicion_signos + 1
    basic.pause(1000)
    if (contador == 4) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("PASSWORD:", 0, 0)
        contador = 0
        posicion_signos = 10
        password = 0
    }
}
let password = 0
let contador = 0
let posicion_signos = 0
I2C_LCD1602.LcdInit(39)
posicion_signos = 10
I2C_LCD1602.ShowString("password:", 0, 0)
contador = 0
password = 0
pins.analogWritePin(AnalogPin.P5, 0)
servos.P2.setAngle(0)
servos.P0.setRange(0, 90)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        boton_()
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        boton_2()
    }
    if (posicion_signos >= 15) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("PASSWORD:", 0, 0)
        contador = 0
        posicion_signos = 10
        password = 0
    }
})
