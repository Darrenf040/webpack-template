import "./style.css";
import Icon from "./assets/icon.jpg";

const body = document.querySelector("body");

const myIcon = new Image();
myIcon.src = Icon;

body.appendChild(myIcon);
