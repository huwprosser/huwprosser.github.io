document.addEventListener("DOMContentLoaded", function () {
    const USER = "huwprosser";
    const REPO = "huwprosser.github.io";
    const DIR = "posts";
    const API_ENDPOINT = `https://api.github.com/repos/${USER}/${REPO}/${DIR}`;

    fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((directories) => {
            const postsList = document.querySelector("ul");
            postsList.innerHTML = ""; // Clear the list first

            const postPromises = directories.map((directory) => {
                return fetch(directory.git_url)
                    .then((response) => response.json())
                    .then((data) => {
                        const content = atob(data.content); // Decode base64 content
                        const titleMatch = content.match(
                            /<title>([^<]+)<\/title>/
                        ); // Extract title from content

                        if (titleMatch && titleMatch[1]) {
                            const listItem = document.createElement("li");
                            const postLink = document.createElement("a");

                            postLink.href = `/${DIR}/${directory.name}/`;
                            postLink.innerText = titleMatch[1];

                            listItem.appendChild(postLink);
                            postsList.appendChild(listItem);
                            console.log(`Added post: ${titleMatch[1]}`);
                        }
                    });
            });

            return Promise.all(postPromises);
        })
        .catch((error) => console.error("Error fetching posts:", error));
});
