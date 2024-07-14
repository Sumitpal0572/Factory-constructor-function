// Implement a constructor function iPhone3 to create iPhone objects with the following properties and methods:

// Properties: ASIN, color, display, camera, bluetooth
// Methods:
// dial(): Returns "tring.. tring..."
// sendMessage(): Returns "Sending message..."
// cameraClick(): Returns "Camera clicked"
// connectBluetooth(): Returns "Bluetooth connected successfully..."
// The iPhone3 constructor function should take parameters for ASIN, color, display, camera, and bluetooth.

// Use the .call() method to initialize the properties of the created objects.

// Ensure that the object created by the constructor function contains the specified properties and methods.


function phone(ASIN, color, display, camera, bluetooth) {
    (this.ASIN = ASIN),
        (this.color = color),
        (this.display = display),
        (this.camera = camera),
        (this.bluetooth = bluetooth)
}

function iphone3(ASIN, color, display, camera, bluetooth) {
    phone.call(this, ASIN, color, display, camera, bluetooth); //call

    // methods

    (this.dial = function () {
        return "tring.. tring...";
    }),

        this.SendingMessage = function () {
            return "Sending message...";
        },

        this.cameraClick = function () {
            return "Camera clicked";
        },

        this.connectBluetooth = function () {
            return "Bluetooth connected successfully...";
        };
}

let mymobile = new iphone3("BA345", "gold", "amoled", "20Mp", true)
console.log(mymobile);
console.log(mymobile.dial());
console.log(mymobile.SendingMessage());
console.log(mymobile.cameraClick());
console.log(mymobile.connectBluetooth());
console.log(mymobile.ASIN);
console.log(mymobile.color);
console.log(mymobile.display);
console.log(mymobile.camera);

