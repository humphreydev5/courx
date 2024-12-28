"use client";

import Loading from "@/components/Loading";
import WizardStepper from "@/components/WizardStepper";
import { useCheckoutNavigation } from "@/hooks/useCheckoutNavigation";
import { useUser } from "@clerk/nextjs";
import React from "react";
import CheckoutDetailsPage from "./details";
import PaymentPage from "./payment";
import CompletionPage from "./completion";

const CheckoutWizard = () => {
  // Check if user data is fully loaded
  const { isLoaded } = useUser();
  // Get the current checkout step
  const { checkoutStep } = useCheckoutNavigation();

  // Show a loading spinner if user data is not loaded
  if (!isLoaded) return <Loading />;
  // Function to dynamically render the appropriate step
  const renderStep = () => {
    switch (checkoutStep) {
      case 1:
        return <CheckoutDetailsPage />;
      case 2:
        return <PaymentPage />;
      case 3:
        return <CompletionPage />;
      default:
        return <CheckoutDetailsPage />;
    }
  };

  return (
    <div className="checkout">
      <WizardStepper currentStep={checkoutStep} />
      <div className="checkout__content">{renderStep()}</div>
    </div>
  );
};

export default CheckoutWizard;
