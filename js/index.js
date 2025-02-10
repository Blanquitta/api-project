//Fecth API artworks

const artWork = document.getElementsByClassName("art_Work");
const fetchArtWorksButton = document.getElementById("fetchArtWorks");
fetchArtWorksButton.addEventListener("click", () => {
  fetch("https://api.artic.edu/api/v1/artworks?limit=6")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      console.log(data); // Do something with the data

      const artworksList = document.getElementById("artworks-list");
      data.data.forEach((artwork) => {
        console.log(
          `Title: ${artwork.title}, Artist: ${artwork.artist_display}`
        );
        const artworkDiv = document.createElement("div");
        artworkDiv.classList.add("artwork");
        artworkDiv.innerText = `${artwork.title}${artwork.artist_display}`;
        const imageId = artwork.image_id;

        const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
        // "6c8c84df-ed3e-b50e-0862-ce4db7989821"
        console.log(imageUrl);
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = `Image of ${artWork.title}`;

        artworkDiv.appendChild(imgElement);
        artworksList.appendChild(artworkDiv);
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});
