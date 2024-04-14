import Card from '@/components/CardComponent';
import { categories } from '@/components/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: "Portfolio | Ícaro Alves",
    description: "Sobre o cientista de dados Icaro Alves",
};

const Portfolio = () => {
    return (
        <div className='flex flex-col gap-12 md:gap-16'>
            <h1 className='animate-in text-3xl text-center font-bold tracking-tight text-sky-800'>
                Portfolio
            </h1>

            <div className='animate-in space-y-4 text-center'>
                <p className='text-zinc-300'>
                    Aqui eu mostro alguns dos meus projetos:
                </p>
                <span className='text-zinc-500'>Pode clicar na categoria que deseja ver.</span>
            </div>

            <div className='mb-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-14'>
                {categories.map((category) => (
                    <Card key={category.id} disableHalo className='animate-in space-y-4'>
                        <Image 
                            src={category.image}
                            width={250}
                            height={250}
                            className='border border-sky-800 rounded-md mx-auto'
                        />
                        <p>{category.label}</p>
                        <Link href={category.href}>
                            <button className='bg-sky-800 rounded-md px-6 py-2 mt-4'>Ver</button>
                        </Link>
                    </Card>                    
                ))}
            </div>
        </div>
    )
}

export default Portfolio