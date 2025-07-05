# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Key Concepts: Composing APIs, N.Trajic w/ a little help of GeminiCLI

This exercise demonstrates how to compose more complex types from simpler ones, a technique that is at the heart of building scalable and maintainable APIs in TypeScript.

**Use Cases and Key Points:**

1.  **Base Interfaces:**
    *   **Example:** `interface Person { name: string; occupation: string; }`
    *   **Explanation:** This is a base interface that defines the common properties of a person. It serves as a foundation for more specific types.

2.  **Intersection Types (`&`):**
    *   **Example:** `type Architect = Person & { occupation: "Architect" };`
    *   **Explanation:** This creates a new type `Architect` by combining the `Person` interface with a new literal type. The `&` operator creates an intersection type, which means that an `Architect` must have all the properties of `Person` *and* an `occupation` property that is the literal string `"Architect"`.
    *   **Key Point:** This is a powerful way to create more specific types from general ones without having to repeat the common properties. It's a form of "composition over inheritance" for types.

3.  **Generic Interfaces:**
    *   **Example:** `interface Civilization<NotablePeopleType>`
    *   **Explanation:** This is a generic interface that can work with any type of "notable people". The `NotablePeopleType` is a placeholder that will be filled in when the interface is used.
    *   **Key Point:** This allows you to create a flexible data structure that can be used with different types of people. For example, you could have a `Civilization<Architect>` or a `Civilization<Pharaoh>`.

**Overall, this exercise shows how to build up complex types from simpler pieces. By using base interfaces, intersection types, and generics, you can create a rich and expressive type system that accurately models your data and helps you write more robust code.**

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
