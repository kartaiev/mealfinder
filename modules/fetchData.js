define([], () => {
  return {
    getMeals: (val, node, srch) => {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          node.innerHTML = data.meals
            .map(
              (meal) => `
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
         
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
          `
            )
            .join("");
        });
      srch.value = "";
    },
  };
});
