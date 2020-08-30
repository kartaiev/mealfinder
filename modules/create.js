define(["modules/fetchData"], (fetchData) => {
  return {
    createMeals: (value, node1, node2) => {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
      node1.innerHTML = `<h2>Search results for ${value}:</h2>`;

      fetchData.getMeals(url).then(({ meals }) => {
        node2.innerHTML = meals
          .map(
            (meal) => `
              <div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class="meal-info" data-mealID="${meal.idMeal}">
                  <h3 class="meal-title">${meal.strMeal}</h3>
                </div>
              </div>
            `
          )
          .join("");
      });
    },
    createSingleMeal: (id, node1, node2) => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

      fetchData.getMeals(url).then(({ meals }) => {
        const meal = meals[0];
        console.log(meal);
        node1.innerHTML = `<h2>${meal.strMeal} recipe:</h2>`;
        node2.innerHTML = `
          <div class="meal">
            <img src="${meal.strMealThumb}"/>
          </div>
          <div class="recipe-info">
            ${meal.strCategory ? `<p>Category: ${meal.strCategory}</p>` : ""}
            ${meal.strArea ? `<p>Area: ${meal.strArea}</p>` : ""}
          </div>
        <div class="recipe-discription">
          <p>${meal.strInstructions}</p>
        </div>
        `;
      });
    },
  };
});
