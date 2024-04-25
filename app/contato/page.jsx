'use client'
import ContactForm from '@/components/ContactForm'
import React from 'react'

const ContactPage = () => {
    return (
        <div>
            <h1 className='animate-in text-3xl font-bold tracking-tight text-sky-800'>Contatos</h1>
            <ContactForm></ContactForm>
        </div>
    )
}

export default ContactPage