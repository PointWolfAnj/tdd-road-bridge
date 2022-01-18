const RoadBridge = require("../src/roadbridge.js");

describe("Roadbridge", function () {
  let bridge;

  beforeEach(function () {
    bridge = new RoadBridge();
  });

  it("0 cars on bridge at the start", function () {
    const expected = 0
    
    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });

  it("addCarToBridge increases cars on bridge by 1", function () {
    
    //input
    bridge.addCarToBridge()
    
    const expected = 1
    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });

  it("addCarToBridge increases cars on bridge to 3 when called 3 times", function () {
    
    //input
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    
    const expected = 3

    //set result equal to the return value from the getCarsOnBridge method
    // "call the getCarsOnBridge() method (run the code in that method) and store the returned value from that method inside the the result variable"
    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });

  it("addCarToBridge returns an error when cars on bridge are at capacity", function () {
    
    //input
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    
    const expected = "bridge at capacity"

    const result = bridge.addCarToBridge()

    expect(result).toEqual(expected)
  });

  it("addCarToBridge does not increase counter when cars on bridge are at capacity", function () {
    
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()

    //Because we are capacity, this call (the 5th) should *not* increase the counter
    bridge.addCarToBridge()

    const expected = 4

    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });

  it("RemoveCarFromBridge decrease counter when cars leave on bridge", function () {
    
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.removeCarFromBridge()


    const expected = 3

    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });

  it("RemoveCarFromBridge decrease counter when cars leave on bridge", function () {
    
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.removeCarFromBridge()


    const expected = 3

    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });

  it("ChangeinCapacity prevent cars from entering bridge when at full capacity", function () {
    
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    
    bridge.changeCapacity(3)

    bridge.addCarToBridge()


    const expected = 3

    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });

  it("CloseBridgeCompletely no cars allowed on", function () {
    
    bridge.addCarToBridge()
    bridge.changeCapacity(0)
    bridge.removeCarFromBridge()
    bridge.addCarToBridge() 

    const expected = 0

    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });

  it("reOpenBridge after closure allowing only one to car to enter", function () {
    
    bridge.changeCapacity(0) 
    bridge.reOpenBridge(1)
    bridge.addCarToBridge()
    


    const expected = 1

    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });

  it("reOpenBridge after closure allowing only multiple cars to enter", function () {
    
    bridge.changeCapacity(0) 
    bridge.reOpenBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()
    bridge.addCarToBridge()


    const expected = 4

    const result = bridge.getCarsOnBridge()

    expect(result).toEqual(expected)
  });



  

  
});