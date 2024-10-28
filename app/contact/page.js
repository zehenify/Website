"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import logo from "../public/logo.png";
import Nav from "../nav/page";
import Footer from "../footer/page";

export default function about() {
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

      <Box sx={{ color: "black" }}>THIS IS CONTACT PAGE</Box>
      <Footer />
    </>
  );
}
