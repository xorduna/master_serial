
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * this function starts the motor
     * @param speed speed of the motor
     */
    //% block
    export function forward_left(speed: number): void {
        // Add code here
        let buf = pins.createBuffer(2);
        buf[0] = 0x04
        buf[1] = speed
        pins.i2cWriteBuffer(0x04, buf);        
    }
    /**
     * this function starts the motor
     * @param speed speed of the motor
     */
    //% block
    export function reverse_left(speed: number): void {
        // Add code here
        let buf = pins.createBuffer(2);
        buf[0] = 0x05
        buf[1] = speed
        pins.i2cWriteBuffer(0x04, buf);        
    }

    /**
     * this function stops the motor
     * @param speed speed of the motor
     */
    //% block
    export function stop_left(): void{
        let buf = pins.createBuffer(2);
        buf[0] = 0x06
        buf[1] = 0
        pins.i2cWriteBuffer(0x04, buf);        
    }


    /**
     * this function starts the motor
     * @param speed speed of the motor
     */
    //% block
    export function forward_right(speed: number): void {
        // Add code here
        let buf = pins.createBuffer(2);
        buf[0] = 0x01
        buf[1] = speed
        pins.i2cWriteBuffer(0x04, buf);        
    }

    /**
     * this function starts the motor
     * @param speed speed of the motor
     */
    //% block
    export function reverse_right(speed: number): void {
        // Add code here
        let buf = pins.createBuffer(2);
        buf[0] = 0x02
        buf[1] = speed
        pins.i2cWriteBuffer(0x04, buf);        
    }

    /**
     * this function stops the motor
     * @param speed speed of the motor
     */
    //% block
    export function stop_right(): void{
        let buf = pins.createBuffer(2);
        buf[0] = 0x03
        buf[1] = 0
        pins.i2cWriteBuffer(0x04, buf);        
    }


    /**
     * this function starts the motor
     * @param speed speed of the motor
     */
    //% block
    export function forward(speed: number): void {
        // Add code here
        let buf = pins.createBuffer(2);
        buf[0] = 0x07
        buf[1] = speed
        pins.i2cWriteBuffer(0x04, buf);        
    }
    /**
     * this function starts the motor
     * @param speed speed of the motor
     */
    //% block
    export function reverse(speed: number): void {
        // Add code here
        let buf = pins.createBuffer(2);
        buf[0] = 0x8
        buf[1] = speed
        pins.i2cWriteBuffer(0x04, buf);        
    }

    /**
     * this function stops the motor
     * @param speed speed of the motor
     */
    //% block
    export function stop(): void{
        let buf = pins.createBuffer(2);
        buf[0] = 0x09
        buf[1] = 0
        pins.i2cWriteBuffer(0x04, buf);        
    }

    /**
     * this function stops the motor
     * @param speed speed of the motor
     */
    //% block
    export function read_right(): void{
        let buf = pins.createBuffer(2);
        buf[0] = 0x10 //Read R
        buf[1] = 0
        pins.i2cWriteBuffer(0x04, buf);    
        let num = pins.i2cReadNumber(0x04, NumberFormat.Int16LE)
        serial.writeValue("counter_r", num)
        //return num
    }

    /**
     * this function stops the motor
     * @param speed speed of the motor
     */
    //% block
    export function read_left(): void{
        let buf = pins.createBuffer(2);
        buf[0] = 0x11 //Read R
        buf[1] = 0
        pins.i2cWriteBuffer(0x04, buf);    
        let num = pins.i2cReadNumber(0x04, NumberFormat.Int16LE)
        serial.writeValue("counter_l", num)
        //return num
    }

    /**
     * this function stops the motor
     * @param speed speed of the motor
     */
    //% block
    export function read_epoch(): void{
        let buf = pins.createBuffer(2);
        buf[0] = 0x12 //Read R
        buf[1] = 0
        pins.i2cWriteBuffer(0x04, buf);    
        let num = pins.i2cReadNumber(0x04, NumberFormat.Int16LE)
        serial.writeValue("epoch", num)
        //return num
    }

}
