'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import scheduling from '../public/scheduling.png';
import clientPortal from '../public/clientPortal.png';
import records from '../public/records.png';
import ePrescribe from '../public/ePrescribe.png';
import messaging from '../public/messaging.png';
import outcomeMeasures from '../public/outcomeMeasures.png';
import customerSupport from '../public/customerSupport.png';
import security from '../public/security.png';
import ZehenifyFeatures from '../public/ZehenifyFeatures.png';
import logo from '../public/logo.png';
import fadedLogo from '../public/fadedLogo.png';
import insta from '../public/insta.png';
import facebook from '../public/facebook.png';
import twitter from '../public/twitter.png';
import linkedin from '../public/linkedin.png';
import clientManagement1 from '../public/clientManagement1.png';
import clientManagement2 from '../public/clientManagement2.png';
import clientManagement3 from '../public/clientManagement3.png';
import clientManagement4 from '../public/clientManagement4.png';
import clientManagement5 from '../public/clientManagement5.png';
import clientManagement6 from '../public/clientManagement6.png';
import telehealth1 from '../public/telehealth1.png';
import telehealth2 from '../public/telehealth2.png';
import telehealth3 from '../public/telehealth3.png';
import telehealth4 from '../public/telehealth4.png';
import telehealth5 from '../public/telehealth5.png';
import appointments1 from '../public/appointments1.png';
import appointments2 from '../public/appointments2.png';
import appointments3 from '../public/appointments3.png';
import appointments4 from '../public/appointments4.png';
import ePrescription1 from '../public/ePrescription1.png';
import ePrescription2 from '../public/ePrescription2.png';
import ePrescription3 from '../public/ePrescription3.png';
import ePrescription4 from '../public/ePrescription4.png';
import clientPortal1 from '../public/clientPortal1.png';
import clientPortal2 from '../public/clientPortal2.png';
import clientPortal3 from '../public/clientPortal3.png';
import clientPortal4 from '../public/clientPortal4.png';
import clientPortal5 from '../public/clientPortal5.png';
import messaging1 from '../public/messaging1.png';
import messaging2 from '../public/messaging2.png';
import messaging3 from '../public/messaging3.png';
import messaging4 from '../public/messaging4.png';
import messaging5 from '../public/messaging5.png';
import clientProgress1 from '../public/clientProgress1.png';
import clientProgress2 from '../public/clientProgress2.png';
import clientProgress3 from '../public/clientProgress3.png';
import clientProgress4 from '../public/clientProgress4.png';
import clientProgress5 from '../public/clientProgress5.png';
import assesments1 from '../public/assesments1.png';
import assesments2 from '../public/assesments2.png';
import assesments3 from '../public/assesments3.png';
import assesments4 from '../public/assesments4.png';
import assesments5 from '../public/assesments5.png';
import { ButtonBase } from '@mui/material';


export default function features() {

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
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


  const [selectedContent, setSelectedContent] = useState('');


  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };



  const navigateToAbout = () => {
    router.push('/about');
  };

  const navigateToPricingPlans = () => {
    router.push('/pricingPlans')
  }

  // const navigateToFearures = () => {
  //   router.push('/features')
  // }

  const navigateToHome = () => {
    router.push('/')
  }

  const navigateToHowItWorks = () => {
    router.push('/howItWorks')
  }

  const navigateToContact = () => {
    router.push('/contact')
  }

  const navigateToAssesments = () => {
    router.push('/assesments')
  }

  return (

    <>

      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          border: '1px',
          bgcolor: 'white',
          color: '#006466',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src={logo} alt="User Image" width={50} height={50} />
          <span style={{ marginLeft: '8px' }}>Zehenify</span>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2
          }}
        >
          <Button variant="text" onClick={navigateToHome} sx={{ color: 'black', cursor: 'pointer' }}>Home</Button>
          <Button
            variant="text"
            sx={{ color: 'black', cursor: 'pointer' }}
            onClick={openMenu}
          >
            Feature's <ArrowDropDownIcon />
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>1</MenuItem>
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>2</MenuItem>
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>3</MenuItem>
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>4</MenuItem>
            <MenuItem onClick={closeMenu} sx={{ cursor: 'pointer' }}>5</MenuItem>
          </Menu>

          <Button variant="text" onClick={navigateToHowItWorks} sx={{ color: 'black', cursor: 'pointer' }}>How it works</Button>
          <Button variant="text" onClick={navigateToAssesments} sx={{ color: 'black', cursor: 'pointer' }}>Assessments</Button>
          <Button variant="text" onClick={navigateToPricingPlans} sx={{ color: 'black', cursor: 'pointer' }}>Pricing Plans</Button>
          <Button variant="text" onClick={navigateToAbout} sx={{ color: 'black', cursor: 'pointer' }}>About</Button>
          <Button variant="text" onClick={navigateToContact} sx={{ color: 'black', cursor: 'pointer' }}>Contact</Button>

          <Button variant="text" sx={{ color: 'white', bgcolor: '#006466', borderRadius: '9px', cursor: 'pointer' }}>Start for free</Button>
          <Button variant="text" sx={{ color: 'white', bgcolor: 'black', borderRadius: '9px', cursor: 'pointer' }}>Login</Button>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${ZehenifyFeatures.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          width: '100%',
          height: '600px'
        }}
      >
      </Box>

      <Box sx={{
        fontSize: '64px',
        fontWeight: 'bold',
        marginBottom: '8px',
        position: 'absolute',
        top: '36%',
        left: '7%'
      }}>
        Zehenify’s Feature
      </Box>

      <Box sx={{
        fontSize: '18px',
        marginBottom: '4px',
        position: 'absolute',
        top: '48%',
        left: '7%',
        width: '550px',
        lineHeight: '1.2'
      }}
      >
        Lorem ipsum dolor sit amet consectetur. Quis aenean vitae urna aliquet. Sed praesent imperdiet mi sit.
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', flexDirection: 'column', ml: '50px', mr: '50px', mt: '80px' }}>


        <Box
          sx={{
            color: '#006466',
            bgcolor: '#E4FFF9',
            width: '120px',
            borderRadius: '30px',
            alignItems: 'center',
            textAlign: 'center',
            padding: '12px 20px'
          }}>
          FEATURE'S
        </Box>



        <Box
          sx={{
            color: 'black',
            fontSize: '40px',
            fontWeight: 'bold',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          Explore Zehenify Feature's
        </Box>


        <Box
          sx={{
            marginTop: '20px',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#222222',
              fontSize: '18px',
              fontWeight: 'normal',
              textAlign: 'center',
              padding: '0 20px',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Elementum pulvinar facilisis enim viverra tortor diam nunc. Vitae at malesuada dolor vitae dolor<br />
            mi eu sit. Pretium malesuada sit purus donec.
          </Typography>
        </Box>


        <Box
          sx={{
            color: 'black',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            textAlign: 'center',
            mt: '20px',
            bgcolor: '#E8FFE8',
            height: '40px',
            width: '1200px'
          }}>

          <Button variant="text" onClick={() => handleButtonClick('Client Management')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none', pl: '5px' }}>Client Health</Button>
          <Button variant="text" onClick={() => handleButtonClick('Telehealth')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Telehealth</Button>
          <Button variant="text" onClick={() => handleButtonClick('Appointment & SMS')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Appointment & SMS</Button>
          <Button variant="text" onClick={() => handleButtonClick('E-Prescription')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>E-Prescription</Button>
          <Button variant="text" onClick={() => handleButtonClick('Client Portal')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Client Portal</Button>
          <Button variant="text" onClick={() => handleButtonClick('Messaging')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Messaging</Button>
          <Button variant="text" onClick={() => handleButtonClick('Client Progress')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Client Progress</Button>
          <Button variant="text" onClick={() => handleButtonClick('Assessments')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Assessments</Button>
          <Button variant="text" onClick={() => handleButtonClick('Billing')} sx={{ color: 'black', cursor: 'pointer', textTransform: 'none' }}>Billing</Button>


        </Box>




      </Box>




      {selectedContent === null &&

        <Box>


          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

            <Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
                <Image src={logo} alt="Image" width={65} height={53} />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
                  <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                    Zehenify
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: '80px' }}>
                <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Design amazing digital experiences that create<br /> more happy in the world.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
                  Home
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Feature's
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  How it Works
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Pricing Plan
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  About
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Contact
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Assessments
                </Typography>

              </Box>

            </Box>



            <Box>
              <Image src={fadedLogo} alt="Image" width={580} height={393} />

              <Box sx={{ position: 'absolute', top: '155%', right: '8%' }}>
                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Enroll yourself now
                </Typography>

                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: '#006466',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Login</Button>
                <br />
                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: 'black',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Start for free</Button>

                <br />

                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
                  Follow us on
                </Typography>

                <br />


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                  <Image src={twitter} alt="Image" width={24} height={24} />
                  <Image src={insta} alt="Image" width={24} height={24} />
                  <Image src={facebook} alt="Image" width={24} height={24} />
                  <Image src={linkedin} alt="Image" width={24} height={24} />
                </Box>


              </Box>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "90%",
                backgroundColor: "#222222",
              }}
            />

            <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
              © 2024 Zehenify. All rights reserved.
            </Typography>
          </Box>

        </Box>


      }



      {selectedContent === 'Client Management' && (
        <Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '80px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{ textAlign: 'left', color: 'black', fontSize: '45px', fontWeight: 'bold', gap: '10px' }}>
              Focus on healing<br />let Zehenify handle<br />the rest
            </Box>

            <Box>
              <Image src={clientManagement1} alt="User Image" width={600} height={300} />
            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '80px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{ width: '600px' }}>
              <Image src={clientManagement2} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Add & Manage Clients Easily
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px' }}>
                Effortlessly add new clients and manage their profiles with an intuitive<br /> system.
                Keep track of all client information, appointments, and session<br /> notes in one place,
                ensuring smooth client management and a more<br /> organized workflow.
              </Box>

            </Box>

          </Box>




          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '80px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', gap: '10px' }}>
                Digital Intake
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px' }}>


                <Box sx={{ color: 'black', fontSize: '15px' }}>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          display: 'block',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Use Zehenify's intake forms to capture essential client information and<br /> medical history seamlessly.
                      </Box>
                    </li>

                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Utilize standardized mental status sheets in each session for progress<br /> tracking.
                      </Box>
                    </li>

                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Clients complete forms easily online, enhancing their onboarding<br /> experience.
                      </Box>
                    </li>
                  </ul>
                </Box>

              </Box>

            </Box>

            <Box sx={{ width: '600px', ml: '20px' }}>
              <Image src={clientManagement3} alt="User Image" width={450} height={200} sx={{ ml: '20px' }} />
            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '90px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{ width: '600px' }}>
              <Image src={clientManagement4} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Efficient Record Management
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px' }}>
                Maintain detailed records for each client’s every session<br />
                including session notes, client history, mental status updates, document uploads, and<br />
                progress tracking. All data is organized in one secure place, ensuring easy<br />
                access and streamlined management for comprehensive client care.
              </Box>

            </Box>

          </Box>




          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Keep Track of Your Appointments<br /> Using the Session Calendar<br /> Feature
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Easily manage your appointments with a comprehensive session<br />
                calendar. View today’s sessions, whether online or onsite, along with<br />
                scheduled timings and the total number of sessions for the day. This<br />
                feature helps you stay organized and ensures that you never miss an<br />
                appointment.
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={clientManagement5} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

          </Box>




          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>



            <Box sx={{ width: '600px', ml: '20px' }}>
              <Image src={clientManagement6} alt="User Image" width={450} height={200} sx={{ ml: '20px' }} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', gap: '10px' }}>
                Simplified Notes and Treatment<br /> Plans
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '20px' }}>


                <Box sx={{ color: 'black', fontSize: '15px' }}>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          display: 'block',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Easily create and update session notes with a user-friendly interface.
                      </Box>
                    </li>

                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Develop and adjust treatment plans based on client progress over<br /> time.
                      </Box>
                    </li>

                    <li style={{ position: 'relative', marginBottom: '10px', paddingLeft: '30px' }}>
                      <Box sx={{
                        '::before': {
                          content: `''`,
                          position: 'absolute',
                          left: '0',
                          top: '5px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          border: '2px solid black',
                          backgroundColor: 'transparent',
                        },
                        '::after': {
                          content: `'✔️'`,
                          position: 'absolute',
                          left: '-2px',
                          top: '-3px',
                          fontSize: '18px',
                          color: 'black',
                        }
                      }}>
                        Access past notes and plans quickly to ensure continuity and<br /> personalized care.
                      </Box>
                    </li>
                  </ul>
                </Box>

              </Box>

            </Box>


          </Box>





          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

            <Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
                <Image src={logo} alt="Image" width={65} height={53} />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
                  <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                    Zehenify
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: '80px' }}>
                <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Design amazing digital experiences that create<br /> more happy in the world.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
                  Home
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Feature's
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  How it Works
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Pricing Plan
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  About
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Contact
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Assessments
                </Typography>

              </Box>

            </Box>



            <Box>
              <Image src={fadedLogo} alt="Image" width={580} height={393} />

              <Box sx={{ position: 'absolute', top: '447%', right: '8%' }}>
                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Enroll yourself now
                </Typography>

                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: '#006466',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Login</Button>
                <br />
                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: 'black',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Start for free</Button>

                <br />

                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
                  Follow us on
                </Typography>

                <br />


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                  <Image src={twitter} alt="Image" width={24} height={24} />
                  <Image src={insta} alt="Image" width={24} height={24} />
                  <Image src={facebook} alt="Image" width={24} height={24} />
                  <Image src={linkedin} alt="Image" width={24} height={24} />
                </Box>


              </Box>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "90%",
                backgroundColor: "#222222",
              }}
            />

            <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
              © 2024 Zehenify. All rights reserved.
            </Typography>
          </Box>




        </Box>

      )}



      {selectedContent === 'Telehealth' && (


        <Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Therapy Beyound<br /> The Office
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={telehealth1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={telehealth2} alt="User Image" width={450} height={230} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', width: '600px', height: '450px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', }}>
                Seamless Virtual Consultations
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                Powered by Google Meet, our Telehealth feature offers high-quality remote<br />
                consultations. Enjoy the flexibility of meeting with practitioners from the<br />
                comfort of your own home, ensuring convenience and continuity of care.
              </Box>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', mt: '30px' }}>
                Automated Appointment<br /> Management
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                Say goodbye to the hassle of scheduling meetings. Our Telehealth<br />
                system automatically manages appointment creation and<br />
                reminders for both clients and practitioners, making it easy to<br />
                stay organized.
              </Box>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', mt: '30px' }}>
                Seamless Virtual Consultations
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                Powered by Google Meet, our Telehealth feature offers high-quality remote<br />
                consultations. Enjoy the flexibility of meeting with practitioners from the<br />
                comfort of your own home, ensuring convenience and continuity of care.
              </Box>

            </Box>


          </Box>


          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              mt: '70px',
              gap: '160px',
              width: '100%',
              mt: '130px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={telehealth3} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Secure and Confidential
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={telehealth4} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                No Time Limit
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={telehealth5} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Smooth Communication
              </Typography>
            </Box>
          </Box>






          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

            <Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
                <Image src={logo} alt="Image" width={65} height={53} />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
                  <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                    Zehenify
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: '80px' }}>
                <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Design amazing digital experiences that create<br /> more happy in the world.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
                  Home
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Feature's
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  How it Works
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Pricing Plan
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  About
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Contact
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Assessments
                </Typography>

              </Box>

            </Box>



            <Box>
              <Image src={fadedLogo} alt="Image" width={580} height={393} />

              <Box sx={{ position: 'absolute', top: '327%', right: '8%' }}>
                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Enroll yourself now
                </Typography>

                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: '#006466',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Login</Button>
                <br />
                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: 'black',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Start for free</Button>

                <br />

                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
                  Follow us on
                </Typography>

                <br />


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                  <Image src={twitter} alt="Image" width={24} height={24} />
                  <Image src={insta} alt="Image" width={24} height={24} />
                  <Image src={facebook} alt="Image" width={24} height={24} />
                  <Image src={linkedin} alt="Image" width={24} height={24} />
                </Box>


              </Box>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "90%",
                backgroundColor: "#222222",
              }}
            />

            <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
              © 2024 Zehenify. All rights reserved.
            </Typography>
          </Box>





        </Box>

      )}



      {selectedContent === 'Appointment & SMS' && (


        <Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Your Time,<br />
                Your Appointments,<br />
                Your Way
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={appointments1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>


          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={appointments2} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Simple Appointment Management
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Easily manage your calendar, set availability, and book sessions with just a<br />
                few clicks. Both you and your clients can view and adjust appointments for<br />
                seamless scheduling.
              </Box>

            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Automated SMS & Email<br /> Reminders
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Send automatic SMS and Email reminders before each session to reduce<br />
                no-shows and ensure clients are always prepared.
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={appointments3} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

          </Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={appointments4} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Instant Schedule Updates
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Any changes in the schedule, such as rescheduled or canceled<br />
                appointments, are instantly communicated via SMS, keeping your clients<br />
                informed and reducing the chance of miscommunication.
              </Box>

            </Box>

          </Box>





          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

            <Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
                <Image src={logo} alt="Image" width={65} height={53} />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
                  <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                    Zehenify
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: '80px' }}>
                <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Design amazing digital experiences that create<br /> more happy in the world.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
                  Home
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Feature's
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  How it Works
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Pricing Plan
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  About
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Contact
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Assessments
                </Typography>

              </Box>

            </Box>



            <Box>
              <Image src={fadedLogo} alt="Image" width={580} height={393} />

              <Box sx={{ position: 'absolute', top: '350%', right: '8%' }}>
                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Enroll yourself now
                </Typography>

                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: '#006466',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Login</Button>
                <br />
                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: 'black',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Start for free</Button>

                <br />

                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
                  Follow us on
                </Typography>

                <br />


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                  <Image src={twitter} alt="Image" width={24} height={24} />
                  <Image src={insta} alt="Image" width={24} height={24} />
                  <Image src={facebook} alt="Image" width={24} height={24} />
                  <Image src={linkedin} alt="Image" width={24} height={24} />
                </Box>


              </Box>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "90%",
                backgroundColor: "#222222",
              }}
            />

            <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
              © 2024 Zehenify. All rights reserved.
            </Typography>
          </Box>




        </Box>




      )}







      {selectedContent === 'E-Prescription' && (


        <Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Fast, Convenient,<br />
                and Paperless<br />
                Prescribing
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={ePrescription1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>


          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={ePrescription2} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Effortless Prescription<br /> Management
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Create, modify, and manage prescriptions directly within the Zehenify<br />
                platform. E-Prescription eliminates the need for handwritten notes,<br />
                reducing errors and improving efficiency.
              </Box>

            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Secure Client Communication
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Communicate prescription details securely with clients through the<br />
                Zehenify platform. This ensures that clients are informed about their<br />
                medications, dosages, and instructions without compromising<br />
                confidentiality.
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={ePrescription3} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

          </Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={ePrescription4} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Medication History Tracking
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Keep comprehensive records of all client prescriptions in one place. This<br />
                allows for better tracking of medication history, helping practitioners<br />
                monitor adherence and identify potential issues.
              </Box>

            </Box>

          </Box>





          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

            <Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
                <Image src={logo} alt="Image" width={65} height={53} />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
                  <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                    Zehenify
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: '80px' }}>
                <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Design amazing digital experiences that create<br /> more happy in the world.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
                  Home
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Feature's
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  How it Works
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Pricing Plan
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  About
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Contact
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Assessments
                </Typography>

              </Box>

            </Box>



            <Box>
              <Image src={fadedLogo} alt="Image" width={580} height={393} />

              <Box sx={{ position: 'absolute', top: '342%', right: '8%' }}>
                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Enroll yourself now
                </Typography>

                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: '#006466',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Login</Button>
                <br />
                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: 'black',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Start for free</Button>

                <br />

                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
                  Follow us on
                </Typography>

                <br />


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                  <Image src={twitter} alt="Image" width={24} height={24} />
                  <Image src={insta} alt="Image" width={24} height={24} />
                  <Image src={facebook} alt="Image" width={24} height={24} />
                  <Image src={linkedin} alt="Image" width={24} height={24} />
                </Box>


              </Box>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "90%",
                backgroundColor: "#222222",
              }}
            />

            <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
              © 2024 Zehenify. All rights reserved.
            </Typography>
          </Box>




        </Box>




      )}






      {selectedContent === 'Client Portal' && (


        <Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Bringing Therapy<br />
                Closer with a<br />
                Client Portal
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={clientPortal1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>


          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={clientPortal2} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Secure & Private Communication
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Maintain professional boundaries while staying connected with your<br />
                clients through HIPAA-compliant messaging. Share important updates,<br />
                session notes, or homework assignments without relying on third-party<br />
                apps. Rest assured that all communication remains confidential and<br />
                secure, fostering trust between you and your clients.
              </Box>

            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Help Clients Track Their Progress
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Encourage active client participation by offering access to their therapy<br />
                analytics. Clients can visualize their progress, helping to motivate and<br />
                engage them in their mental health journey. By seeing real-time<br />
                improvements, clients feel more encouraged to continue therapy and work<br />
                toward their goals.
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={clientPortal3} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

          </Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={clientPortal4} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Automated Video Call Scheduling<br /> for Online Appointments
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Simplify your online appointments with our automated video call<br />
                scheduling feature. There's no need for clients or practitioners to create<br />
                meetings manually. Zehenify handles it all, ensuring appointments are set<br />
                up seamlessly with a direct link to the session, making virtual therapy more<br />
                accessible and efficient.
              </Box>

            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Customizable Client Resources
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Easily upload personalized resources such as worksheets, guides,<br />
                and custom assessments, tailored to each client’s individual needs. The portal<br />
                allows clients to access these materials at their convenience, ensuring<br />
                continuous engagement even outside of sessions and empowering them<br />
                to take ownership of their therapeutic journey.
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={clientPortal5} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

          </Box>





          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

            <Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
                <Image src={logo} alt="Image" width={65} height={53} />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
                  <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                    Zehenify
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: '80px' }}>
                <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Design amazing digital experiences that create<br /> more happy in the world.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
                  Home
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Feature's
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  How it Works
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Pricing Plan
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  About
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Contact
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Assessments
                </Typography>

              </Box>

            </Box>



            <Box>
              <Image src={fadedLogo} alt="Image" width={580} height={393} />

              <Box sx={{ position: 'absolute', top: '385%', right: '8%' }}>
                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Enroll yourself now
                </Typography>

                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: '#006466',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Login</Button>
                <br />
                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: 'black',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Start for free</Button>

                <br />

                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
                  Follow us on
                </Typography>

                <br />


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                  <Image src={twitter} alt="Image" width={24} height={24} />
                  <Image src={insta} alt="Image" width={24} height={24} />
                  <Image src={facebook} alt="Image" width={24} height={24} />
                  <Image src={linkedin} alt="Image" width={24} height={24} />
                </Box>


              </Box>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "90%",
                backgroundColor: "#222222",
              }}
            />

            <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
              © 2024 Zehenify. All rights reserved.
            </Typography>
          </Box>




        </Box>




      )}









      {selectedContent === 'Messaging' && (


        <Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Confidential Chats,<br />
                Meaningful Support
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={messaging1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>


          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={messaging2} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                HIPAA-Compliant Messaging
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Ensure all communications are secure and confidential. Our HIPAA-<br />
                compliant platform guarantees that sensitive client information is<br />
                protected, providing peace of mind for both practitioners and clients.
              </Box>

            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Maintain Professional Boundaries
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Communicate effectively with clients without the need to share personal<br />
                contact information. This helps preserve your professional boundaries<br />
                while ensuring open lines of communication.
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={messaging3} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

          </Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={messaging4} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Instant Client Communication
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Reach out to your clients quickly and easily for session updates, homework<br />
                assignments, or general check-ins. Secure messaging keeps everything<br />
                centralized, eliminating the need for third-party apps.
              </Box>

            </Box>

          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '25px', fontWeight: 'bold', }}>
                Resource Sharing via Chat
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '10px' }}>
                Easily share resources, such as worksheets, articles, or links, directly<br />
                through the messaging platform. This ensures that clients have quick<br />
                access to valuable materials, enhancing their engagement and support<br />
                outside of sessions.
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={messaging5} alt="User Image" width={400} height={200} sx={{}} />
            </Box>

          </Box>





          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

            <Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
                <Image src={logo} alt="Image" width={65} height={53} />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
                  <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                    Zehenify
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: '80px' }}>
                <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Design amazing digital experiences that create<br /> more happy in the world.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
                  Home
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Feature's
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  How it Works
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Pricing Plan
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  About
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Contact
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Assessments
                </Typography>

              </Box>

            </Box>



            <Box>
              <Image src={fadedLogo} alt="Image" width={580} height={393} />

              <Box sx={{ position: 'absolute', top: '385%', right: '8%' }}>
                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Enroll yourself now
                </Typography>

                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: '#006466',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Login</Button>
                <br />
                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: 'black',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Start for free</Button>

                <br />

                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
                  Follow us on
                </Typography>

                <br />


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                  <Image src={twitter} alt="Image" width={24} height={24} />
                  <Image src={insta} alt="Image" width={24} height={24} />
                  <Image src={facebook} alt="Image" width={24} height={24} />
                  <Image src={linkedin} alt="Image" width={24} height={24} />
                </Box>


              </Box>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "90%",
                backgroundColor: "#222222",
              }}
            />

            <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
              © 2024 Zehenify. All rights reserved.
            </Typography>
          </Box>




        </Box>


      )}




      {selectedContent === 'Client Progress' && (


        <Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Analytics That<br />
                Elevate Client Care
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={clientProgress1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>

          </Box>


          <Box sx={{ color: 'black', fontSize: '19px', mt: '100px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            Zehenify’s Analytics and Progress Tracking feature is designed to give practitioners deeper insights into their clients’<br />
            therapeutic journeys. With this powerful tool, you can measure progress, adjust treatment plans, and provide clients<br />
            with tangible evidence of their improvements, fostering a stronger commitment to therapy.
          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={clientProgress2} alt="User Image" width={450} height={230} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', width: '600px', height: '450px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', }}>
                Higher Client Retention Rate
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                By showing clients tangible evidence of their progress, they feel more<br />
                motivated to continue therapy. The data-driven approach gives them<br />
                confidence in the process, which ultimately leads to better engagement<br />
                and higher retention.
              </Box>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', mt: '30px' }}>
                Personalized Treatment Plan
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                With real-time insights into a client’s progress, practitioners can tailor<br />
                treatment plans based on objective data. This ensures that each client<br />
                receives care that’s specifically suited to their individual needs, increasing<br />
                the effectiveness of therapy.
              </Box>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', mt: '30px' }}>
                Better Care
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                The ability to track, analyze, and adjust treatments based on progress<br />
                means practitioners can offer more accurate, responsive, and effective<br />
                care. This leads to improved outcomes and a more satisfying therapeutic<br />
                experience for both clients and practitioners.
              </Box>

            </Box>


          </Box>


          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              mt: '70px',
              gap: '160px',
              width: '100%',
              mt: '130px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={clientProgress3} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Enhanced Engagement
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={clientProgress4} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Data-Driven Care
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={clientProgress5} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Personalized Insights
              </Typography>
            </Box>

          </Box>





          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

            <Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
                <Image src={logo} alt="Image" width={65} height={53} />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
                  <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                    Zehenify
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: '80px' }}>
                <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Design amazing digital experiences that create<br /> more happy in the world.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
                  Home
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Feature's
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  How it Works
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Pricing Plan
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  About
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Contact
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Assessments
                </Typography>

              </Box>

            </Box>



            <Box>
              <Image src={fadedLogo} alt="Image" width={580} height={393} />

              <Box sx={{ position: 'absolute', top: '342%', right: '8%' }}>
                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Enroll yourself now
                </Typography>

                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: '#006466',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Login</Button>
                <br />
                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: 'black',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Start for free</Button>

                <br />

                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
                  Follow us on
                </Typography>

                <br />


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                  <Image src={twitter} alt="Image" width={24} height={24} />
                  <Image src={insta} alt="Image" width={24} height={24} />
                  <Image src={facebook} alt="Image" width={24} height={24} />
                  <Image src={linkedin} alt="Image" width={24} height={24} />
                </Box>


              </Box>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "90%",
                backgroundColor: "#222222",
              }}
            />

            <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
              © 2024 Zehenify. All rights reserved.
            </Typography>
          </Box>





        </Box>

      )}








      {selectedContent === 'Assessments' && (


        <Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '100px',
            ml: '60px',
            mr: '60px'
          }}>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px'
            }}>

              <Box sx={{ color: 'black', fontSize: '50px', fontWeight: 'bold', }}>
                Analytics That<br />
                Elevate Client Care
              </Box>

            </Box>

            <Box sx={{ width: '600px' }}>
              <Image src={assesments1} alt="User Image" width={450} height={230} sx={{}} />
            </Box>

          </Box>


          <Box sx={{ color: 'black', fontSize: '19px', mt: '100px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            Zehenify’s Customizable Assessment feature empowers therapists to create personalized assessments that cater to the<br />
            unique needs of their clients. With the flexibility to design their own questions and utilize a simple 1-10 rating scale,<br />
            practitioners can gather valuable insights to enhance the therapeutic process
          </Box>



          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
            mt: '110px',
            ml: '60px',
            mr: '60px'
          }}>


            <Box sx={{ width: '600px' }}>
              <Image src={clientProgress2} alt="User Image" width={450} height={230} sx={{}} />
            </Box>

            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', width: '600px', height: '450px'
            }}>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', }}>
                Personalized Assessments
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                Design assessments tailored to each client’s specific needs and<br />
                circumstances. Create your own questions to address particular issues,<br />
                allowing for a more focused and relevant evaluation.
              </Box>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', mt: '30px' }}>
                1-10 Rating Scale
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                Utilize a straightforward 1-10 rating scale for responses, making it easy for<br />
                clients to express their feelings and experiences. This clear scale provides a<br />
                quantifiable measure of client progress and engagement.
              </Box>

              <Box sx={{ color: '#006466', fontSize: '28px', fontWeight: 'bold', mt: '30px' }}>
                In-Depth Analytics
              </Box>

              <Box sx={{ color: 'black', fontSize: '15px', mt: '13px' }}>
                Receive detailed analytics for each question, enabling you to track client<br />
                responses over time. This data helps identify trends, assess progress, and<br />
                inform treatment plans, enhancing the effectiveness of therapy.
              </Box>

            </Box>


          </Box>


          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              mt: '70px',
              gap: '160px',
              width: '100%',
              mt: '130px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={assesments1} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Tailored Evaluations
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={assesments4} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Dynamic Insights
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={assesments5} alt="User Image" width={250} height={100} sx={{}} />
              <Typography
                sx={{
                  width: '250px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '20px',
                  mt: '20px',
                }}
              >
                Client Engagement
              </Typography>
            </Box>

          </Box>





          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '120px' }}>

            <Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '80px' }}>
                <Image src={logo} alt="Image" width={65} height={53} />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
                  <Typography component="span" sx={{ fontSize: '35px', textAlign: 'start', color: '#006466', fontWeight: 'bold' }}>
                    Zehenify
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ml: '80px' }}>
                <Typography sx={{ fontSize: '15px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Design amazing digital experiences that create<br /> more happy in the world.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px' }}>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '80px' }}>
                  Home
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Feature's
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  How it Works
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Pricing Plan
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  About
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Contact
                </Typography>

                <Typography sx={{ fontSize: '17px', textAlign: 'start', color: 'black', ml: '25px' }}>
                  Assessments
                </Typography>

              </Box>

            </Box>



            <Box>
              <Image src={fadedLogo} alt="Image" width={580} height={393} />

              <Box sx={{ position: 'absolute', top: '342%', right: '8%' }}>
                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '40px' }}>
                  Enroll yourself now
                </Typography>

                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: '#006466',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Login</Button>
                <br />
                <Button variant="text" sx={{
                  fontSize: '16px',
                  color: 'black',
                  bgcolor: 'white',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  bgcolor: 'black',
                  color: 'white',
                  mt: '16px',
                  textTransform: 'none',
                  width: '180px',
                  height: '48px'
                }}
                >Start for free</Button>

                <br />

                <Typography sx={{ fontSize: '16px', textAlign: 'start', color: 'black', mt: '25px' }}>
                  Follow us on
                </Typography>

                <br />


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                  <Image src={twitter} alt="Image" width={24} height={24} />
                  <Image src={insta} alt="Image" width={24} height={24} />
                  <Image src={facebook} alt="Image" width={24} height={24} />
                  <Image src={linkedin} alt="Image" width={24} height={24} />
                </Box>


              </Box>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px' }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                width: "90%",
                backgroundColor: "#222222",
              }}
            />

            <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'black', mt: '25px' }}>
              © 2024 Zehenify. All rights reserved.
            </Typography>
          </Box>





        </Box>

      )}





    </>
  );
}









