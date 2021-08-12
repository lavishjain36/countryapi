let country = [
    {
      countryName: "India",
      population: 1295210000,
      region: "Asia",
      capital: "New Delhi",
      flag: "https://restcountries.eu/data/ind.svg",
    },
    { 
      countryName: "Canada",
      population: 36155487,
      region: "Americas",
      capital: "Ottawa",
      flag: "https://restcountries.eu/data/can.svg",
    },
    {
      countryName: "USA",
      population: 323947000,
      region: "Americas",
      capital: "Washington D.C",
      flag: "https://restcountries.eu/data/usa.svg",
    },
    {
      countryName: "Iceland",
      population: 334300,
      region: "Europe",
      capital: "Reykjavík",
      flag: "https://restcountries.eu/data/isl.svg",
    },
    {
      countryName: "Japan",
      population: 126960000,
      region: "Asia",
      capital: "Tokyo",
      flag: "https://restcountries.eu/data/jpn.svg",
    },
    {
      countryName: "Iceland",
      population: 334300,
      region: "Europe",
      capital: "Reykjavík",
      flag: "https://restcountries.eu/data/isl.svg",
    },
    
  ];

    function createFlag(i) {
    const info = document.createElement("div");
    info.setAttribute("class", "info");

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const images = document.createElement("img");
    images.setAttribute("src", country[i].flag);
    images.setAttribute("class", "images");
    container.append(images);

    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "containerInfo");
    containerInfo.innerHTML = `<h3>${country[i].countryName}</h3>
                        <p><span>Population:</span> ${country[i].population}</p>
                        <p><span>Region:</span> ${country[i].region}</p>
                        <p><span>Capital:</span> ${country[i].capital}</p>`;

    info.append(container, containerInfo);
    containers.append(info);
  }
  const containers = document.createElement("div");
  containers.setAttribute("class", "containers");
  for (let i = 0; i < 5; i++) {
    createFlag(i);
  }
  document.body.append(containers);