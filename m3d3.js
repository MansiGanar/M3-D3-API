const fetchImage = async (query) => {
  url = `https://api.pexels.com/v1/search?query=${query}`;
  token = "563492ad6f917000010000011709b368677f4e3ca0f0c47c86421294";
  try {
    response = await fetch(url, { headers: { Authorization: token } })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let x = data["photos"];

        const photosContainer = document.getElementById("photos");
        photosContainer.innerHTML = "";
        console.log(data.photos);

        x.forEach((element) => {
          console.log(element.url);

          console.log(photosContainer);

          let newInnerHtml = `<div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="${element.src.medium}">
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
          </div>`;

          photosContainer.innerHTML += newInnerHtml;
        });
      });
  } catch (e) {
    console.log(e);
  }
};
