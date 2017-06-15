# Prime Number Code Golf (Angularized)

## Objective

At a high level, the goal of this exercise is to ensure all unit tests pass while delivering the
smallest (by file size) version of `src/app/common/main/main.component.js`.

## Rules

* Determine requirements by assessing existing unit tests. Feel free to add more; but you cannot
modify existing unit tests. Overall? Compute prime numbers. **Hard-coded lists will not be accepted.** You'll want to set your final prime numbers in the existing `primes` field on the component's model/scope.
* Do not modify any files outside of the following:
  * `src/app/common/main/main.component.js`
  * `src/app/common/main/main.module.spec.js`

## Running the project

Install dependencies:

    > npm install -g gulp-cli
    > npm install

To view the app (follow on-screen instructions for URL/port):

    > gulp serve

To run unit tests:

    > gulp test

To keep unit tests running while modifying files:

    > gulp test:auto
