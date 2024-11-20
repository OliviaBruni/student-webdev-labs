const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const addBookToDOM = (book) => {
  let container = document.createElement("div");
  let title = document.createElement("h2");
  let author = document.createElement("p");
  let release = document.createElement("p");
  let pageCount = document.createElement("p");

  title.textContent = book.name;
  author.textContent = "by " + book.authors[0];
  release.textContent = book.released.slice(0, 4);
  pageCount.textContent = book.numberOfPages + " pages";

  container.append(title);
  container.append(author);
  container.append(release);
  container.append(pageCount);

  app.append(container);
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => {
        addBookToDOM(book);
      });
      let loader = document.getElementById("loading");
      app.removeChild(loader);
    })
    .catch((error) => {
      console.error(error);

      let element = document.createElement("div");
      element.textContent = "An error occured. Please reload the page.";
      app.append(element);

      let loader = document.getElementById("loading");
      app.removeChild(loader);
    });
};

fetchData(url);
