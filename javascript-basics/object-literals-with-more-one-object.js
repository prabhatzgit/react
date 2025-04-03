// factory function
function createCricle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCricle(1);
//circle.draw();

// construction function
function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

//const another = new Circle(1); //
const another = new Circle(1); // window object
