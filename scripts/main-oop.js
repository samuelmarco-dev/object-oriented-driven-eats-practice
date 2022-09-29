import Restaurant from "./src/restaurant";
import { dishes, drinks, desserts } from "./src/data";

window.onload = () => {
    new Restaurant(dishes, drinks, desserts);
}
