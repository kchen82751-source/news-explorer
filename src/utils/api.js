const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

// const url = `https://api.movies.example/search?q=${query}&apiKey=${apiKey}&from=${formatDate(pastDate)}&to=${formatDate(today)}&pageSize=20;

// const newsApiBaseUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=a1f095e685f84390a0b6fdcbbb3bbba5&pastDate=2026-9-10&today=2026-9-17&pageSize=100

const today = "2026-9-17";

const pastDate = "2026-9-10";

const pageSize = "100";

const Url = "https://newsapi.org/v2/everythingq";

const apiKey = "a1f095e685f84390a0b6fdcbbb3bbba5";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getNews = (query) => {
  return fetch(
    `${newsApiBaseUrl}?q=${query}&apiKey=${apiKey}&pastDate=${pastDate}&today=${today}&pageSize=${pageSize}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  ).then(handleServerResponse);
};

export const filterNewsData = (data) => {
  const result = {};
  result.search = data.name;
  result.news = {
    F: Math.round(data.main.news),
    C: Math.round(((data.main.news - 32) * 5) / 9),
  };
  result.type = getNewsType(result.news.F);
  result.condition = data.news[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};
