const colors = {
  color: 'red',
  printColor(): void {
    console.log(this.color);
  },
};

/**
 * Rule of thumb for understanding `this` in JavaScript.
 * `this` will be equal to whatever is to the left of a function call.
 *
 * In the case of `colors.printColor()` the keyword `this` would be `colors`.
 */

colors.printColor();

/**
 *  In this case when we call printColor(), there is nothing to the left, so
 *  `this` is UNDEFINED.
 */
const printColor = colors.printColor;
printColor();

/**
 * Arrow Function syntax always restricts the scope of `this` to
 * the function's context. So we could rewrite `colors` as follows to solve
 * our context problem above.
 */
const colorsBetter = {
  color: 'red',
  printColor: (): void => {
    console.log(this.color);
  },
};

/**
 * But what about the bind() method on the function prototype?
 *
 * Stephen recommends avoiding the bind() method when using TypeScript because
 * TS cannot really figure out what is going on with that context value.  So
 * if you ever put in an incorrect value in there, such as a reference to some
 * other object, stuff is going to break but TS won't be able to help you out.
 *
 *
 */
