let thumbnails;
let filteredThumbnails = [];

document.addEventListener("DOMContentLoaded", function () {
  thumbnails = document.querySelectorAll(".thumbnail");
  filteredThumbnails = Array.from(thumbnails);

  document.querySelectorAll(".list").forEach((list) => {
    list.addEventListener("click", function () {
      document.querySelectorAll(".list").forEach((sibling) => {
        sibling.classList.remove("active");
      });
      list.classList.add("active");

      const dataValue = list.getAttribute("data-filter");
      let items = document.querySelectorAll(".gallery-item");
      if (dataValue === "all-items") {
        filteredThumbnails = Array.from(thumbnails);
        items.forEach((item) => (item.style.display = "block"));
      } else {
        filteredThumbnails = Array.from(items).filter((item) =>
          item.classList.contains(dataValue)
        );
        items.forEach((item) => {
          if (!item.classList.contains(dataValue)) {
            item.style.display = "none";
          } else {
            item.style.display = "block";
          }
        });
      }
    });
  });

  const fullscreenContainer = document.getElementById("fullscreen-background");
  const fullscreenImage = document.getElementById("fullscreen-image");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  let currentIndex = 0;

  filteredThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      const imgSrc = thumbnail.src;

      fullscreenImage.src = imgSrc;
      fullscreenImage.alt = thumbnail.alt;
      fullscreenContainer.style.display = "block";
      currentIndex = index;
    });
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = filteredThumbnails.length - 1;
    }
    const currentElement = filteredThumbnails[currentIndex];
    const imgElement = currentElement.querySelector("img");
    if (imgElement) {
      fullscreenImage.src = imgElement.src;
    } else {
      fullscreenImage.src = filteredThumbnails[currentIndex].src;
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < filteredThumbnails.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    const currentElement = filteredThumbnails[currentIndex];
    const imgElement = currentElement.querySelector("img");
    if (imgElement) {
      fullscreenImage.src = imgElement.src;
    } else {
      fullscreenImage.src = filteredThumbnails[currentIndex].src;
    }
  });

  fullscreenContainer.addEventListener("click", (e) => {
    if (e.target.id === "fullscreen-background") {
      fullscreenContainer.style.display = "none";
    }
  });
});
