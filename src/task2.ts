/**
 * Implement memoizeFn.
 *
 * - if we call it with the same arguments, it should return the same result
 * - if our circle is garbage collected, should be removed from the memoized cache
 * - should automatically work with any number of arguments (no equality check needed)
 */

class Circle {
  constructor(public radius: number) {}
}

function enlargeCircl(circle: Circle, factor: number) {
  console.log("Enlarging circle", { circle, factor });
  return new Circle(circle.radius * factor);
}

const memoizedEnlargeCircle = memoizeFn(enlargeCircle);

const circle = new Circle(10);

const enlargedCircle = memoizedEnlargeCircle(circle, 2);
const enlargedCircle2 = memoizedEnlargeCircle(circle, 2);

console.log(enlargedCircle === enlargedCircle2); // should be true
