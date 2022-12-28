import Cloud from "../../Pictures/cloud.jpg";
import Foggy from "../../Pictures/foggy.jpg";
import Rainbow from "../../Pictures/rainbow-weather.jpg";
import Rainy from "../../Pictures/rainy.jpg";
import Snowy from "../../Pictures/snowy.jpg";
import Storm from "../../Pictures/storm.png";
import Sunny from "../../Pictures/sunny.jpg";

function PictureTake({ situation }) {
  switch (situation) {
    case "Rain":
      return <img className="background" src={Rainy} alt="Rainy" />;
    case "Drizzle":
      return <img className="background" src={Rainy} alt="Rainy" />;
    case "Clear":
      return <img className="background" src={Sunny} alt="Sunny" />;
    case "Mist":
      return <img className="background" src={Foggy} alt="Foggy" />;
    case "Snow":
      return <img className="background" src={Snowy} alt="Snowy" />;
    case "Storm":
      return <img className="background" src={Storm} alt="Storm" />;
    case "Clouds":
      return <img className="background" src={Cloud} alt="Cloud" />;
    default:
      return <img className="background" src={Rainbow} alt="Rainbow" />;
  }
}

export default PictureTake;
