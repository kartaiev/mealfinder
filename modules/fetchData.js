define(["dojo/request"], (request) => {
  return {
    getMeals: (url) => {
      return request.get(url, {
        headers: {
          "X-Requested-With": null,
        },
        handleAs: "json",
      });
    },
  };
});
