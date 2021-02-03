const worksHTML = document.getElementById("works__grid");

class PrintContent {
  fetchData(data) {
    data.forEach((item) => {
      let itemHTML = this.print(item.title, item.thumbnail, item.type);
      worksHTML.innerHTML += itemHTML;
    });
  }

  print(title, thumbnail, type) {
    return `<div class="card">
              <img
                src="${thumbnail}"
                alt="${title}"
                title="${title}"
              />
              <div class="card__overlay">
                <div class="card__overlay--text">
                  <p>${title}</p>
                  <hr />
                  <span>${type}</span>
                </div>
              </div>
            </div>`;
  }
}

export default PrintContent;
