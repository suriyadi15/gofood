import { Timing } from "./Timing";


export interface OperationalHour {
    day_of_week: number;
    timings: Timing[];
}
