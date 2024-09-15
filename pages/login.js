import React, { useEffect } from 'react'
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";


function Login() {
    const router = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/");
            }
        });
    }, []);

    return (
        <Wrapper>
            <HeadImage src="https://i.ibb.co/31Z83RN/viafemme-logo-com-carro.png" />
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>
                Log in com Google
            </SignInButton>
        </Wrapper>

    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-white p-4 justify-center
`;

const SignInButton = tw.button`
bg-start-gradient text-white text-center py-5 mt-5 self-center w-3/4 text-2xl 
`;

const HeadImage = tw.img`
object-contain w-full 
`;