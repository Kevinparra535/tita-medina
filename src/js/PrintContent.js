class PrintContent {
  fetchData(data) {
    data.forEach((item) => {
      let itemHTML = this.PrintContent(item.title, item.thumbnail, item.type);
      console.log(itemHTML);
      document.querySelector(".works__grid").innerHTML = itemHTML;
    });
  }

  PrintContent(title, thumbnail, type) {
    return `<div class="card">
            <img
              src='${thumbnail}'
              alt=${title}
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
