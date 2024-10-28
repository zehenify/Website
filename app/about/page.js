"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import logo from "../public/logo.png";
import fadedLogo from "../public/fadedLogo.png";
import AboutZehenify from "../public/AboutZehenify.png";
import WhoWeAre from "../public/WhoWeAre.png";
import insta from "../public/insta.png";
import facebook from "../public/facebook.png";
import twitter from "../public/twitter.png";
import linkedin from "../public/linkedin.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
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

      <Box
        sx={{
          backgroundImage: `url(${AboutZehenify.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          width: "100%",
          height: "600px",
        }}
      ></Box>

      <Box
        sx={{
          fontSize: "64px",
          fontWeight: "bold",
          marginBottom: "8px",
          position: "absolute",
          top: "36%",
          left: "7%",
        }}
      >
        About Zehenify
      </Box>

      <Box
        sx={{
          fontSize: "18px",
          marginBottom: "4px",
          position: "absolute",
          top: "48%",
          left: "7%",
          width: "550px",
          lineHeight: "1.2",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Quis aenean vitae urna aliquet.
        Sed praesent imperdiet mi sit.
      </Box>

      <Box
        sx={{
          mt: "30px",
          height: "600px",
          display: "flex",
          float: "flex",
          padding: "55px 50px",
          position: "relative",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Image src={WhoWeAre} alt="Image" width={580} height={493} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            maxWidth: "700px",
            color: "#006466",
            width: "700px",
            borderRadius: "30px",
            alignItems: "left",
            margin: "80px 40px",
            textAlign: "center",
            height: "377px",
            padding: "12px 20px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#E4FFF9",
              color: "#006466",
              width: "140px",
              borderRadius: "30px",
              alignItems: "center",
              textAlign: "center",
              padding: "9px 12px",
              marginLeft: "40px",
              fontSize: "15px",
            }}
          >
            ABOUT US
          </Box>

          <Box sx={{ width: "600px", marginTop: "10px", marginLeft: "40px" }}>
            <Typography
              sx={{
                fontSize: "40px",
                display: "flex",
                float: "flex",
                color: "#222222",
              }}
            >
              Who we
              <Box
                component="span"
                sx={{
                  color: "#006466",
                  fontWeight: "bold",
                  fontSize: "40px",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              >
                Are
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              color: "#222222",
              textAlign: "left",
              marginLeft: "40px",
              fontSize: "15px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Elementum pulvinar facilisis
            enim
            <br />
            viverra tortor diam nunc. Vitae at malesuada dolor vitae dolor mi eu
            sit.
            <br />
            Pretium malesuada sit purus donec. Enim pretium ipsum est dolor at
            diam
            <br />
            non. Blandit non libero elit at.
          </Box>

          <Button
            variant="text"
            sx={{
              fontSize: "10px",
              color: "white",
              bgcolor: "#006466",
              borderRadius: "9px",
              cursor: "pointer",
              width: "150px",
              padding: "13px 12px",
              marginLeft: "40px",
              marginTop: "30px",
            }}
          >
            Request a demo
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          mt: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            color: "#006466",
            bgcolor: "#E4FFF9",
            width: "100px",
            borderRadius: "30px",
            textAlign: "center",
            padding: "8px 10px",
            fontSize: "12px",
          }}
        >
          CONTACT US
          <br />
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: "2px",
            fontSize: "40px",
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
          }}
        >
          We'd Love to Hear From You
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            mt: "15px",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: "15px",
              textAlign: "start",
              color: "black",
              ml: "5px",
            }}
          >
            We provide live phone support
          </Typography>

          <Typography
            component="span"
            sx={{
              fontSize: "15px",
              textAlign: "start",
              color: "black",
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            24 hours
          </Typography>

          <Typography
            component="span"
            sx={{
              fontSize: "15px",
              textAlign: "start",
              color: "black",
              ml: "5px",
            }}
          >
            a day,
          </Typography>
          <Typography
            component="span"
            sx={{
              fontSize: "15px",
              textAlign: "start",
              color: "black",
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            7 days
          </Typography>

          <Typography
            component="span"
            sx={{
              fontSize: "15px",
              textAlign: "start",
              color: "black",
              ml: "5px",
            }}
          >
            a week!
          </Typography>
        </Box>
      </Box>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column", // Change to column for vertical stacking
            color: "#006466",
            width: "700px",
            mt: "40px",
            ml: "40px",
            mr: "40px",
            textAlign: "left", // Align to the left
            height: "auto",
            padding: "12px 20px",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              component="span"
              sx={{
                fontSize: "65px",
                textAlign: "start",
                color: "black",
                ml: "5px",
                width: "200px",
              }}
            >
              Get In
            </Typography>

            <Typography
              component="span"
              sx={{
                fontSize: "65px",
                textAlign: "start",
                color: "#006466",
                ml: "5px",
                fontWeight: "bold",
                width: "200px",
              }}
            >
              Touch
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "start",
              color: "black",
              mt: "5px",
            }}
          >
            <br />
            Learn more about how we’ve helped agencies become efficient,
            <br /> compliant and serve more people in need by contacting us
            today.
            <br />
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "start",
              color: "black",
              mt: "45px",
              fontWeight: "bold",
            }}
          >
            Support Hours
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "start",
              color: "black",
              mt: "5px",
            }}
          >
            Monday-Friday 7 AM - 5 PM PST
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "20px",
              width: "90%",
            }}
          >
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "100%",
                backgroundColor: "#222222",
                marginTop: "120px",
              }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "start",
              color: "black",
              mt: "120px",
            }}
          >
            Support@zehenify.com
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "start",
              color: "black",
              mt: "50px",
              wordSpacing: "5px",
            }}
          >
            +92 123 4567895 +92 123 4567895 +92 123 4567895
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "start",
              color: "black",
              mt: "50px",
            }}
          >
            Office No: 123, Floor 7th, Regent Plaza, Shahrah e faisal, Khi, Pak
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            color: "#006466",
            width: "700px",
            mt: "10px",
            ml: "40px",
            mr: "40px",
            textAlign: "left",
            height: "auto",
            padding: "12px 20px",
            flexWrap: "wrap",
            color: "black",
          }}
        >
          <Typography sx={{ fontSize: "15px", color: "#222222" }}>
            Full name
          </Typography>
          <TextField
            id="filled-basic"
            label="Enter your full name"
            variant="filled"
            sx={{ borderRadius: "15px" }}
          />

          <Typography sx={{ fontSize: "15px", color: "#222222", mt: "30px" }}>
            Email
          </Typography>
          <TextField
            id="filled-basic"
            label="you@email.com"
            variant="filled"
            sx={{ borderRadius: "15px" }}
          />

          <Typography sx={{ fontSize: "15px", color: "#222222", mt: "30px" }}>
            Phone
          </Typography>
          <TextField
            id="filled-basic"
            label="Enter your Phone  number"
            variant="filled"
            sx={{ borderRadius: "15px" }}
          />

          <Typography sx={{ fontSize: "15px", color: "#222222", mt: "30px" }}>
            How can we help
          </Typography>

          <TextField
            id="filled-basic"
            label=""
            variant="filled"
            sx={{
              borderRadius: "15px",
              width: "100%",
              "& .MuiInputBase-root": {
                height: "180px",
                fontSize: "18px",
              },
              "& .MuiFilledInput-input": {
                padding: "20px",
              },
            }}
          />

          <Typography sx={{ fontSize: "15px", color: "#222222", mt: "30px" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography
                  component="span"
                  sx={{ fontSize: "16px", color: "#222222" }}
                >
                  You agree to our friendly privacy policy.
                </Typography>
              }
            />
          </Typography>

          <Button
            variant="text"
            sx={{
              fontSize: "16px",
              color: "white",
              bgcolor: "#006466",
              borderRadius: "9px",
              cursor: "pointer",
              color: "white",
              mt: "16px",
              textTransform: "none",
              width: "100%",
              height: "48px",
            }}
          >
            Get in touch
          </Button>
        </Box>
      </div>

      <Footer/>
    </>
  );
}
