window.onload = async ()=>{
    await fetchImage("berlin")
}

const fetchImage = async (query) => {

    url = `https://api.pexels.com/v1/search?query=${query}`
    token = "563492ad6f91700001000001db0656fe1de1488ba30ce95887e68d3d"
    try {
        response = await fetch(url, { headers: { Authorization: token } })
            .then((response) => {
                return response.json()


            })
            .then(data => {



                data.photos.forEach(element => {

                    let newInnerHtml = `<div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>`

                    document.getElementById("photos").innerHtml += newInnerHtml
                });



            })
    }
    catch (e) {
        console.log(e);
    }
}





