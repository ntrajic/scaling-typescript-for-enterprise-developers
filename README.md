# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Testing with Vitest

There are two main approaches to setting up Vitest in a TypeScript project: a simple, standalone setup and a more integrated approach using Vite.

**1. Simple Vitest Setup**

This approach is quick and easy, and it's a great way to get started with Vitest.

**Installation:**

1.  Install Vitest as a development dependency:
    ```bash
    npm install -D vitest
    ```
2.  Update the `test` script in your `package.json` to run Vitest:
    ```json
    "scripts": {
      "test": "vitest"
    }
    ```

**2. Integrated Setup with Vite (Eve Porcello's Approach)**

This approach, demonstrated by Eve Porcello in the course, uses Vite to configure and run Vitest. This provides a more powerful and integrated testing experience, including features like type-checking.

**Key Components of the Setup:**

*   **`vitest`:** The core testing framework.
*   **`vite`:** A build tool that provides a fast and lean development experience. Vitest is built on top of Vite and uses its configuration.
*   **`@total-typescript/tsconfig`:** A dependency that provides a base `tsconfig.json` for TypeScript projects.

**Installation:**

1.  Install the necessary dependencies:
    ```bash
    npm install -D vitest vite @total-typescript/tsconfig
    ```

**Configuration (`vite.config.js`):**

Create a `vite.config.js` file in the root of your project:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    typecheck: {
      enabled: true
    },
    globals: true,
    environment: "node"
  }
});
```

*   **`typecheck: { enabled: true }`:** This is a crucial setting that tells Vitest to perform type-checking during the test run.
*   **`globals: true`:** This makes the Vitest APIs (`describe`, `it`, `expect`, etc.) available globally in your test files.
*   **`environment: "node"`:** This specifies that the tests will be run in a Node.js environment.

**Writing Tests:**

The way you write tests is the same for both setups.

*   **File Naming:** Test files are typically named with a `.test.ts` or `.spec.ts` extension.
*   **Basic Structure:**
    ```typescript
    import { describe, it, expect } from 'vitest';
    import { myFunction } from './myFunction';

    describe('myFunction', () => {
      it('should do something', () => {
        const input = 'test';
        const expectedOutput = 'TEST';
        const result = myFunction(input);
        expect(result).toBe(expectedOutput);
      });
    });
    ```

*   **Key Functions:**
    *   `describe(name, fn)`: Creates a block that groups together several related tests.
    *   `it(name, fn)` or `test(name, fn)`: This is the test case itself.
    *   `expect(value)`: Creates an assertion. You chain this with "matcher" functions.

*   **Common Matchers:**
    *   `.toBe(value)`: Strict equality (`===`).
    *   `.toEqual(value)`: Deep equality for objects and arrays.
    *   `.toBeTruthy()` / `.toBeFalsy()`: Checks for truthiness or falsiness.
    *   `.toContain(item)`: Checks if an array or string contains an item.
    *   `.toThrow()`: Checks if a function throws an error.

**Running Tests:**

For both setups, you run the tests with the same command:

```bash
npm test
```

_See the readme file in the main branch for updated instructions and information._
## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

### Instructor

Eve Porcello

Software Developer and Instructor
                            

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/eve-porcello?u=104).

[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/scaling-typescript-for-enterprise-developers
[lil-thumbnail-url]: https://media.licdn.com/dms/image/D560DAQEeMPcfs0dGbw/learning-public-crop_675_1200/0/1722894799475?e=2147483647&v=beta&t=tqgy75zFHsjx6sVjBHTQRFtRBCkxiKUy1vm04UfqGqg