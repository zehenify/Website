"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import mainPic from "../public/mainPic.png";
import CompliantSecure from "../public/CompliantSecure.png";
import goPaperless from "../public/goPaperless.png";
import saveTime from "../public/saveTime.png";
import empowerClients from "../public/empowerClients.png";
import user from "../public/user.png";
import scheduling from "../public/scheduling.png";
import clientPortal from "../public/clientPortal.png";
import records from "../public/records.png";
import ePrescribe from "../public/ePrescribe.png";
import messaging from "../public/messaging.png";
import outcomeMeasures from "../public/outcomeMeasures.png";
import customerSupport from "../public/customerSupport.png";
import security from "../public/security.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ButtonBase } from "@mui/material";
import Nav from "../app/nav/page";
import Footer from "../app/footer/page";
import { useRouter } from "next/navigation";
import WhoIsItFor from "../app/whoIsItFor/page";

export default function Home() {
  const router = useRouter();

  const requestADemoHandler = () => {
    router.push("/requestDemo");
  };

  return (
    <>
      <Nav />
      <Box
        sx={{
          backgroundImage: `url(${mainPic.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          width: "100%",
          height: "600px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              fontSize: "64px",
              fontWeight: "bold",
              marginBottom: "8px",
              position: "absolute",
              top: "20%",
              left: "7%",
            }}
          >
            Zehenify
          </Box>
          <Box
            sx={{
              fontSize: "45px",
              fontWeight: "bold",
              marginBottom: "4px",
              position: "absolute",
              top: "40%",
              left: "7%",
              lineHeight: "1.2",
            }}
          >
            Pakistan's First Mental <br /> Health
          </Box>
          <Box
            component="span"
            sx={{
              fontSize: "45px",

              marginBottom: "4px",
              position: "absolute",
              top: "49%",
              left: "17.5%",
              lineHeight: "1.2",
            }}
          >
            Tool For Practitioners
          </Box>

          <Box
            sx={{
              fontSize: "18px",
              marginBottom: "4px",
              position: "absolute",
              top: "65%",
              left: "7%",
              width: "550px",
              lineHeight: "1.2",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Quis aenean vitae urna
            aliquet. Sed praesent imperdiet mi sit.
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "75%",
              left: "7%",
            }}
          >
            <Button
              variant="text"
              sx={{
                fontSize: "12px",
                color: "black",
                bgcolor: "white",
                borderRadius: "9px",
                cursor: "pointer",
                width: "150px",
                padding: "8px 12px",
                marginRight: "10px",
              }}
              onClick={requestADemoHandler}
            >
              Request a demo
            </Button>

            <Button
              variant="text"
              sx={{
                color: "white",
                borderRadius: "9px",
                cursor: "pointer",
                border: "1px solid white",
                padding: "6px 12px",
              }}
            >
              Start for free
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "200px",
            maxWidth: 360,
            bgcolor: "transparent",
            position: "absolute",
            top: "60%",
            right: "36%",
            border: "1px solid white",
            borderRadius: "14px",
            padding: "3px 15px",
            display: "flex",
            alignContent: "center",
          }}
        >
          <nav aria-label="assesent">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Clients" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Assesments" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>

        <Box
          sx={{
            width: "400px",
            height: "220px",
            bgcolor: "transparent",
            backdropFilter: "blur(5px)",
            position: "absolute",
            top: "60%",
            right: "5%",
            color: "white",
            border: "1px solid white",
            borderRadius: "14px",
            display: "flex",
            padding: "16px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Image src={user} alt="User Image" width={100} height={100} />
            </Box>

            <Box sx={{}}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Abdulhadi Yaseen
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: "10px" }}>
                Age: 20
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5, fontSize: "10px" }}>
                Contact: 0326-0345093
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, fontSize: "10px" }}>
                Email: abdulhadiyaseen2004@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",

              paddingTop: "5px",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "11px" }}
              >
                Next Appointment
              </Typography>
              <Typography variant="body2">20 Oct 2024 | 12:30 PM</Typography>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Completed Sessions
              </Typography>
              <Typography variant="body2">02</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: "auto" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#006466",
                width: "170px",
                mb: 1,
                borderRadius: "6px",
                fontSize: "10px",
              }}
            >
              Intake Form
            </Button>

            <Button
              variant="outlined"
              component="label"
              sx={{
                border: "2px dashed rgba(255, 255, 255, 0.5)",
                color: "white",
                width: "170px",
                borderRadius: "6px",
                height: "30px",
                position: "absolute",
                right: "20px",
                top: "81%",
                fontSize: "8px",
              }}
            >
              Add file or drop file here
              <input type="file" hidden />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          padding: 2,
          bgcolor: "white",
          overflowY: "auto",
        }}
      >
        <Box
          component="p"
          sx={{
            color: "#006466",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "70px",
            fontSize: "20px",
          }}
        >
          Zehenify gives you the tools you need to easily streamline and manage
          your practice
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            paddingTop: "5px",
            marginTop: "45px",
          }}
        >
          <Box sx={{ flexGrow: 1, paddingTop: "5px" }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid
                item
                xs={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src={CompliantSecure}
                  alt="Image"
                  width={150}
                  height={150}
                />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontSize: "15px",
                    marginTop: "30px",
                  }}
                >
                  Compliant & Secure
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={goPaperless} alt="Image" width={90} height={90} />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontSize: "15px",
                    marginTop: "30px",
                  }}
                >
                  Go Paperless
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={saveTime} alt="Image" width={130} height={130} />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontSize: "15px",
                    marginTop: "30px",
                  }}
                >
                  Save Time
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src={empowerClients}
                  alt="Image"
                  width={125}
                  height={125}
                />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontSize: "15px",
                    marginTop: "30px",
                  }}
                >
                  Empower Your Clients
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "white",
              bgcolor: "#006466",
              borderRadius: "9px",
              cursor: "pointer",
              fontSize: "10px",
              padding: "11px 15px",
            }}
          >
            Try Zehenify for Free
          </Button>
          <Button
            variant="text"
            sx={{
              color: "white",
              bgcolor: "black",
              borderRadius: "9px",
              cursor: "pointer",
              fontSize: "10px",
              padding: "11px 25px",
            }}
          >
            See Pricing Plans
          </Button>
        </Box>
      </Box>

      <Box >
        <Box
          sx={{
            color: "#006466",
            bgcolor: "#E4FFF9",
            width: "120px",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            marginTop: "80px",
            alignItems: "center",
            margin: "80px auto",
            textAlign: "center",
            padding: "12px 20px",
          }}
        >
          FEATURE'S
        </Box>

        <Box
          sx={{
            color: "black",
            fontSize: "40px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            marginTop: "-60px",
          }}
        >
          Explore Zehenify Feature's
        </Box>

        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#222222",
              fontSize: "18px",
              fontWeight: "normal",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Elementum pulvinar facilisis
            enim viverra tortor diam nunc. Vitae at malesuada dolor vitae dolor
            <br />
            mi eu sit. Pretium malesuada sit purus donec.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, paddingTop: "20px" }}>
          <Grid
            container
            spacing={4}
            columnSpacing={-3}
            justifyContent="center"
          >
            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <ButtonBase
                sx={{ width: "100%" }}
                // onClick={() => {click action }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    height: 250,
                    borderRadius: "8px",
                    border: "1px solid #006466",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={scheduling}
                        alt="Image"
                        width={125}
                        height={125}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#006466",
                        mb: 1.5,
                        mt: 1.8,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Scheduling and To-Do-List
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "12px", textAlign: "center" }}
                    >
                      Quickly schedule appointments and manage
                      <br /> tasks. Your calendar and To-Do list connect
                      <br /> seamlessly to your records, notes, and billing to
                      <br /> help you save time and stay organized.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <ButtonBase
                sx={{ width: "100%" }}
                // onClick={() => {click action }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    height: 250,
                    borderRadius: "8px",
                    border: "1px solid #006466",
                    borderColor: "#006466",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={clientPortal}
                        alt="Image"
                        width={125}
                        height={125}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#006466",
                        mb: 1.5,
                        mt: 1.8,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Custom Client Portal
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "12px", textAlign: "center" }}
                    >
                      Allow your clients to request and manage <br />{" "}
                      appointments online, and share paperwork
                      <br /> electronically for clients to review or sign before
                      <br /> sessions.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <ButtonBase
                sx={{ width: "100%" }}
                // onClick={() => {click action }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    height: 250,
                    borderRadius: "8px",
                    border: "1px solid #006466",
                    borderColor: "#006466",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={records}
                        alt="Image"
                        width={125}
                        height={125}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#006466",
                        mb: 1.5,
                        mt: 1.8,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Notes & Electronic Records
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "12px", textAlign: "center" }}
                    >
                      Easily create comprehensive documentation with
                      <br /> a variety of note templates, and keep your charts
                      <br /> organized with HIPAA-compliant electronic
                      <br /> medical records.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <ButtonBase
                sx={{ width: "100%" }}
                // onClick={() => {click action }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    height: 250,
                    borderRadius: "8px",
                    border: "1px solid #006466",
                    borderColor: "#006466",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={ePrescribe}
                        alt="Image"
                        width={125}
                        height={125}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#006466",
                        mb: 1.5,
                        mt: 1.8,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      ePrescribe
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "12px", textAlign: "center" }}
                    >
                      Electronically manage and prescribe medications
                      <br /> directly from your patient's chart
                      <br />. Zehenify ePrescribe helps you save time, reduce
                      <br /> errors, and improve patient safety.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <ButtonBase
                sx={{ width: "100%" }}
                // onClick={() => {click action }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    height: 250,
                    borderRadius: "8px",
                    border: "1px solid #006466",
                    borderColor: "#006466",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={messaging}
                        alt="Image"
                        width={125}
                        height={125}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#006466",
                        mb: 1.5,
                        mt: 1.8,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Messaging
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "12px", textAlign: "center" }}
                    >
                      Secure messaging system allows clients and
                      <br /> practices to better interact with one another
                      <br />. Exchange messages securely with your clients
                      <br /> through the client portal.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <ButtonBase
                sx={{ width: "100%" }}
                // onClick={() => {click action }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    height: 250,
                    borderRadius: "8px",
                    border: "1px solid #006466",
                    borderColor: "#006466",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={outcomeMeasures}
                        alt="Image"
                        width={125}
                        height={125}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#006466",
                        mb: 1.5,
                        mt: 1.8,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Outcome Measures
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "12px", textAlign: "center" }}
                    >
                      Improve your client experience by incorporating
                      <br /> measurement-based care into their treatment
                      <br />. Outcome measures such as PHQ-9 and GAD-7 are
                      <br /> integrated and auto-scored in Zehenify.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <ButtonBase
                sx={{ width: "100%" }}
                // onClick={() => {click action }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    height: 250,
                    borderRadius: "8px",
                    border: "1px solid #006466",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={customerSupport}
                        alt="Image"
                        width={125}
                        height={125}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#006466",
                        mb: 1.5,
                        mt: 1.8,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Incredible Customer Support
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "12px", textAlign: "center" }}
                    >
                      Enjoy 24/7 phone and email support from our
                      <br /> knowledgeable customer success team, plus automatic
                      <br /> software updates and unlimited access to online
                      <br /> resources.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <ButtonBase
                sx={{ width: "100%" }}
                // onClick={() => {click action }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    height: 250,
                    borderRadius: "8px",
                    border: "1px solid #006466",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={security}
                        alt="Image"
                        width={125}
                        height={125}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#006466",
                        mb: 1.5,
                        mt: 1.8,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Worry-Free Security
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "12px", textAlign: "center" }}
                    >
                      Secure your records with encrypted online access
                      <br />, automatic backups, disaster recovery, unique user
                      roles
                      <br /> and access controls, and more. Your security is our
                      top
                      <br /> priority.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                variant="text"
                sx={{
                  color: "white",
                  bgcolor: "#006466",
                  borderRadius: "9px",
                  cursor: "pointer",
                  fontSize: "10px",
                  padding: "15px 15px",
                }}
              >
                See more feature's
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <WhoIsItFor />

      <Footer/>
    </>
  );
};
