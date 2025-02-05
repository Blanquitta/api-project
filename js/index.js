
// Get repositories from github
fetch("https://api.github.com/users/Blanquitta/repos")
    .then((res) => {
        return res.json();

    })
    .then((repositories) => {

        //Add repositories to DOM 
        console.log("repositories:", repositories);
        //DOM selectors 
       


    })
    .catch((error) => {
         
        console.log(error);
    }
    )
    //  //create a fetch for artic
    // const searchWord = data.get("searchWord");
    // console.log (searchWord);

    const userName = "artic";
     const searchurl = "https://api.artic.edu/api/v1/artworks/126511"  
     fetch('https://api.artic.edu/api/v1/artworks/75644?fields=id,title,image_id,alt_image_ids')
     .then(response => response.json())
    .then(data => {
        const imgContainer = document.getElementById('img-container');
        data.forEach(item => {
            const img = document.createElemte('img');
            img.src = item.imageUrl;
            imgContainer.appendChild(img);
            console.log(data);
        })
     })
     fetch(searchurl)
     .then(response => {
     

    if(!response.ok) {
        throw new Error("Requeste Failed");
    }
    return response.json() 

    
})
    // Artwork created
    .then((data ) => {
        // Get artwork list
        console.log(data);
        const artworkList = [data];

        console.log(artworkList);
        console.log("length =", artworkList.length);
        // If artwork no found, default artimage
        if (length == 0) {
            artworkList[0].id = 129884;
        }
    
        // //Array get a valid artworkimage id
        // const randomInt = Math.floor(math.random() + artworkList.length);
        // const randomId = artworkList[randomInt].id;
        // console.log(randomId);

})
        const url =` https://api.artic.edu/api/v1/artworks/${randomId}`;
        //Fetch url
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("request failed");


            }
            return response.json(); //Define the answer JSON

    })

//Art retrieved
.then((data) => {
    //Display  information about
    console.log(data);
    const artwork =data.data;
    console.log(artworkList);
    const title = artwork.title;
    console.log(artwork.title);
    const artistTitle = artwork.artist_title;
    console.log(artistTitle);
    const artworkDescription = artwork.artworkDescription;
    console.log(artworkDescription);
    const departmentTtle = artwork.departmen_title;
    console.log(departmentTtle);
    const ArtworkImageId =artwork.Image_Id;
    console.log(artworkImageId);

})

// Put title to html
const artworkTtitle = document.getElementById("artworkTitleId");
console.log(artworkTtitle);
artworkTtitle.innerHTML =`title: ${title}`;
 
//If imformation is true add it
 if (artistTitle != null) {
    const artistTitleElemet =document.getElementById("artistTitleId");
    console.log(artistTitleElemet);
    artistTitleElemet.innerHTML = `Artist:${artistTitle}`;
 }
    // If departemtTiltle
    if (artworkDescription != null) {
        const artworkDescriptionElement = document.getElementById(
            "artworkDescriptionId"
        );
        console.log(artworkDescriptionElement);
        artworkDescriptionElement.innerHTML ='Description ${artworkDescription}';
    }
        //If department title is available, then add to HTML

        if (departmentTitle  != null) {
        const departmenTitleElement = document.getElementById(
            "departmentListId");
        console.log(departmentTtitleElement);
        departmentTitleElement.innerHTML =`Department Title: ${departmentList}`;

        }


    
     artworkSrcString = 'https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg';
     console.log(artworkSrcString);