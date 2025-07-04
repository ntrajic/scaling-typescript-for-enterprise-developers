# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Debugging and Refactoring

In this exercise, we refactored the `script.ts` file to be more generic and reusable.

**Summary of Changes:**

The original code had repetitive loops for logging different types of creators. We replaced this with a single `logCreator` function that can handle any type of creator. This function checks for the existence of `authored`, `created`, `directed`, or `produced` arrays to determine the creator type and then logs the information. This makes the code more maintainable and easier to extend.

**Diff:**

```diff
--- a/script.ts
+++ b/script.ts
@@ -69,56 +69,17 @@
   producers
 };
 
-for (let creator of creators.authors) {
-  console.log(
-    `${creator.firstName} ${
-      creator.lastName
-    } is an author who wrote the books ${creator.authored.join(
-      ", "
-    )}`
-  );
-}
-
-for (let creator of creators.artists) {
-  console.log(
-    `${creator.firstName} ${
-      creator.lastName
-    } is an artist who created the albums ${creator.created.join(
-      ", "
-    )}`
-  );
-}
-
-for (let creator of creators.directors) {
-  console.log(
-    `${creator.firstName} ${
-      creator.lastName
-    } is a director who directed the movies ${creator.directed.join(
-      ", "
-    )}`
-  );
-}
-
-for (let creator of creators.producers) {
-  console.log(
-    `${creator.firstName} ${
-      creator.lastName
-    } is a producer who produced the movies ${creator.produced.join(
-      ", "
-    )}`
-  );
-}
-
-const filmCreators: Creator[] = [
-  ...directors,
-  ...producers
-];
-
-for (let creator of filmCreators) {
+function logCreator(creator: Creator) {
   let creatorType = "<unknown>";
   let created: string[] = [];
 
-  if (Array.isArray(creator.directed)) {
+  if (Array.isArray(creator.authored)) {
+    creatorType = "author";
+    created = creator.authored;
+  } else if (Array.isArray(creator.created)) {
+    creatorType = "artist";
+    created = creator.created;
+  } else if (Array.isArray(creator.directed)) {
     creatorType = "director";
     created = creator.directed;
   } else if (Array.isArray(creator.produced)) {
@@ -134,3 +95,9 @@
     )}`
   );
 }
+
+for (let creatorKey in creators) {
+  for (let creator of creators[creatorKey]) {
+    logCreator(creator);
+  }
+}

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