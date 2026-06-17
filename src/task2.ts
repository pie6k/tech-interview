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
