# Scaling TypeScript for Enterprise Developers
This is the repository for the LinkedIn Learning course Scaling TypeScript for Enterprise Developers. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Looking to elevate your coding skills from simple type annotations to sophisticated data modeling and API integration? Join instructor Eve Porcello to boost your understanding of TypeScript's core principles, such as classes and interfaces as well as complex concepts like generics and utility types. Learn to construct robust and type-safe applications by managing code structure through namespaces, modules, and data models. Gain practical experience with hands-on coding capstone projects that simulate real-world programming challenges. Learn how to write cleaner, more efficient code as well as how to debug, test, and automate projects using tools like Vitest and VS Code. Whether you're a developer looking to transition to TypeScript, enhance your existing skills, or a student eager to explore typed JavaScript, this course offers valuable insights and skills that can help you become a proficient TypeScript developer.

### Key Concepts: Creating Data Models with TypeScript

This exercise demonstrates how to create a data model for data that is fetched from an API. By using interfaces, `async/await`, and promises, you can create a type-safe and maintainable data layer for your application.

**Inferred TypeScript Code:**

```typescript
interface Video {
    id: string;
    video_url: string;
    name: string;
    description: string;
    duration: string;
    created_by: string;
    image: string;
    thumbnail: string;
    cropped: string;
    file_name_original: string;
    popularity: string;
    category_id: string;
    category: string;
    keywords: string;
}

const getVideo = (id: string): Promise<Video> => {
    return fetch(`https://orangevalleycaa.org/api/videos/id/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            return data as Video;
        });
};

getVideo("10").then(video => {
    console.log(video);
});
```

**Key Concepts:**

*   **Interfaces:** The `Video` interface defines the shape of the data that we expect to get from the API. This is a crucial part of creating a data model, as it provides a clear and explicit definition of the data structure.
*   **`fetch`:** The `getVideo` function is designed to retrieve data for a specific video from the API.
*   **`Promise<Video>`:** The `getVideo` function returns a `Promise<Video>`, which means it's a promise that will eventually resolve to a `Video` object. This is a great example of how to use generics to create type-safe asynchronous code.
*   **Error Handling:** The code includes basic error handling to check if the network response was successful. In a real-world application, you would want to have more robust error handling, but this is a good starting point.

**Overall, this exercise demonstrates how to create a data model for data that is fetched from an API. By using interfaces, `async/await`, and promises, you can create a type-safe and maintainable data layer for your application.**

@ntrajic ➜ /workspaces/scaling-typescript-for-enterprise-developers (04_03b) $ node script.js <enter>
{
  id: '10',
  video_url: 'http://orangevalleycaa.org/api/media/videos/UnderwaterPhotoMusic_062314189.mp4',
  name: 'The Marvels of Underwater Photography',
  description: "Underwater photography is a physically and mentally demanding art form, where the artist gets a fascinating glimpse into a rarely seen world.  Local photographer, Dennis Lipton, has been a leader in this field for 20 years. His photos have been published in National Geographic, American Scientific, Omni, and many more, and he's been showcased at MoMA and the Smithsonian.  Orange Valley Community Arts Association is happy to showcase this documentary that explores the growing field of underwater ",
  duration: '00:00:06',
  created_by: 'Earth and Art Productions',
  image: 'http://orangevalleycaa.org/api/media/images/UnderwaterPhoto_062314189.png',
  thumbnail: 'http://orangevalleycaa.org/api/media/images/thumbs/UnderwaterPhoto_062314189.png',
  cropped: 'http://orangevalleycaa.org/api/media/images/cropped/UnderwaterPhoto_062314189.png',
  file_name_original: 'underwater photo_062314189_MUSIC.mp4',
  popularity: '7',
  category_id: '1',
  category: 'Art',
  keywords: 'diving,nature,ocean,photography,scuba,sea,underwater'
}

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

