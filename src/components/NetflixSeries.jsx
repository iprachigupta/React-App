import data from "../api/data.json";
import {Lists} from "./Lists"
import "./NetflixSeries.css"

const NetflixSeries = () => {
  return (
    <ul>
      {data.map((currEle) => {
        return (
            <Lists key={currEle.id} data={currEle}/>
        );
      })}
    </ul>
  );
};

export default NetflixSeries;

export const Header = () => {
  return (
    <h1>
      <center>Here are some Neflix shows :</center>
    </h1>
  );
};

export const Footer = () => {
  return (
    <h3>
      <center>I am the footer</center>
    </h3>
  );
};
