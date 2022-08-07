import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`country/${item.name.common}`}>
      <li className="card-item">
        <img
          className="card-img "
          src={item.flags.png}
          width="264"
          height="160"
          alt="flag"
        />
        <div className=" card-wrapper">
          <h3 className="card-head">{item.name.common}</h3>
          <div className="card-bottom">
            <p className="card-text">
              Population: <span className="card-span">{item.population}</span>
            </p>
            <p className="card-text">
              Region: <span className="card-span">{item.region}</span>
            </p>
            <p className="card-text">
              Capital: <span className="card-span">{item.capital}</span>
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Card;
