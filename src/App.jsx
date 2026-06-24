import { useEffect, useState } from "react";
import CountdownPage from "./components/CountdownPage";
import BirthdayPage from "./components/BirthdayPage";

function App() {
  const [birthdayReached, setBirthdayReached] = useState(false);

  useEffect(() => {
    const birthdayDate = new Date("2026-06-25T00:00:00");

    const checkDate = () => {
      if (new Date() >= birthdayDate) {
        setBirthdayReached(true);
      }
    };

    checkDate();

    const interval = setInterval(checkDate, 1000);

    return () => clearInterval(interval);
  }, []);

  return birthdayReached ? (
    <BirthdayPage />
  ) : (
    <CountdownPage />
  );
}

export default App;