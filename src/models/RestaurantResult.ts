import { Item } from "./Item";
import { Restaurant } from "./Restaurant";

export interface Section {
    id: string;
    name: string;
    type: string;
    items: string[];
}

export interface RestaurantResult {
    restaurant: Restaurant;
    items: Item[];
    sections: Section[];
}
