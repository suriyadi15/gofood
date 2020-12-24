import { Restaurant } from "./Restaurant";

export interface RestaurantList {
    restaurants: Restaurant[],
    search_id: string
}