import Card from '@/components/CardComponent'
import { automationProjects } from '@/components/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AutomationPage = () => {
    return (
        <div className='flex flex-col gap-16 md:gap-24 p-[2rem]'>
            <h1 className='animate-in text-center text-3xl font-bold tracking-tight text-sky-800'>Automação</h1>

            <div className='grid grid-cols-3 gap-8'>
                {automationProjects.map((automation) => (
                    <Card key={automation.id}
                        className="anime-in space-y-4"
                    >
                        <h3 className='text-center text-2xl'>{automation.name}</h3>
                        <Image
                            src={automation.image} 
                            alt={automation.name} 
                            width={500} height={500} 
                            className='mx-auto rounded-lg'    
                        />
                        <p>{automation.description}</p>
                        <Link href={automation.href} target='_blank'>
                            <button className='bg-sky-800 rounded-md px-6 py-2 mt-4'>Ver mais</button>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default AutomationPage