"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
} from "@mui/material";
import Nav from "../nav/page";
import Footer from "../footer/page";

export default function howItWorks() {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const router = useRouter();

  const navigateToAbout = () => {
    router.push("/about");
  };

  const navigateToPricingPlans = () => {
    router.push("/pricingPlans");
  };

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToHowItWorks = () => {
    router.push("/howItWorks");
  };

  const navigateToContact = () => {
    router.push("/contact");
  };

  const navigateToAssesments = () => {
    router.push("/assesments");
  };

  return (
    <>
      <Nav />

      <Box sx={{ color: "black" }}>THIS IS How It Works PAGE</Box>
      <Footer/>
    </>
  );
}
