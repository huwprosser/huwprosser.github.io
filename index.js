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

            let directoryName = directories[0].name;
            let file = `/posts/${directoryName}/index.html`;

            // read the file's title tag
            fetch(file)
                .then((response) => {
                    return response.text();
                })
                .then((html) => {
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(html, "text/html");
                    let title = doc.querySelector("title").innerText;
                    // get date using the post's meta tag
                    let date = doc.querySelector("meta[name='date']").content;

                    const listItem = document.createElement("li");
                    const postLink = document.createElement("a");
                    const span = document.createElement("span");

                    postLink.href = `/${DIR}/${directoryName}/`;
                    postLink.innerText = `${title}`;

                    span.classList.add("date");
                    span.innerText = ` ${new Date(date).toLocaleDateString(
                        "en-GB",
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    )}`;

                    listItem.appendChild(postLink);
                    listItem.appendChild(span);
                    postsList.appendChild(listItem);
                });

            // const posts = directories.map((directory) => {
            //     let title = directory.name.split("-").slice(3).join("-");
            //     let date = directory.name.split("-").slice(0, 3).join("-");

            //     const listItem = document.createElement("li");
            //     const postLink = document.createElement("a");

            //     postLink.href = `/${DIR}/${directory.name}/`;
            //     postLink.innerText = `${title.replace(/-/g, " ")}`;

            //     listItem.appendChild(postLink);

            //     let span = document.createElement("span");
            //     span.classList.add("date");
            //     span.innerText = ` (${date.replace(/-/g, "/")})`;

            //     listItem.appendChild(span);
            //     postsList.appendChild(listItem);
            // });

            return Promise.all(posts);
        })
        .catch((error) => console.error("Error fetching posts:", error));
});
