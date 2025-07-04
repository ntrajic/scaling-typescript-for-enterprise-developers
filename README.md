# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Key Concepts: Conditional Types

This exercise introduces **conditional types**, which are a powerful tool for creating types that depend on a condition.

*   **Conditional Types:** A conditional type has the form `T extends U ? X : Y`. It checks if a type `T` extends another type `U`. If it does, the type is `X`; otherwise, it's `Y`.
*   **`GuestWithActivity<GuestType>`**: This is the core of the example.
    *   `GuestType extends Guest ? GuestType : never`: This checks if the `GuestType` extends the `Guest` interface. If it does, the type is `GuestType`; otherwise, it's `never`. The `never` type is a special type that represents a value that will never occur.
    *   **Purpose:** This conditional type is used to ensure that only types that are compatible with the `Guest` interface can be used as attendees for an `Activity`. This is a way of adding a constraint to a generic type.
*   **`Activity<GuestWithActivity<...>>`**: This shows how the conditional type is used in practice. The `Activity` interface is now guaranteed to have attendees that are valid `Guest` types.

**Overall, this exercise demonstrates how to use conditional types to create more constrained and type-safe generic types.**  
N. Trajic w/ littler help of GeminiCLI: Additional jest testing against REQUIREMNTS of the Capsonte 3 - all are satisfied

✔  Shell npm test (Running the Jest test suite again with the moduleNameMapper option.)                                                                                    │
 │                                                                                                                                                                            │
 │                                                                                                                                                                            │
 │    > 00_03b@1.0.0 test                                                                                                                                                     │
 │    > jest                                                                                                                                                                  │
 │                                                                                                                                                                            │
 │      console.log                                                                                                                                                           │
 │        The silver category Peak Lodge costs 250 and includes the following amenities: breakfast, wifi.                                                                     │
 │                                                                                                                                                                            │
 │          at Object.<anonymous> (script.ts:107:9)                                                                                                                           │
 │                                                                                                                                                                            │
 │    PASS ./solution.test.ts                                                                                                                                                 │
 │      Conditional Types Solution                                                                                                                                            │
 │        ✓ skiLesson should have the correct structure and attendees (3 ms)                                                                                                  │
 │        ✓ cookingClass should only have Foodie attendees (1 ms)                                                                                                             │
 │        ✓ massage should only have SpaEnthusiast attendees (1 ms)                                                                                                           │
 │        ✓ GuestWithActivity should correctly filter types                                                                                                                   │
 │                                                                                                                                                                            │
 │    Test Suites: 1 passed, 1 total                                                                                                                                          │
 │    Tests:       4 passed, 4 total                                                                                                                                          │
 │    Snapshots:   0 total                                                                                                                                                    │
 │    Time:        3.96 s                                                                                                                                                     │
 │    Ran all test suites.                                                                                                                                                    │
 │                                                                                                                                                                            │
 ╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
✦ Excellent! All test cases have passed.

  To summarize, I have:


   1. Analyzed the 03_07e solution and updated the README.md with the key concepts of conditional types.
   2. Copied the solution to the 03_07b branch.
   3. Created a new test file, solution.test.ts, with test cases that cover the functionality of the solution.
   4. After some troubleshooting with the Jest and TypeScript configuration, I was able to get the tests to run successfully.


  All test cases have passed, so we can be confident that the code is working as expected.

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

