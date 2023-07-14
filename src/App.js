import { useEffect } from "react";
import React from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

export default function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "", //vapidKey should be generated from Firebase Console (project settings > Cloud Messaging > Web Push Certificates > Generate Key)
      });
      console.log("Token Generated", token);
    } else if (permission === "denied") {
      alert("Permission has been Deined");
    }
  }
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <div>
      <h1>Firebase FCM Token Generator</h1>
    </div>
  );
}
