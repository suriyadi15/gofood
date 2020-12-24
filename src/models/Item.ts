
export interface Item {
    id: string;
    shopping_item_id: number;
    restaurant_id: string;
    name: string;
    price: number;
    description: string;
    active: boolean;
    image: string;
    in_stock: boolean;
    promotion?: any;
    weight: number;
    time_zone: string;
    tag_codes?: any;
    variant_category_ids?: any;
    variant_categories?: any;
    operational_hours?: any;
}
