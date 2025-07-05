# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Key Concepts: Partial Mapped Types

This exercise builds on the previous one by introducing the concept of **partial mapped types**. This is a way to create a new type where all of the properties of the original type are optional.

**Use Case in `script.ts`:**

*   **`type PartialTree<Type> = { [Key in keyof Type]+?: Type[Key]; };`**: This is the core of the example.
    *   `[Key in keyof Type]` iterates over all the keys of the input type `Type`.
    *   `+?`: This is the "mapped type modifier". The `+` is the default, but the `?` makes the property optional.
    *   `Type[Key]`: This is the type of the property.
*   **`type PartialOak = PartialTree<Tree>;`**: This creates a new type `PartialOak` where all the properties of `Tree` (`name`, `height`, and `age`) are optional.
*   **`let partialOak: PartialOak = { name: "Oak" };`**: This demonstrates that you can create an object of type `PartialOak` with only some of the properties of `Tree`.

**Key Points:**

*   **Partial Mapped Types:** This is a powerful way to create a new type where all of the properties of the original type are optional. This is very useful when you want to create an object that only has some of the properties of another type, for example, when you are updating an object and only want to provide the properties that are changing.
*   **Mapped Type Modifiers:** The `+?` is a "mapped type modifier". You can also use `-?` to remove the optional modifier from a property.
*   **`Partial<T>` Utility Type:** TypeScript has a built-in utility type called `Partial<T>` that does exactly what the `PartialTree` type in this example does. It's a good practice to use the built-in utility types when they are available, as they are well-tested and make your code more readable.

**Overall, this exercise shows how to use mapped types to create new types with optional properties, which is a very common and useful pattern in TypeScript.**

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

