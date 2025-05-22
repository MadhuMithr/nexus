import React, { useEffect, useState } from "react";
import "../../../styles/OnboardingComplete.css";

const OnboardingComplete = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200); // Slight delay before fade-in

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`completion-container ${visible ? "fade-in" : ""}`}>
      <h1>🎉 You're All Set!</h1>
      <p>Thank you for completing the onboarding process.</p>
      <p>Your preferences have been saved successfully.</p>
    </div>
  );
};

export default OnboardingComplete;
