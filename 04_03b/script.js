var getVideo = function (id) {
    return fetch("https://orangevalleycaa.org/api/videos/id/".concat(id))
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .then(function (data) {
        return data;
    });
};
getVideo("10").then(function (video) {
    console.log(video);
});
