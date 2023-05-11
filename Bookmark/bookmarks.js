const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

// toggle bookmark icon for all bookmarks
for (const bookmark of bookmarks) {
  bookmark.addEventListener("click", (event) => {
    bookmark.classList.toggle("--bookmarked");
  });
}
