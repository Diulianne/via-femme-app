import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Link from "next/link";
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from "next/router";

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
      <Map />
      <ActionItems>
        <Header>

          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl ? user.photoUrl : "https://i.ibb.co/MBtjqXQ/default-user-icon.png"}
            onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" /> Ride
            </ActionButton>
          </Link>
          <Link href="">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" /> Wheels
            </ActionButton>
          </Link>
          <Link href="">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" /> Reserve
            </ActionButton>
          </Link>
        </ActionButtons>

        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center mb-4
`


const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 text-sm px-2 py-1 rounded
`

const UserImage = tw.img`
  w-12 h-12 rounded-full border border-gray-200 p-px
`


const ActionButtons = tw.div`
  flex justify-center
`;

const ActionButton = tw.div`
  flex flex-col bg-gray-200 m-1 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-4 rounded-lg
`
