import axios from 'axios'
import { BASE_API_URL, DEFAULT_LOCATION } from './constants'
import { RestaurantResult } from "./models/RestaurantResult"
import { RestaurantList } from './models/RestaurantListResult'
import { Restaurant } from './models/Restaurant'

export default class GoFood {
    private getHeaders(options: { location: string }): any {
        return {
            'x-location': options.location,
            accept: 'application/json, text/plain, */*',
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    }

    /**
     * Get Restaurant By Id
     * @param id Restaurant Id
     * @param location Coordinate
     */
    async getRestaurant(
        id: string,
        location: string = DEFAULT_LOCATION
    ): Promise<RestaurantResult> {

        const url = `${BASE_API_URL}restaurants/${id}/profile`

        const response = await axios.get(
            url,
            {
                headers: await this.getHeaders({ location })
            })

        const { restaurant } = response.data

        return restaurant as RestaurantResult
    }

    /**
     * Get Near Restaurants
     * @param location Coordinate
     * @param page Pagination
     * @param searchId Search Identifier from result page 1
     */
    async getRestaurants(
        location: string = DEFAULT_LOCATION,
        page: number = 1,
        searchId: string | null = null
    ): Promise<RestaurantList> {

        const url = `${BASE_API_URL}restaurants`

        const params: any = {
            page,
            collection: 'NEAR_ME'
        }
        if (searchId != null) {
            params.search_id = searchId
        }

        const response = await axios.get(
            url,
            {
                headers: await this.getHeaders({ location }),
                params
            })


        let restaurants: Restaurant[] = []

        if (response.data.data.cards) {
            restaurants = (response.data.data.cards as any[])
                .map((item) => item.content as Restaurant)
        }

        const result: RestaurantList = {
            restaurants,
            search_id: response.data.tracking_data.search_id
        }

        return result
    }
}