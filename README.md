# Test-Driven Development

## Road Bridge

![](bridge.jpg "Road Bridge")

### Learning Objectives
- Use a test framework to help test code
- Use the Red Green Refactor loop to develop code
- Test-drive a program with multiple functions with unit tests

### Quickstart
1. Fork this repository
2. Clone your fork to your local machine (example command below, see note)
3. Install project dependencies

```sh
$ git clone git@github.com:[username]/tdd-road-bridge.git && cd tdd-road-bridge
$ npm ci # to install dependencies
```

### Instructions
1. Implement the below requirements by following a test-driven development process. 
 
### Requirements

You need to write a program that controls access to a road bridge. The road bridge has a capacity and only
so many cars can be on the bridge at the same time. Your program should support the following interactions:

* Return the number of cars currently on the bridge
* Record when a car moves on to the bridge. If a car tries to move on to the bridge when it is at capacity, an error should be returned.
* Record when a car moves off the bridge.
* Be able to change the capacity of the bridge (for example, when there is high winds less cars are allowed on).
* Close the bridge completely (for example, in the case of an accident). Cars that are on the bridge when it is closed should be still be able to move off the bridge but no new cars should be allowed on.
* Reopen the bridge when it is closed.

* Record when a car moves on to the bridge. 
 - what method will implement this code? Is it a new method or an existing method?
  : a new method, addCarToBridge()
 - what do we expect this method to *do*?
  : We want it to increase the number of cars on the bridge by 1
 - What parameters does the method need?
  : None!
 - What does the the method return?
  : Nothing (At the moment)
 - What data does the method change, if any? How does it change it?
  : It will increment the numCars property of the RoadBridge class
 - Is there any other data the method needs? Where will it get it from?
  : None (later we'll also need to know the bridge capacity but we are ignoring it for now...)
 - How could I test this code? How will I know it's worked? Can we check some data that should be changed, or the method return value?
  : If I check the numCars property after I call the method it should increase by 1
 - What test cases could we have? (Test case = "when I do X, I expect Y to happen" )
  : When I call addCarToBridge() once, I expect numCars to be 1
  : When I call addCarToBridge() three times, I expect numCars to be 3







  You need to write a program that controls access to a road bridge. The road bridge has a capacity and only so many cars can be on the bridge at the same time. Your program should support the following interactions:

Return the number of cars currently on the bridge
Record when a car moves on to the bridge. If a car tries to move on to the bridge when it is at capacity, an error should be returned.
Record when a car moves off the bridge.
Be able to change the capacity of the bridge (for example, when there is high winds less cars are allowed on).
Close the bridge completely (for example, in the case of an accident). Cars that are on the bridge when it is closed should be still be able to move off the bridge but no new cars should be allowed on.
Reopen the bridge when it is closed.
Extension 1

Update your code so that emergency vehicles can still access the bridge when it is over capacity or closed. Emergency vehicles should still count towards the bridge capacity, even though they are always allowed access.
Extension 2

Update your code so it can also track HGVs. HGVs should count double towards the bridge capacity.
It should be possible to close the bridge to HGVs only (cars can still use the bridge.)