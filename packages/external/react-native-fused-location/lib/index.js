"use strict";
/**
 * Created by M on 11/06/17. With ❤
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const FusedLocation = react_native_1.NativeModules.FusedLocation;
const checkforAndroid = () => {
    if (react_native_1.Platform.OS !== 'android') {
        throw new Error('react-native-fused-location cannot be used any other platform other than android.');
    }
};
exports.default = {
    getFusedLocation: (forceNewLocation = false) => {
        checkforAndroid();
        return FusedLocation.getFusedLocation(forceNewLocation);
    },
    startLocationUpdates: () => {
        checkforAndroid();
        return FusedLocation.startLocationUpdates();
    },
    stopLocationUpdates: () => {
        checkforAndroid();
        return FusedLocation.stopLocationUpdates();
    },
    on: (eventName, cb) => {
        checkforAndroid();
        if (eventName != 'fusedLocation' && eventName != 'fusedLocationError') {
            throw new Error("Event name has to be one of 'fusedLocation' or 'fusedLocationError'");
        }
        let lsRef = react_native_1.DeviceEventEmitter.addListener(eventName, cb);
        return {ref: lsRef, listener: lsRef.listener, eventName };
    },
    off: (subscription) => {
        checkforAndroid();
        if(subscription.ref?.remove) {
            subscription.ref.remove();
        } else {
            react_native_1.DeviceEventEmitter.removeListener(subscription.eventName, subscription.listener);
        }
    },
    setLocationPriority: (priority) => {
        checkforAndroid();
        if (priority < 0 || priority > 3) {
            throw new Error('Invalid priority set for fused api');
        }
        return FusedLocation.setLocationPriority(priority);
    },
    setLocationInterval: (intervalInMillis) => {
        checkforAndroid();
        return FusedLocation.setLocationInterval(intervalInMillis);
    },
    setFastestLocationInterval: (intervalInMillis) => {
        checkforAndroid();
        return FusedLocation.setFastestLocationInterval(intervalInMillis);
    },
    setSmallestDisplacement: (displacementInMeters) => {
        checkforAndroid();
        return FusedLocation.setSmallestDisplacement(displacementInMeters);
    },
    areProvidersAvailable: () => {
        checkforAndroid();
        return FusedLocation.areProvidersAvailable();
    },
    Constants: {
        HIGH_ACCURACY: 0,
        BALANCED: 1,
        LOW_POWER: 2,
        NO_POWER: 3,
    },
};
//# sourceMappingURL=index.js.map