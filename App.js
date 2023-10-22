import { StatusBar } from 'expo-status-bar';

import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <AppNavigation />
    </>
  );
}

