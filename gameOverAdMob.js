import React, { useState, useEffect } from 'react';
import { Platform, Button } from 'react-native';
import Constants from 'expo-constants';
import {
    setTestDeviceIDAsync,
    AdMobInterstitial,
} from 'expo-ads-admob';

export function interstitialAdSetUp() {
    const gameOverAdTestID = Platform.select({
        // https://developers.google.com/admob/ios/test-ads
        ios: 'ca-app-pub-3940256099942544/4411468910',
        // https://developers.google.com/admob/android/test-ads
        android: 'ca-app-pub-3940256099942544/1033173712',
    });
    
    const gameOverAdProductionID = Platform.select({
        ios: Constants.manifest.extra.gameOverAdProductionID.ios,
        android: Constants.manifest.extra.gameOverAdProductionID.android,
    });

    // Is a real device and running in production.
    const gameOverAdUnitID =
        Constants.isDevice && !__DEV__ ? gameOverAdProductionID : gameOverAdTestID;

    useEffect(() => {
        async function setUp() {
            try {
                // Set global test device ID
                await setTestDeviceIDAsync('EMULATOR');
                // Configure ad unit
                await AdMobInterstitial.setAdUnitID(gameOverAdUnitID);
                // Load first add
                await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
            } catch (err) {
                console.warn(err)
            }
        };
        setUp();

        return () => {
            // Unsubscribe from event listeners
            AdMobInterstitial.removeAllListeners();
        }
    }, [])
};

export async function showInterstitialAd() {
    try {
        // Show loaded ad
        await AdMobInterstitial.showAdAsync();
        // Load new ad
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
    } catch (err) {
        console.warn(err);
    }
}