// Problem 1: factory function iPhone1

// Write a factory function iPhone1 to create iPhone objects in bulk quantity.

// Define an iPhone1 function that takes the following inputs:
// ASIN
// color
// display
// camera
// The object it creates has the following properties:
// ASIN
// color
// display
// camera
// The object also has the following methods:
// dial(): Returns "tring.. tring..."
// sendMessage(): Returns "Sending message..."
// cameraClick(): Returns "Camera clicked"
// iPhone1 should return an object.


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
        }
    }
}

let mobile = iphone1("AB0572", "grey", "Amoled", "50 MP")
console.log(mobile);
console.log(mobile.dial());
console.log(mobile.sendMessage());
console.log(mobile.cameraClick());
