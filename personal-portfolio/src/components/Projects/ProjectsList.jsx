import mlLogo from "../../assets/img/mlLogo.webp";
import srLogo from "../../assets/img/sanRemoLogo.webp";
import hektoLogo from "../../assets/img/hektoLogo.webp";
import meliImage from "../../assets/img/mercadolibre.webp";
import clinicaSanRemo from "../../assets/img/clinicaSanRemo.webp";
import hektoImage from "../../assets/img/hektoImage.webp";
import weatherApp from "../../assets/img/weather.webp";
import weatherAppLogo from "../../assets/img/weatherLogo.webp";
import heroImage from "../../assets/img/heroBackground.webp";
import heroLogo from "../../assets/img/heroLogo.webp";

export const projects = [
  {
    title: "Superhero App",
    description: "Crea tu equipo de héroes!",
    descriptionColor: "#fff",
    backgroundColor: "rgb(0, 68, 255)",
    img: heroImage,
    logo: heroLogo,
    demoUrl: "https://superhero-app-ferrer.netlify.app/",
    codeUrl: "https://github.com/facc77/superhero-app",
  },
  {
    title: "Weather app",
    description: "Clima online",
    descriptionColor: "#fff",
    backgroundColor: "#75e6da",
    img: weatherApp,
    logo: weatherAppLogo,
    demoUrl: "https://weather-api-ferrer.netlify.app/",
    codeUrl: "https://github.com/facc77/personal-weather-app",
  },
  {
    title: "Meli Challenge",
    description: "Detalle de un producto",
    descriptionColor: "#fff",
    backgroundColor: "#ffe600",
    img: meliImage,
    logo: mlLogo,
    demoUrl: "https://meli-challenge-ferrerfacu.netlify.app/",
    codeUrl:
      "https://github.com/facc77/mercadolibre-detail-challenge/tree/master/mercadolibre-detail",
  },
  {
    title: "Clínica San Remo",
    description: "Clínica para sacar turnos online",
    descriptionColor: "#000",
    backgroundColor: "#fff",
    img: clinicaSanRemo,
    logo: srLogo,
    demoUrl: "https://clinicasanremo.netlify.app/",
    codeUrl: "https://github.com/facc77/Proyecto-Final-React",
  },
  {
    title: "Hekto e-commerce",
    description: "Tienda online",
    descriptionColor: "#d3d3d3",
    backgroundColor: "rgb(25, 118, 210)",
    img: hektoImage,
    logo: hektoLogo,
    demoUrl: "https://heroku-ecommerce.netlify.app/",
    codeUrl: "https://github.com/facc77/e-commerce-2022",
  },
];
