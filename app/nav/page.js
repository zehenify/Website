import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import logo from "../public/logo.png";

export default function Nav() {
  const router = useRouter();

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

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
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        border: "1px",
        bgcolor: "white",
        color: "#006466",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image src={logo} alt="User Image" width={50} height={50} />
        <span style={{ marginLeft: "8px" }}>Zehenify</span>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="text"
          onClick={navigateToHome}
          sx={{ color: "black", cursor: "pointer" }}
        >
          Home
        </Button>
        <Button
          variant="text"
          sx={{ color: "black", cursor: "pointer" }}
          onClick={openMenu}
        >
          Feature's <ArrowDropDownIcon />
        </Button>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
          <MenuItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
            1
          </MenuItem>
          <MenuItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
            2
          </MenuItem>
          <MenuItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
            3
          </MenuItem>
          <MenuItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
            4
          </MenuItem>
          <MenuItem onClick={closeMenu} sx={{ cursor: "pointer" }}>
            5
          </MenuItem>
        </Menu>

        <Button
          variant="text"
          onClick={navigateToHowItWorks}
          sx={{ color: "black", cursor: "pointer" }}
        >
          How it works
        </Button>
        <Button
          variant="text"
          onClick={navigateToAssesments}
          sx={{ color: "black", cursor: "pointer" }}
        >
          Assessments
        </Button>
        <Button
          variant="text"
          onClick={navigateToPricingPlans}
          sx={{ color: "black", cursor: "pointer" }}
        >
          Pricing Plans
        </Button>
        <Button
          variant="text"
          onClick={navigateToAbout}
          sx={{ color: "black", cursor: "pointer" }}
        >
          About
        </Button>
        <Button
          variant="text"
          onClick={navigateToContact}
          sx={{ color: "black", cursor: "pointer" }}
        >
          Contact
        </Button>

        <Button
          variant="text"
          sx={{
            color: "white",
            bgcolor: "#006466",
            borderRadius: "9px",
            cursor: "pointer",
            paddingX : "1rem",
          }}
        >
          Start for free
        </Button>
        <Button
          variant="text"
          sx={{
            color: "white",
            bgcolor: "black",
            borderRadius: "9px",
            cursor: "pointer",
            paddingX : "1rem"
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
