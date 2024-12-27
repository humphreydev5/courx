/* Enables client-side rendering. */
"use client";

import React from "react";
import StoreProvider from "@/state/redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  /* Wraps children with Redux StoreProvider. */
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
