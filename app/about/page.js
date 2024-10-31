'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '../public/logo.png';
import fadedLogo from '../public/fadedLogo.png';
import AboutZehenify from '../public/AboutZehenify.png';
import mountainsLake from '../public/mountainsLake.png';
import pioneeringANewEra from '../public/pioneeringANewEra.png';
import WaqarAli from '../public/WaqarAli.png';
import AlqamaRao from '../public/AlqamaRao.png';
import Khubaibullah from '../public/Khubaibullah.png';
import AfifaRao from '../public/AfifaRao.png';
import team from '../public/team.png';
import insta from '../public/insta.png';
import facebook from '../public/facebook.png';
import twitter from '../public/twitter.png';
import linkedin from '../public/linkedin.png';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


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
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const router = useRouter();

    const navigateToAbout = () => {
        router.push('/about');
    };

    const navigateToPricingPlans = () => {
        router.push('/pricingPlans')
    }

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
                    backgroundImage: `url(${AboutZehenify.src})`,
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
                About Zehenify
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



            <Box sx={{
                mt: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'column',
            }}>



                <Box
                    sx={{
                        color: '#006466',
                        bgcolor: '#E4FFF9',
                        width: '100px',
                        borderRadius: '30px',
                        textAlign: 'center',
                        padding: '8px 10px',
                        fontSize: '12px'
                    }}>
                    ABOUT US<br />
                </Box>


                <Typography variant="body2" sx={{ mt: '2px', fontSize: '40px', fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
                    Together, We’re Here to Make a Difference
                </Typography>

                <Box
                    sx={{
                        backgroundImage: `url(${mountainsLake.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        width: '100%',
                        height: '500px',
                    }}
                >
                </Box>
                <Typography variant="body2" sx={{ position: 'absolute', top: '135%', mt: '2px', fontSize: '20px', color: 'white', textAlign: 'center' }}>
                    At Zehenify, we are here to make a difference in the world of mental health care. We’re<br />
                    revolutionizing the tools available to professionals in the field, empowering Practitioners with<br />
                    intelligent solutions designed to streamline therapy, enhance patient progress tracking, and<br />
                    simplify administrative tasks.
                </Typography>


                <Typography variant="body2" sx={{ position: 'absolute', top: '154%', mt: '2px', fontSize: '20px', color: 'white', textAlign: 'center' }}>
                    More than just software, Zehenify is a committed partner in delivering exceptional mental health<br />
                    care, ensuring that professionals can focus on what truly matters: their patients' well-being.<br />
                    Together, we can transform the landscape of mental health support.
                </Typography>


            </Box >


            <Box sx={{ color: 'black', fontWeight: 'bold', fontSize: '30px', fontWeight: 'bold', textAlign: 'center', mt: '80px', }}>
                Pioneering a New Era in Mental Health Care
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'center',
                textAlign: 'left',
                alignItems: 'center',
                mt: '25px',
                ml: '60px',
                mr: '60px'
            }}>


                <Box sx={{ width: '600px', ml: 'auto', mr: '5px' }}>
                    <Image src={pioneeringANewEra} alt="User Image" width={450} height={250} />
                </Box>

                <Box sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left', width: '600px', ml: '5px', mr: 'auto'
                }}>

                    <Box sx={{ color: 'black', fontSize: '18px' }}>
                        Zehenify is more than just software; it's a<br />
                        commitment to the mental health community in<br />
                        Pakistan. Born from a deep understanding of local<br />
                        challenges, we are dedicated to empowering<br />
                        practitioners with innovative tools. Together, we’re<br />
                        pioneering a future where quality care is not just a<br />
                        privilege but a right accessible to everyone,<br />
                        fostering hope and healing for all.
                    </Box>

                    <Box sx={{ mt: '10px', color: 'black', fontWeight: 'bold', fontSize: '13px', fontWeight: 'bold', }}>
                        - The Zehenify Team
                    </Box>

                </Box>

            </Box>



            <Box
                sx={{
                    backgroundImage: `url(${team.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    width: '100%',
                    height: '500px',
                    mt: '70px'
                }}
            >
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', position: 'absolute', top: '250%', }}>


                <Box sx={{ mt: '10px', color: 'white', fontWeight: 'bold', fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>
                    Zehenify Team
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', mt: '30px' }}>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Image src={WaqarAli} alt="User Image" width={200} height={150} />
                        <Typography
                            sx={{
                                width: '250px',
                                textAlign: 'center',
                                color: 'black',
                                fontSize: '20px',
                                mt: '20px',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            Waqar Ali
                        </Typography>

                        <Typography
                            sx={{
                                width: '250px',
                                textAlign: 'center',
                                color: 'white',
                                fontSize: '12px',
                                mt: '8px',
                                color: 'white',
                            }}
                        >
                            Founder & Product Head
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Image src={AlqamaRao} alt="User Image" width={200} height={150} />
                        <Typography
                            sx={{
                                width: '250px',
                                textAlign: 'center',
                                color: 'black',
                                fontSize: '20px',
                                mt: '20px',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            Alqama Rao
                        </Typography>
                        <Typography
                            sx={{
                                width: '250px',
                                textAlign: 'center',
                                color: 'white',
                                fontSize: '12px',
                                mt: '8px',
                                color: 'white',
                            }}
                        >
                            Co founder and Technical lead
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Image src={Khubaibullah} alt="User Image" width={200} height={150} />
                        <Typography
                            sx={{
                                width: '250px',
                                textAlign: 'center',
                                color: 'black',
                                fontSize: '20px',
                                mt: '20px',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            Khubaibullah
                        </Typography>
                        <Typography
                            sx={{
                                width: '250px',
                                textAlign: 'center',
                                color: 'white',
                                fontSize: '12px',
                                mt: '8px',
                                color: 'white',
                            }}
                        >
                            Co Founder & Prod Designer
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Image src={AfifaRao} alt="User Image" width={200} height={150} />
                        <Typography
                            sx={{
                                width: '250px',
                                textAlign: 'center',
                                color: 'black',
                                fontSize: '20px',
                                mt: '20px',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            Afifa Rao
                        </Typography>
                        <Typography
                            sx={{
                                width: '250px',
                                textAlign: 'center',
                                color: 'white',
                                fontSize: '12px',
                                mt: '8px',
                                color: 'white',
                            }}
                        >
                            Clinical Consultant
                        </Typography>
                        <Typography
                            sx={{
                                width: '250px',
                                textAlign: 'center',
                                color: 'white',
                                fontSize: '9px',
                                mt: '8px',
                                color: 'white',
                            }}
                        >
                            Behavior Therapist & Clinical Psychologist<br />
                            BCP, PGDCP, MPhil (IPP, BUKC)
                        </Typography>
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

                    <Box sx={{ position: 'absolute', top: '339%', right: '8%' }}>
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





        </>
    );

}
