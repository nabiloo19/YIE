import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, setConsent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvZaF8xR4X_MKHp7e8G2KPcf4T7om4yfI",
  authDomain: "yiepodcast.firebaseapp.com",
  databaseURL: "https://yiepodcast.firebaseio.com",
  projectId: "yiepodcast",
  storageBucket: "yiepodcast.firebasestorage.app",
  messagingSenderId: "320084174390",
  appId: "1:320084174390:web:099ba5a4302acee750da97",
  measurementId: "G-80GY0LSPYH"
};

let analytics: any;

export const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
      const consentStatus = localStorage.getItem('cookieConsentStatus');
      if (consentStatus === 'accepted') {
        enableAnalytics();
      } else if (consentStatus === 'declined') {
        disableAnalytics();
      }
    }
  });
};

export const enableAnalytics = () => {
  if (analytics) {
    setConsent({
      analytics_storage: 'granted'
    });
    console.log("Firebase Analytics enabled.");
    // You might want to log a page view or other event here if needed
    //  logEvent(analytics, 'page_view'); // Example for logging a page view
  }
};

export const disableAnalytics = () => {
  if (analytics) {
    setConsent({
      analytics_storage: 'denied'
    });
    console.log("Firebase Analytics disabled.");
  }
}; 