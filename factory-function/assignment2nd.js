// Write a factory function iPhone2 to create iPhone objects in bulk quantity.

// Define an iPhone2 function that takes the following inputs:
// ASIN
// color
// display
// camera
// bluetooth
// The object it creates has the following properties:
// ASIN
// color
// display
// camera
// bluetooth
// The object also has the following methods:
// dial(): Returns "tring.. tring..."
// sendMessage(): Returns "Sending message..."
// cameraClick(): Returns "Camera clicked"
// connectBluetooth(): Returns "Bluetooth connected successfully..."
// iPhone2 should return an object.



function iphone1(ASIN, color, display, camera) {
    return {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        dial: function () {
            return "tring.. tring..."
        },

        sendMessage: function () {
            return "Sending message..."
        },

        cameraClick: function () {
            return "Camera clicked"
        },
        connectBluetooth: function () {
            return "Bluetooth connected successfully..."
        }
    }
}

let phone = iphone1("AB0572", "grey", "Amoled", "50 MP", true)
console.log(phone);
console.log(phone.dial());
console.log(phone.sendMessage());
console.log(phone.cameraClick());
console.log(phone.connectBluetooth());

