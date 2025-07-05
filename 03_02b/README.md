# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Key Concepts: Generic Types, N.Trajic w/ a little help of GeminiCLI

Generic types are one of the most powerful features in TypeScript. They allow you to write reusable code that can work with a variety of types, rather than being restricted to a single one.

**Use Cases and Key Points:**

1.  **Generic Functions:**
    *   **Example:** `function printCity<Type>(city: Type): void`
    *   **Explanation:** This function can accept an argument of *any* type. The `<Type>` is a placeholder for a type that will be specified when the function is called. When you call `printCity<string>("London")`, you're telling the function that `Type` is `string` for this specific call.
    *   **Key Point:** This allows you to create functions that are type-safe and flexible, without having to write a separate function for each type you want to support.

2.  **Generic Types and Interfaces:**
    *   **Example:** `type Country<Type> = { name: Type; capital: Type; };`
    *   **Explanation:** This creates a generic `Country` type. The properties `name` and `capital` will have whatever type is passed in as `Type`. In the example, `const country: Country<string> = ...`, we're creating a `country` object where `name` and `capital` must both be strings.
    *   **Key Point:** This is incredibly useful for creating data structures that can hold different types of data while still maintaining type safety. For example, you could have a `Country<number>` where the `name` and `capital` are represented by numerical codes.

**Overall, the key idea of generics is to create a "template" for a function, class, or type that can be used with different types, making your code more reusable and maintainable.**

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

