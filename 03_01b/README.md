# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Key Concepts: `tsconfig.json` and Declaration Files     B.Trajic instructed GeminCLI

*   **Creating `tsconfig.json`**: This file is the configuration file for a TypeScript project. It allows you to control how the compiler behaves. You can create one by running `npx tsc --init`. This will generate a `tsconfig.json` file with a lot of commented-out options that you can customize.

*   **`@total-typescript/tsconfig`**: This is a package that provides a set of pre-configured `tsconfig.json` files for common scenarios (e.g., a web app, a Node.js library). It simplifies the process of setting up a `tsconfig.json` file by allowing you to extend a base configuration that is already optimized for your use case. You would use it like this in your `tsconfig.json`: `"extends": "@total-typescript/tsconfig/bundler/dom/app"`.

*   **Declaration Files (`.d.ts`)**: These are special files in TypeScript that don't contain any code. Instead, they contain *type definitions*. Their purpose is to describe the shape of JavaScript code to TypeScript. This is how TypeScript can understand JavaScript libraries that weren't written in TypeScript. For example, if you use a JavaScript library that has a function called `doSomething`, a `.d.ts` file would tell TypeScript what arguments `doSomething` expects and what it returns. This is what allows you to get type checking and autocompletion for JavaScript code.

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

