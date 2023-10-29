document.addEventListener("DOMContentLoaded", function () {
    const USER = "huwprosser";
    const REPO = "huwprosser.github.io";
    const DIR = "posts";
    const API_ENDPOINT = `https://api.github.com/repos/${USER}/${REPO}/contents/${DIR}`;

    fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((directories) => {
            const postsList = document.querySelector("ul");
            postsList.innerHTML = "";

            const posts = directories.map((directory) => {
                let title = directory.name.split("-").slice(3).join("-");
                let date = directory.name.split("-").slice(0, 3).join("-");

                const listItem = document.createElement("li");
                const postLink = document.createElement("a");

                postLink.href = `/${DIR}/${directory.name}/`;
                postLink.innerText = `${title.replace(/-/g, " ")}`;

                listItem.appendChild(postLink);

                let span = document.createElement("span");
                span.classList.add("date");
                span.innerText = ` (${date.replace(/-/g, "/")})`;

                listItem.appendChild(span);
                postsList.appendChild(listItem);
            });

            return Promise.all(posts);
        })
        .catch((error) => console.error("Error fetching posts:", error));
});
