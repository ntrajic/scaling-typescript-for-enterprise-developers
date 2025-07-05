# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Key Concepts: Namespaces in TypeScript, N.Trajic w/ a little help of GenminiDLI

This exercise introduces **namespaces**, which are a way to organize and group related code. In an enterprise environment, this is particularly useful for preventing naming conflicts and for creating a clear and logical structure for your code.

**Key Concepts from `city.ts`:**

*   **`export namespace Cities { ... }`**: This creates a namespace called `Cities`. All of the code inside the curly braces is now part of this namespace.
*   **`export type City = { ... };`**: Inside the namespace, the `City` type is exported. This makes it accessible to code outside the namespace, but it must be accessed *through* the namespace (e.g., `Cities.City`).
*   **`export function formatCity(...)`**: Similarly, the `formatCity` function is exported from the `Cities` namespace.

**Key Concepts from `script.ts`:**

*   **`import { Cities } from "./city.js";`**: This imports the entire `Cities` namespace.
*   **`const city: Cities.City = { ... };`**: To use the `City` type, we now have to prefix it with the namespace, `Cities.`.
*   **`console.log(Cities.formatCity(city));`**: The same is true for the `formatCity` function.

**Key Points for Enterprise Environments:**

*   **Organization:** Namespaces are a great way to group related code. For example, you could have a `Validation` namespace that contains all of your validation functions, or a `UI` namespace that contains all of your UI components.
*   **Preventing Naming Conflicts:** In a large enterprise application, it's very likely that you will have multiple types or functions with the same name. Namespaces prevent these from colliding with each other. For example, you could have a `UI.Button` and a `Forms.Button`, and they would not conflict.
*   **Readability and Maintainability:** By grouping related code, namespaces make it easier to understand and maintain your codebase. When you see `Cities.formatCity`, it's immediately clear that this function is related to cities.
*   **Avoiding Global Scope Pollution:** Before modules and namespaces, it was common to have a lot of global variables and functions, which could lead to conflicts and make it hard to reason about your code. Namespaces help to avoid this by creating a single object that contains all of your related code.

**In summary, namespaces are a powerful tool for organizing your code and preventing naming conflicts, which is especially important in large, enterprise-scale applications.**

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

