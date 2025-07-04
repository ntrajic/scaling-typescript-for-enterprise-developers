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