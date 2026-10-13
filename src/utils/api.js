import { apiKey } from "./constants";

const newsApiBaseUrl =
  import.meta.env.PROD
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(new Error(`Error: ${res.status}`));
};

export const getNews = (query) => {
  const today = new Date();
  const from = new Date(today);
  from.setDate(from.getDate() - 7);

  const formatDate = (date) => date.toISOString().slice(0, 10);
  const params = new URLSearchParams({
    q: query,
    apiKey,
    from: formatDate(from),
    to: formatDate(today),
    pageSize: "100",
  });

  return fetch(`${newsApiBaseUrl}?${params}`).then(handleServerResponse);
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
