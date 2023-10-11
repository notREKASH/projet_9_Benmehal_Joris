document.addEventListener("DOMContentLoaded", function () {
  let lists = document.querySelectorAll(".list");
  lists.forEach(function (list) {
    list.addEventListener("click", function () {
      const dataValue = list.getAttribute("data-filter");
      let items = document.querySelectorAll(".gallery-item");
      if (dataValue === "all-items") {
        items.forEach(function (item) {
          item.style.display = "block";
        });
      } else {
        items.forEach(function (item) {
          if (!item.classList.contains(dataValue)) {
            item.style.display = "none";
          } else {
            item.style.display = "block";
          }
        });
      }
    });
  });
});

document.querySelectorAll(".list").forEach((list) => {
  list.addEventListener("click", function () {
    document.querySelectorAll(".list").forEach((sibling) => {
      sibling.classList.remove("active");
    });
    list.classList.add("active");
  });
});
