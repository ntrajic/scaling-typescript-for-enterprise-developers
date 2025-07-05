# Scaling TypeScript for Enterprise Developers

This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

_See the readme file in the main branch for updated instructions and information._

## Capstone Project - Part 2: Key Concepts  N. Trajic w. a little help of GeminiCLI

This capstone project brings together several fundamental TypeScript and Object-Oriented Programming (OOP) concepts to create a well-structured and type-safe `Hotel` class.

**Key Concepts Demonstrated:**

1.  **Classes:** The code defines a `Hotel` class, which acts as a blueprint for creating hotel objects. This encapsulates the data (properties) and behavior (methods) related to a hotel.
2.  **Properties and Methods:** The class has properties like `id`, `name`, and `cost` to store data, and methods like `addAmenity` and `describeHotel` to perform actions.
3.  **`readonly` Properties:** The `id` and `name` properties are marked as `readonly`. This is a key TypeScript feature that ensures these properties can only be assigned a value when the object is first created (in the constructor) and cannot be changed later. This is great for properties that should be immutable.
4.  **Constructor:** The `constructor` method initializes new instances of the `Hotel` class, setting the initial values for its properties.
5.  **Type Aliases and Literal Unions:** The `HotelCategory` type is a literal union (`"gold" | "silver" | "bronze"`). This is a powerful feature that restricts the `category` property to only one of these three specific strings, preventing errors from invalid category names.
6.  **Instantiation and Usage:** The code demonstrates how to create a new `Hotel` object (`const peakLodge = new Hotel(...)`), call its methods (`peakLodge.addAmenity(...)`), and use the output.

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

## Installing

1. To use these exercise files, you must have the following installed
   - Node.js 18+
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.

[0]: # "Replace these placeholder URLs with actual course URLs"
[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: http/

