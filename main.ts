let t1 = 0
let t2 = 0
basic.forever(function () {
    t1 = DS18B20.TemperatureNumber(DS18B20.pin.pin0)
    if (Math.abs(t1 - t2) < 0.3) {
        led.plotBarGraph(
        t1,
        100
        )
        basic.pause(100)
    }
    t2 = t1
})
