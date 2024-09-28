import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import Map from './components/Map';
import RideSelector from "./components/RideSelector";
import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';

const Confirm = () => {
    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

    const router = useRouter();
    const { pickup, dropoff } = router.query;

    useEffect(() => {
        const getPickupCoordinates = async (pickup) => {
            const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=pk.eyJ1IjoiZGl1bGlhbm5lIiwiYSI6ImNsenU0anI4djJxcHUyaXBsYXA0aHdhMGkifQ._s6lY9ygCFtpuA9_fKjj1Q`);
            const data = await response.json();
            setPickupCoordinates(data.features[0]?.geometry?.coordinates || [0, 0]);
        };

        const getDropoffCoordinates = async (dropoff) => {
            const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?access_token=pk.eyJ1IjoiZGl1bGlhbm5lIiwiYSI6ImNsenU0anI4djJxcHUyaXBsYXA0aHdhMGkifQ._s6lY9ygCFtpuA9_fKjj1Q`);
            const data = await response.json();
            setDropoffCoordinates(data.features[0]?.geometry?.coordinates || [0, 0]);
        };

        if (pickup) getPickupCoordinates(pickup);
        if (dropoff) getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);

    return (
        <Wrapper>
            <ButtonLocationContainer>
                <ButtonContainer>
                    <Link href="/search">
                        <ArrowLeftCircleIcon className="h-12 w-12" style={{ fill: 'url(#gradientStroke)' }} />
                    </Link>
                </ButtonContainer>
                <LocationContainer>
                    <FromToIcons>
                        <Circle src="https://i.ibb.co/zm1wtP7/Ellipse-7.png" />
                        <Line src="https://i.ibb.co/25yDb1g/Line-1.png" />
                        <Square src="https://i.ibb.co/g94K99N/Rectangle-8.png" />
                    </FromToIcons>
                    <InputBox>
                        <PickUpLocation>{pickup ? pickup : "Carregando..."}</PickUpLocation>
                        <DropOffLocation>{dropoff ? dropoff : "Carregando..."}</DropOffLocation>
                    </InputBox>
                </LocationContainer>
            </ButtonLocationContainer>
            <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
            <RideContainer>
                <RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
                <ConfirmButtonContainer>
                    <ConfirmButton>Confirmar</ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    );
};

export default Confirm;

const ButtonLocationContainer = tw.div`
    flex items-center z-50 p-2 absolute top-4 w-full justify-center
`;

const FromToIcons = tw.div`
     flex flex-col mr-4 items-center
`;

const Circle = tw.img`
    h-2.5
`;

const Line = tw.img`
    h-6
`;

const Square = tw.img`
    h-2.5
`;

const ButtonContainer = tw.div`
    px-4
`;

const LocationContainer = tw.div`
    flex items-center w-full bg-white rounded-2xl p-1 pl-4 mr-4
`;

const InputBox = tw.div`
    flex flex-col flex-1 text-sm 
`;

const PickUpLocation = tw.div`
    flex items-center 
`;

const DropOffLocation = tw.div`
    flex items-center 
`;

const ConfirmButton = tw.div`
    bg-gradient-to-r from-start-gradient to-end-gradient text-white my-4 mx-4 py-4 text-center text-xl rounded-2xl
`;

const ConfirmButtonContainer = tw.div`
    border-t-2
`;

const Wrapper = tw.div`
    flex flex-col h-screen bg-white text-black  
`;

const RideContainer = tw.div`
    flex flex-1 flex-col h-1/2
`;
