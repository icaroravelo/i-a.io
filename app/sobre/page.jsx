import React from 'react'
import { Metadata } from 'next'
import { about, stacks } from '@/components/constants';
import Image from 'next/image';
import Card from '@/components/CardComponent';

export const metadata = {
    title: "Sobre | Ícaro Alves",
    description: "Sobre o cientista de dados Icaro Alves",
};

const About = () => {
    return (
        <div className='flex flex-col gap-16 md:gap-24'>
                <h1 className='animate-in text-3xl font-bold tracking-tight text-sky-800'>
                    Sobre mim
                </h1>
                <div className='flex flex-col items-center max-w-sm md:max-w-[700px] mt-10'>
                    {about.map((item) => (
                        <div key={item.id}>
                            <Image 
                                src={item.image}
                                alt={item.name}
                                width={250}
                                height={250}
                                className='animate-in rounded-full mx-auto'
                            />
                            <p className='animate-in text-zinc-300 mt-10 w-80 md:max-w-[700px]'>{item.description}</p>
                        </div>
                    ))}
                </div>
                
                <div className='flex flex-col items-center mt-10'>
                    <h3 className='text-zinc-500'>Minhas stacks atuais são:</h3>
                    <div className='grid grid-cols-3 space-x-3 md:space-x-6 mt-12 mb-10'>
                        {stacks.map((stacks) => (
                            <div key={stacks.id} className='animate-in w-24'>
                                <Card>
                                    <h3>{stacks.name}</h3>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default About