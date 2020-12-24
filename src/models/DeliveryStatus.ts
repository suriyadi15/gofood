import { Eta } from "./Eta";


export interface DeliveryStatus {
    distance: number;
    unit: string;
    deliverable: boolean;
    eta: Eta;
}
