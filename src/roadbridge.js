const DEFAULT_CAPACITY = 4

class RoadBridge {

  constructor() {
    this.numCars = 0
    this.capacity = DEFAULT_CAPACITY
  }

  getCarsOnBridge() {
    return this.numCars
  }

  addCarToBridge() {
    if (this.numCars === this.capacity) {
      return 'bridge at capacity'
    }
    
    this.numCars++
  }

}

module.exports = RoadBridge