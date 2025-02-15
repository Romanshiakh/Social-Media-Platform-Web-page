document.getElementById("sendButton").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const fileInput = document.getElementById("file");
    const profileComment = document.getElementById("profileComment").value;
    const postsContainer = document.getElementById("posts");

    if (profileComment.trim() === "") {
        alert("Comment cannot be empty!");
        return;
    }

    const postDiv = document.createElement("div");
    postDiv.className = "bg-white shadow-md rounded-lg p-5";

    const postText = document.createElement("p");
    postText.textContent = profileComment;
    postDiv.appendChild(postText);

    const likeButton = document.createElement("button");
    likeButton.className = "bg-green-500 text-white px-2 py-1 rounded mr-2";
    likeButton.textContent = "Like";
    postDiv.appendChild(likeButton);

    const userDetailsButton = document.createElement("button");
    userDetailsButton.className =
        "bg-yellow-500 text-white px-2 py-1 rounded mr-2";
    userDetailsButton.textContent = "User Details";
    postDiv.appendChild(userDetailsButton);

    const likeCount = document.createElement("span");
    likeCount.className = "ml-2";
    likeCount.textContent = "0 Likes";
    postDiv.appendChild(likeCount);

    const userDetailsSection = document.createElement("div");
    userDetailsSection.className = "mt-2 hidde-n";
    userDetailsSection.innerHTML = `<p><strong>Username:</strong> ${username}</p>
                                            <p><strong>File:</strong> ${fileInput
                                                .files.length > 0
                                                ? fileInput.files[0].name
                                                : "No file selected"}</p>
                                            <p><strong>Comment:</strong> ${profileComment}</p>`;
    postDiv.appendChild(userDetailsSection);

    postsContainer.appendChild(postDiv);

    // Clear profile comment textarea
    document.getElementById("profileComment").value = "";
    alert("Comment posted successfully!");

    // Like button click event
    likeButton.addEventListener("click", () => {
        let count = parseInt(likeCount.textContent.split(" ")[0]);
        likeCount.textContent = `${++count} Likes`;
    });

    // User Details button click event
    userDetailsButton.addEventListener("click", () => {
        userDetailsSection.classList.toggle("hidden");
    });
});

document.getElementById("likeButton").addEventListener("click", () => {
    const likeCountElement = document.getElementById("likeCount");
    let likeCount = parseInt(likeCountElement.textContent.split(" ")[0]);
    likeCountElement.textContent = `${++likeCount} Likes`;
});
