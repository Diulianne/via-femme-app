import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Link from "next/link";
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from "next/router";
import { HomeIcon } from '@heroicons/react/20/solid';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { ChevronRightIcon } from '@heroicons/react/20/solid';


export default function Home() {
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
      <ActionItems>
        <Header >
          <Head >
            <LogoCarImg src="https://i.ibb.co/WtLx6Ns/Captura-de-tela-2024-05-14-085200-removebg-preview.png" />
            Viagens
          </Head>
        </Header>

        <SearchContainer>
          <Link href="/search">
            <InputButton>
              <MagnifyingGlassIcon className="h-6 w-6" />
              Para onde vamos?
            </InputButton>
          </Link>
        </SearchContainer>

        <RecentLocationsContainer>
          <RecentLocations>
            <MapPinIcon className="h-10 w-10 bg-gray-200 p-2 rounded-full text-gray-600" />
            <LocationDetails>
              <span className="text-2xl">Fatec Zona Sul</span>
              <Address>Rua Frederico Grotte, 322...</Address>
            </LocationDetails>
            <ChevronRightIcon className="h-6 w-6 text-gray-400 absolute right-0" />
          </RecentLocations>
          <RecentLocations>
            <MapPinIcon className="h-10 w-10 bg-gray-200 p-2 rounded-full text-gray-600" />
            <LocationDetails>
              <span className="text-2xl">Fatec Zona Sul</span>
              <Address>Rua Frederico Grotte, 322...</Address>
            </LocationDetails>
            <ChevronRightIcon className="h-6 w-6 text-gray-400 absolute right-0" />
          </RecentLocations>
        </RecentLocationsContainer>
      </ActionItems>

      <MapContainer>
        <Map />
      </MapContainer>

      <ActionButtons>

        <Link href="">
          <ActionButton>
            <HomeIcon className="h-6 w-6" />
            Início
          </ActionButton>
        </Link>

        <Link href="">
          <ActionButton>
            <CreditCardIcon className="h-6 w-6" />
            Pagamento
          </ActionButton>
        </Link>

        <Link href="">
          <ActionButton>
            <ClockIcon className="h-6 w-6" />
            Atividade
          </ActionButton>
        </Link>

        <Link href="">
          <ActionButton>
            <UserCircleIcon className="h-6 w-6" onClick={() => signOut(auth)} />
            Conta
          </ActionButton>
        </Link>
      </ActionButtons>
    </Wrapper>
  );
}


const Wrapper = tw.div`
  flex flex-col h-screen w-screen bg-white
`;

const ActionItems = tw.div`
   flex flex-col p-4 
`;

const Header = tw.div`
  flex justify-center items-center border-b-2 border-customGray text-2xl font-raleway font-bold
`;

const Head = tw.div`
  flex items-center
`;

const LogoCarImg = tw.img`
  w-10 h-12
`;

const SearchContainer = tw.div``;

const InputButton = tw.div`
  w-full px-4 py-5 mx-auto my-2 flex items-center bg-customGray2 rounded-full text-xl
`;

const RecentLocationsContainer = tw.div`
  space-y-4 mt-4 mb-6 ml-4 
`;

const RecentLocations = tw.div`
  flex items-center space-x-4 relative 
`;
const LocationDetails = tw.div`
  flex flex-col
`;

const Address = tw.span`
  text-lg text-gray-500
`;
const ActionButtons = tw.div`
  flex justify-around bg-white p-4 fixed bottom-0 w-full border border-gray-300 h-16
`;

const MapContainer = tw.div`
  flex h-full border-2 border-[#C8C8C8] rounded-2xl mb-16
`;

const ActionButton = tw.div`
  flex flex-col items-center justify-center transform hover:scale-105 transition text-xl cursor-pointer
`;


// const Profile = tw.div`
//   flex items-center
// `

// const Name = tw.div`
//   mr-4 text-sm px-2 py-1 rounded
// `

// const UserImage = tw.img`
//   w-12 h-12 rounded-full border border-gray-200 p-px
// `



