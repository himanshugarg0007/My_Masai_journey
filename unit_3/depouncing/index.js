document.getElementById("movie").addEventListener("input", () => {
  let query = document.getElementById("movie").value;
  setTimeout(() => {
    init(query);
  }, 1000);
});
let init = async (query) => {
  try {
    let res = await fetch(
      `http://www.omdbapi.com/?apikey=dcedc02a&s=${query}`
    );
    let data = await res.json();
    print(data.Search);
  } catch (error) {
    console.log(error);
  }
};
let print = (data) => {
  let mainbox = document.getElementById("main");
  mainbox.innerHTML = "";
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "card";

    let m_poster = document.createElement("img");
    m_poster.src = ele.Poster;

    let m_title = document.createElement("h2");
    m_title.textContent = ele.Title;

    let m_year = document.createElement("p");
    m_year.textContent = ele.Year;

    let m_imdbid = document.createElement("p");
    m_imdbid.textContent = ele.imdbID;

    let type = document.createElement("p");
    type.textContent = ele.Type;

    card.append(m_poster, m_title, m_year, type, m_imdbid);
    mainbox.append(card);
  });
};
