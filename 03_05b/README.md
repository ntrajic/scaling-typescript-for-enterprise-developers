# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Key Concepts: Annotations and Mapped Types

**Role of Annotations in TypeScript:**

In TypeScript, "annotations" are the explicit type declarations you add to your code. For example, in `const oakData: Tree`, the `: Tree` part is the type annotation. Their primary role is to tell the TypeScript compiler what the type of a variable, function parameter, or function return value is supposed to be. This is the foundation of TypeScript's static type checking, which helps you catch errors before you even run your code.

**Use Case: Mapped Types with Key Remapping**

This exercise introduces a very powerful feature of TypeScript's type system: **mapped types with key remapping**. This allows you to create new types by transforming the keys of an existing type.

*   **`type TreeDetails<Type> = { ... }`**: This is a generic mapped type. It takes a type `Type` as input and creates a new type.
*   **`[Key in keyof Type as `get${Capitalize<string & Key>}`]`**: This is the core of the key remapping.
    *   `Key in keyof Type`: This iterates over each key of the input type `Type`.
    *   `as `get${Capitalize<string & Key>}``: This is the remapping part. For each key, it creates a new key by taking the original key, capitalizing it, and prepending "get". For example, `name` becomes `getName`.
*   **`: () => Type[Key]`**: This defines the type of the value for each new key. It's a function that takes no arguments and returns the type of the original key's value.

**In simple terms, the `TreeDetails` type takes a type like `Tree` and creates a new type with getter methods for each of its properties.**

**Key Points:**

*   **Mapped Types:** Mapped types allow you to create new types by transforming the properties of an existing type.
*   **Key Remapping:** This is a feature of mapped types that allows you to change the names of the keys in the new type.
*   **`Capitalize<T>`:** This is a built-in TypeScript utility type that capitalizes the first letter of a string literal type.
*   **Template Literal Types:** The `` `get${...}` `` syntax is a template literal type, which allows you to create new string literal types by combining other types.

**Overall, this exercise demonstrates how to use advanced type-level programming in TypeScript to create new types from existing ones in a very powerful and flexible way.**

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

