# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Key Concepts: Modules in TypeScript, N.Trajic w/ little help of GeminiCLI

This exercise demonstrates the fundamentals of creating and using modules in TypeScript. By splitting the code into multiple files, we can create more organized, reusable, and maintainable codebases.

**Key Concepts from `city.ts` (The Module):**

1.  **`export type City = { ... };`**: This line exports a type alias named `City`. The `export` keyword makes this type available to other files that import from `city.ts`.
2.  **`export function formatCity(...)`**: This line exports a function named `formatCity`. This function can now be imported and used in other parts of the application.

**Key Concepts from `script.ts` (The Consumer):**

1.  **`import { formatCity, type City } from "./city.js";`**: This is the import statement.
    *   `{ formatCity, type City }`: This is a "named import". It specifies exactly which exports from `"./city.js"` we want to use.
    *   `type City`: The `type` keyword here is a TypeScript 4.5+ feature. It indicates that we are only importing the *type* information for `City`. This is a good practice because it allows bundlers and other tools to optimize the code better, as they know that the `City` import is only used for type checking and can be completely removed from the final JavaScript output.
    *   `"./city.js"`: This is the path to the module. It's important to note that even though we are importing from a `.ts` file, the path in the import statement should be the *compiled* `.js` file. This is because the browser and Node.js only understand JavaScript, so the import paths need to point to the files that will actually be executed.

**Overall, this exercise demonstrates the standard way of creating and consuming modules in TypeScript. By using `export` to make types and functions available and `import` to consume them, you can build large and complex applications from small, reusable pieces.**

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

