const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

for (const bookmark of bookmarks) {
  bookmark.addEventListener("click", (event) => {
    bookmark.classList.toggle("--bookmarked");
  });
}
