import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import Map from './components/Map';
import RideSelector from "./components/RideSelector";
import Link from 'next/link';


const Confirm = () => {
    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);


    const router = useRouter();
    const { pickup, dropoff } = router.query;

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${pickup}&limit=1&access_token=pk.eyJ1IjoiZGl1bGlhbm5lIiwiYSI6ImNsenU0anI4djJxcHUyaXBsYXA0aHdhMGkifQ._s6lY9ygCFtpuA9_fKjj1Q`
        )
            .then(response => response.json())
            .then(data => {
                setPickupCoordinates(data.features[0].geometry.coordinates);

            })
            
    };

    useEffect(() => {
        getPickupCoordinates();
    }, []);


    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${dropoff}&limit=1&access_token=pk.eyJ1IjoiZGl1bGlhbm5lIiwiYSI6ImNsenU0anI4djJxcHUyaXBsYXA0aHdhMGkifQ._s6lY9ygCFtpuA9_fKjj1Q`
        ) 
            // tiveram algumas mudanças aqui, no video é usado a versão 5 e aqui está sendo usada a 6, por isso o codigo está diferente
            .then(response => response.json())
            .then(data => {
                console.log('dropoff');
                
                setDropoffCoordinates(data.features[0].geometry.coordinates);
            //     tiveram algumas mudanças aqui, no video é usado .center e isso não existe mais
            })

    };

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <Map pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates} />
            {/* passa as coordenadas para o componente mapa */}
            <RideContainer>
                <RideSelector
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
               />
                  
                     
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                    
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>

    )
};

export default Confirm;

const ButtonContainer = tw.div`
bg-white z-50 border rounded-full p-2 absolute top-4 left-4 shadow-md
`
const BackButton = tw.img`
h-12 cursor-pointer 
`
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl rounded-lg
`
const ConfirmButtonContainer = tw.div`
border-t-2
`
const Wrapper = tw.div`
flex flex-col h-screen
`
const RideContainer = tw.div`
flex flex-1 flex-col h-1/2
`