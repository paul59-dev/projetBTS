const mqtt = require("mqtt")
const client = mqtt.connect("172.16.100.117")
client.on("connect", () => {
    setInterval(() => {
        var random = Math.random()*50
        console.log(random)
        if (random<30) {
            client.publish('mqttPaul', 'Simple MQTT using HiveMQTT : ' + random.toString())
        }
    }),3000;
})