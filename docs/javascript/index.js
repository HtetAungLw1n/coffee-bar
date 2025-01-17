const coffeeGridSection = document.querySelector("#coffee-grid-section");
let mainHTML = "";

async function coffeeSection() {
  try {
    const response = await fetch("../../src/data.json");
    const data = await response.json();

    console.log(data);

    data.forEach((coffee) => {
      let html = `
        <a href="recipe.html?id=${coffee.id}" class="sm:min-w-80">
            <div class="bg-caramel card rounded-2xl w-full h-max overflow-hidden relative  hover:shadow-brown hover:shadow-2xl flex flex-col justify-center border-4 border-espresso">
                <img
                src="../images/${coffee.image}"
                class="h-80 w-max mx-auto object-cover"
                alt="#"
                />
                <div class="layer w-full h-full bg-cream absolute left-0 top-0">.</div>
                    <div class="pl-5 z-10">
                    <div class="name text-3xl font-semibold">${coffee.name}</div>
                    <div class="semi-name">click to see recipe</div>
                </div>
                <div class="arrow-top-right absolute top-5 right-5">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    >
                    <path
                    fill="currentColor"
                    d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"
                    />
                    </svg>
                </div>
            </div>
        </a>`;

      mainHTML += html;
    });
    coffeeGridSection.innerHTML = mainHTML;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

coffeeSection();
