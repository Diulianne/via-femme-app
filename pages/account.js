import React from 'react'
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth';
import { auth } from '../firebase';
import tw from "tailwind-styled-components";
import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import { useRouter } from "next/router";
import { StarIcon } from '@heroicons/react/20/solid';

function Account() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    name: user.displayName,
                    photoUrl: user.photoURL,
                });
            } else {
                setUser(null);
                router.push("/login");
            }
        });

        return () => unsubscribe();
    }, [router]);
    
  return (
      <Wrapper>
          <Header>
              <ButtonContainer>
                  <Link href="/">
                      <ArrowLeftCircleIcon className="h-12 w-12" style={{ fill: 'url(#gradientStroke)' }} />
                  </Link>
              </ButtonContainer>
              <UserName>{user && user.name}</UserName>
          </Header>

          <UserInformation>
              <UserImage src={user && user.photoUrl ? user.photoUrl : "https://i.ibb.co/MBtjqXQ/default-user-icon.png"} />
              <UserRate>
                  4.95
                  <StarIcon className="h-5 w-5" />
                </UserRate>
            </UserInformation>
            <SignOutButton onClick={() => signOut(auth)}>
                Sair
          </SignOutButton>
        </Wrapper>
  )
}

export default Account

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-white text-black
`;


const Header = tw.div`
flex items-center p-4 border-b-2
`;

const ButtonContainer = tw.div`
px-4
`;

const UserName = tw.h1`
text-2xl font-bold
`;

const UserInformation = tw.div`
flex flex-col items-center mt-20
`;

const UserImage = tw.img`
w-24 h-24 rounded-full
`;

const UserRate = tw.div`
flex items-center text-2xl font-normal bg-gray-100 rounded-2xl p-2
`;


const SignOutButton = tw.button`
 bg-gradient-to-r from-start-gradient to-end-gradient text-white text-center py-2 m-8 self-center text-2xl border-2 rounded-3xl w-2/4 
`;