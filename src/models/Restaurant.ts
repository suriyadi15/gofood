import { AvgSpendLevel } from "./AvgSpendLevel";
import { Brand } from "./Brand";
import { Cuisine } from "./Cuisine";
import { DeliveryStatus } from "./DeliveryStatus";
import { MerchantAcceptance } from "./MerchantAcceptance";
import { MerchantConfigs } from "./MerchantConfigs";
import { MultiOperationalHour } from "./MultiOperationalHour";
import { OpenStatus } from "./OpenStatus";
import { OperationalHour } from "./OperationalHour";

export interface Restaurant {
    id: string;
    merchant_id: number;
    saudagar_id: string;
    brand: Brand;
    name: string;
    description: string;
    image: string;
    phone_number: string;
    address: string;
    location: string;
    short_link: string;
    shareable_message: string;
    time_zone: string;
    service_area: string;
    multi_operational_hours: MultiOperationalHour[];
    operational_hours: OperationalHour[];
    partner: boolean;
    partner_badge: string;
    gobiz_partner: boolean;
    active: boolean;
    force_close: boolean;
    blocked: boolean;
    cuisines: Cuisine[];
    cuisine: string[];
    collections: string;
    tag_codes: string[];
    promotion_active: boolean;
    promotion_badge: string;
    promo_description: string;
    badge_url: string;
    food_discount_badge: string;
    additional_charges?: any;
    input_item_manually_disabled: boolean;
    pickup_enabled: boolean;
    merchant_acceptance: MerchantAcceptance;
    merchant_configs: MerchantConfigs;
    open_status: OpenStatus;
    delivery_status: DeliveryStatus;
    avg_spend_level: AvgSpendLevel;
    order_max_quantity?: any;
    order_max_radius_km?: any;
    order_max_route_km?: any;
    food_preparation_expected_time: number;
    discount_campaigns: any[];
    created_at: Date;
}




