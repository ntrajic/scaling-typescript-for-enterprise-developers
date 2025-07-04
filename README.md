# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Capstone Project 4: Modularization and Testing

In this capstone, we've modularized our code and added unit tests using Jest to verify the new structure.

**Key Steps:**

1.  **Modularization:**
    *   Guest-related types (`Guest`, `Skier`, `SpaEnthusiast`, `Foodie`, `ThrillSeeker`, `GuestWithActivity`) were moved to `guests.ts`.
    *   Activity-related code (`Activity` interface, `skiLesson`, `cookingClass`, `massage`) was moved to `activities.ts`.
    *   Necessary types are exported from `guests.ts` and imported into `activities.ts`.
2.  **Jest Installation:** We installed `jest`, `@types/jest`, and `ts-jest` to enable testing of our TypeScript code.
3.  **Jest Configuration:** A `jest.config.js` file was created to configure Jest to use the `ts-jest` preset.
4.  **Test Script:** An npm script, `"test": "jest"`, was added to `package.json` for easy test execution.
5.  **Unit Tests:** A test file, `capstone.test.ts`, was created to house the unit tests for the new modularized code.

**Test Cases:**

The following test cases were implemented to verify the functionality of the modularized code:

*   `should have a ski lesson with the correct attendees`
*   `should have a cooking class with the correct attendees`
*   `should have a massage with the correct attendees`

All tests are passing, ensuring the modularized code is working as expected.

```bash
PASS ./capstone.test.ts
PASS ./script.test.ts

Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        2.514 s, estimated 4 s
Ran all test suites.
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