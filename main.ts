let t2 = 0
let t1 = 0
OLED.init(128, 64)
OLED.clear()
basic.forever(function () {
    t1 = DS18B20.TemperatureNumber(DS18B20.pin.pin0)
    if (Math.abs(t1 - t2) < 0.3) {
        OLED.writeNumNewLine(t1)
        OLED.newLine()
        basic.pause(1000)
    }
    t2 = t1
})
