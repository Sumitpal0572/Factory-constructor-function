// write a class Iphone4 to create iPhone objects in bulk quantity

// define a IPhone4 constructor function that takes input as

// ASIN
// color
// display
// camera
// bluetooth
// the object it creates has the following

// properties: ASIN, color, display, camera, bluetooth
// methods:
// dial - return "tring.. tring..."
// sendMessage - return "Sending message..."
// cameraClick - return "Camera clicked"
// connectBluetooth - return "Bluetooth connected successfully..."



class Iphone4 {
    constructor(ASIN, color, display, camera, bluetooth) {
        this.ASIN = ASIN,
            this.color = color,
            this.display = display,
            this.camera = camera,
            this.bluetooth = bluetooth
    }

    dial() {
        return "tring.. tring..."
    }

    sendMessage() {
        return "Sending message..."
    }

    cameraClicking() {
        return "Camera clicked"
    }

    connectBluetooth() {
        return "Bluetooth connected successfully..."
    }
}

let phone = new Iphone4("AS87XX", "Grey", "Amolded", "50Mp", true)
console.log(phone);
console.log(phone.dial());
console.log(phone.sendMessage());
console.log(phone.cameraClicking());
console.log(phone.connectBluetooth());
console.log(phone.ASIN);
console.log(phone.color);
console.log(phone.display);
console.log(phone.camera);
console.log(phone.bluetooth);

