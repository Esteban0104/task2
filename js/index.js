const checkedOptions = [];

/* */
async function readJson() {
  const url = "./database/db.json";

  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

// /* */
async function getEventList() {
  const categories = [];
  const result = await readJson();
  const today = new Date().toISOString().split("T")[0];

  result.forEach((obj) => {
    obj.events.forEach((event) => {
      if (event.date < today) {
        categories.push(event);
      }
    });
  });

  // categories.includes(event.category);
  return categories;
}

async function generateCards(filters = []) {
  const result = await getEventList();
  const container = document.getElementById("containerCards");

  container.innerHTML = ``;

  if (filters.length === 0) {
    result.forEach((event) => {
      container.innerHTML += `<div class="col-4 ">
              <div class="card">
                <img src="${event.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                </div>

                <div class="card-body d-flex justify-content-around">
                    <span>Price $2000 </span>
                    <a href="details.html">
                    <button type="button" class="btn btn-primary">  Details</button>
                    </a>
                </div>
              </div>
            </div>`;
    });
  }

  result.forEach((event) => {
    if (filters.length !== 0) {
      filters.forEach((filter) => {
        if (event.category === filter) {
          container.innerHTML += `<div class="col-2 ">
            <div class="card">
              <img src="${event.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${event.name}</h5>
                  <p class="card-text">${event.description}</p>
              </div>

              <div class="card-body d-flex justify-content-around">
                  <span>Price $2000 </span>
                  <a href="details.html">
                  <button type="button" class="btn btn-primary">  Details</button>
                  </a>
              </div>
            </div>
          </div>`;
        }
      });
    }
  });
}

async function getUniqueCategories() {
  const result = await getEventList();
  const uniqueCategories = [];

  result.forEach((obj) => {
    if (!uniqueCategories.includes(obj.category)) {
      uniqueCategories.push(obj.category);
    }
  });

  return uniqueCategories;
}

async function generateFilterButtons() {
  const result = await getUniqueCategories();
  const container = document.getElementById("containerCategories");

  let fragment = new DocumentFragment();

  result.forEach((obj) => {
    const input = document.createElement("input");
    const label = document.createElement("label");
    const div = document.createElement("div");

    div.classList.add("form-check", "form-check-inline");

    input.type = "checkbox";
    input.value = obj;
    input.id = obj;
    input.classList = "form-check-input";
    div.appendChild(input);

    label.htmlFor = obj;
    label.innerText = obj;
    label.classList = "form-check-label";
    div.appendChild(label);

    fragment.appendChild(div);
  });

  container.appendChild(fragment);
}

containerCategories.addEventListener("click", async function (e) {
  const containerCategories = document.getElementById("containerCategories");

  if (e.target.value !== undefined) {
    if (e.target.checked) {
      checkedOptions.push(e.target.value);
    }

    if (!e.target.checked) {
      const index = checkedOptions.indexOf(e.target.value);
      checkedOptions.splice(index, 1);
    }
  }

  generateCards(checkedOptions);
});

/* */
document.addEventListener("DOMContentLoaded", function () {
  generateCards();
  generateFilterButtons();
});
