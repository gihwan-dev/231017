"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const NextUiClientProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUiClientProvider;
