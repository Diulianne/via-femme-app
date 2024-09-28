import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import { HomeIcon } from '@heroicons/react/20/solid';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { BriefcaseIcon } from '@heroicons/react/20/solid';
import { StarIcon } from '@heroicons/react/20/solid'; 

function Search() {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    console.log(pickup);

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/">
                    {/* Link é um componente do next que faz a navegação entre as páginas, volta p home */}
                    <ArrowLeftIcon className="h-12 w-12"
                        style={{ fill: 'url(#gradientStroke)' }} />
                </Link>
            </ButtonContainer>

            <InputContainer>
                <FromToIcons>
                    <Circle src="https://i.ibb.co/zm1wtP7/Ellipse-7.png" />
                    <Line src="
                    https://i.ibb.co/25yDb1g/Line-1.png" />
                    <Square src="https://i.ibb.co/g94K99N/Rectangle-8.png" />
                </FromToIcons>
                <InputBoxes>
                    <Input
                        placeholder="Sua localização"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                    />
                    <Input

                        placeholder="Para onde?"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                    />
                </InputBoxes>
                <PlusCircleIcon
                    className="h-12 w-12 ml-1 mt-12"
                    style={{ fill: 'url(#gradientStroke)' }}
                />
            </InputContainer>

            <SavedPlaces>
                <div className="flex items-center space-x-1"> {/* Flex para alinhar ícone e texto, e space-x para um leve espaço */}
                    <HomeIcon className="h-5 w-5" />
                    <span>Casa</span>
                </div>
                <ChevronRightIcon className="h-5 w-5 ml-2" /> {/* Maior margem à esquerda */}

                <div className="flex items-center space-x-1">
                    <BriefcaseIcon className="h-5 w-5" />
                    <span>Trabalho</span>
                </div>
                <ChevronRightIcon className="h-5 w-5 ml-2" />

                <div className="flex items-center space-x-1">
                    <StarIcon className="h-5 w-5" />
                    <span>Favoritos</span>
                </div>
                <ChevronRightIcon className="h-5 w-5 ml-2" />
            </SavedPlaces>


            <Confirm>
                <Link href={{
                    pathname: "/confirm",
                    query: {
                        pickup: pickup,
                        dropoff: dropoff,
                    }
                }}>
                    <ConfirmButton>Confirmar</ConfirmButton>
                </Link>
            </Confirm>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-white h-screen
`
const ButtonContainer = tw.div`
px-4
`

const InputContainer = tw.div`
flex items-center px-4 mb-2
`
const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
` // flex - col faz os icones ficarem um embaixo do outro


const Circle = tw.img`
h-2.5
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-2.5
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-12 bg-customGray2 my-0.5 rounded-3xl p-3 outline-none border-none text-lg text-customGray3
`
const SavedPlaces = tw.div`
flex justify-around items-center py-3 text-gray-600 cursor-pointer
`

const Confirm = tw.div`
bg-gradient-to-r from-start-gradient to-end-gradient text-white my-4 mx-4 py-2 text-center text-xl rounded-2xl`

const ConfirmButton = tw.button`
text-white rounded text-center py-2 flex-1 
`