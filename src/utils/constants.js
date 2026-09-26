export const searchOptions = [
  {
    day: true,
    description: "nature",
    url: new URL("../assets/nature/dog.png", import.meta.url).href,
  },
  {
    day: true,
    description: "nature",
    url: new URL("../assets/nature/mountain-river.png", import.meta.url).href,
  },
  {
    day: true,
    description: "parks",
    url: new URL("../assets/parks/deer.png", import.meta.url).href,
  },
  {
    day: true,
    description: "photography",
    url: new URL("../assets/photography/night-stars.png", import.meta.url).href,
  },
  {
    day: true,
    description: "yellowstone",
    url: new URL("../assets/yellowstone/fog.png", import.meta.url).href,
  },
  // {
  //   day: false,
  //   condition: "clear",
  //   url: new URL("../assets/night/clear.png", import.meta.url).href,
  // },
  // {
  //   day: false,
  //   condition: "clouds",
  //   url: new URL("../assets/night/cloudy.png", import.meta.url).href,
  // },
];

// export const defaultSearchOption = {
//   nature: {
//     url: new URL("../assets/nature/dog.png", import.meta.url).href,
//   },
//   nature: {
//     url: new URL("../assets/nature/mountain-river.png", import.meta.url).href,
//   },
//   parks: {
//     url: new URL("../assets/parks/deer.png", import.meta.url).href,
//   },
//   photography: {
//     url: new URL("../assets/photography/night-stars.png", import.meta.url).href,
//   },
//   yellowstone: {
//     url: new URL("../assets/yellowstone/fog.png", import.meta.url).href,
//   },
// };

export const defaultSearchItems = [
  {
    _id: 1,
    name: "Deer",
    description: "parks",
    url: new URL("../assets/parks/deer.png", import.meta.url).href,
  },
  {
    _id: 2,
    name: "Dog",
    description: "nature",
    url: new URL("../assets/nature/dog.png", import.meta.url).href,
  },
  {
    _id: 3,
    name: "Mountain River",
    description: "nature",
    url: new URL("../assets/nature/mountain-river.png", import.meta.url).href,
  },
  {
    _id: 4,
    name: "Night Stars",
    description: "photography",
    url: new URL("../assets/photography/night-stars.png", import.meta.url).href,
  },
  {
    _id: 5,
    name: "Fog",
    description: "yellowstone",
    url: new URL("../assets/yellowstone/fog.png", import.meta.url).href,
  },
];

export const coordinates = {
  latitude: 40.82621,
  longitude: -73.502068,
};

// export const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? " https://api.gcp-demo.hbmc.net"
//     : "http://localhost:3001";

export const apiKey = "a1f095e685f84390a0b6fdcbbb3bbba5";
