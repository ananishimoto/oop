// DO NOT user var - It has scope problems. If it's not a const, use it as let

// This is the OBJECT LITERAL way to declare an object. If it would have another circle, the entire object would be duplicated, which is not a very good way of working.
// If the object has more than 1 method, it's called bahavour. And this is when using object literal doesn't work.

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log('this is the draw object literal function');
    }
};

// circle.draw();

// The way to duplicate objects with behaviour is using Factories and Constructors. Example:

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('This is the draw factory function')
        }
    }
}

// const factoryCircle = createCircle(1);
// factoryCircle.draw();

// The way to call a class through Constructors - REMEMBER: The first letter is normally capital

function Circle(radius) {
    this.radius= radius;
    this.draw = function() {
        console.log('This is the draw constructor function')
    }
}

const circleConstructor = new Circle(1);

// DO NOT forget to put "new" in front of the class instance created. When not with new, it will create global variables in the window