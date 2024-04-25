import Card from '@/components/CardComponent'
import { educations } from '@/components/constants'
import React from 'react'

const EducationPage = () => {
    return (
        <div>
            <h1 className='animate-in text-3xl text-center font-bold tracking-tight text-sky-800'>Educação</h1>

            <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-10'>
                {/* Conteúdo da página de educação */}
                {educations.map((education) => (
                    <div  key={education.id}>
                        <Card className='animate-in space-y-4 text-center'>
                            <h3 className='text-2xl'>{education.name}</h3>
                            <div className='flex flex-col'>
                                <span>{education.course}</span>
                                <span>{education.status}</span>
                                <span>{education.started}</span>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationPage