/**
 * Created by M on 11/06/17. With ❤
 */
declare type EventName = 'fusedLocation' | 'fusedLocationError';
declare type LocationAccuracy = 0 | 1 | 2 | 3;
declare type LocationCallback = (location: Location) => void;
interface Location {
    latitude: number;
    longitude: number;
    speed: number;
    altitude: number;
    provider: string;
    accuracy: number;
    bearing: number;
    mocked: boolean;
    timestamp: string;
}
interface Subscription {
    listener: () => void;
    eventName: string;
}
declare const _default: {
    getFusedLocation: (forceNewLocation?: boolean) => Promise<Location>;
    startLocationUpdates: () => Promise<void>;
    stopLocationUpdates: () => Promise<void>;
    on: (eventName: EventName, cb: LocationCallback) => Subscription;
    off: (subscription: Subscription) => void;
    setLocationPriority: (priority: LocationAccuracy) => Promise<void>;
    setLocationInterval: (intervalInMillis: number) => Promise<void>;
    setFastestLocationInterval: (intervalInMillis: number) => Promise<void>;
    setSmallestDisplacement: (displacementInMeters: number) => Promise<void>;
    areProvidersAvailable: () => Promise<boolean>;
    Constants: {
        HIGH_ACCURACY: number;
        BALANCED: number;
        LOW_POWER: number;
        NO_POWER: number;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map