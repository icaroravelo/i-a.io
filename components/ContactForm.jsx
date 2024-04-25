import React, { useState } from 'react';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/c5f92240-033a-11ef-a9e0-3721c124b74c"; // TODO - update to the correct endpoint 

function ContactForm() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        const injectedData = {};

        const inputs = Array.from(form.elements);
        const data = inputs
            .filter((input) => input.name)
            .reduce((obj, input) => {
                obj[input.name] = input.value;
                return obj;
            }, {});

        Object.assign(data, injectedData);

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.status === 422) {
                    Object.keys(injectedData).forEach((key) => {
                        const el = document.createElement('input');
                        el.type = 'hidden';
                        el.name = key;
                        el.value = injectedData[key].toString();

                        form.appendChild(el);
                    });

                    form.setAttribute('target', '_blank');
                    form.submit();

                    throw new Error('Por favor, confirme o captcha');
                }

                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => setStatus("Enviado com sucesso!"))
            .catch((error) => setStatus(error.toString()));
    };

    return (
        <div className="md:w-96 md:max-w-full w-full mx-auto animate-in mt-10">
            <div className="sm:rounded-md p-6 border border-gray-500 rounded-xl">
                {status && (
                    <div className='md:w-96 w-full mx-auto mb-4'>
                        <div className='sm:rounded-md p-6 border border-gray-300'>
                            <div className='text-2xl text-sky-800'>Obrigado!</div>
                            <div className='text-md text-green-500'>{status}</div>
                        </div>
                    </div>
                )}
                <form action="https://public.herotofu.com/v1/c5f92240-033a-11ef-a9e0-3721c124b74c" method="post" acceptCharset="UTF-8" onSubmit={handleSubmit}>
                    <label className="block mb-6">
                        <span className="text-gray-500">Nome</span>
                        <input
                            type="text"
                            name="name"
                            className="bg-slate-800 text-zinc-300 focus:border-indigo-300 focus:text-zinc-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                        />
                    </label>

                    <label className="block mb-6">
                        <span className="text-gray-500">Email</span>
                        <input
                            name="email"
                            type="email"
                            className="bg-slate-800 text-zinc-300 focus:text-zinc-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>

                    <label className="block mb-6">
                        <span className="text-gray-500">Assunto</span>
                        <input
                            name="subject"
                            type="text"
                            className="bg-slate-800 text-zinc-300 focus:text-zinc-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                        />
                    </label>

                    <label className="block mb-6">
                        <span className="text-gray-500">Mensagem</span>
                        <textarea
                            name="message"
                            className="bg-slate-800 text-zinc-300 focus:text-zinc-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                            rows={3}
                        ></textarea>
                    </label>
                    <div className="mb-2">
                        <button
                            type="submit"
                            className=" focus:shadow-outline hover:bg-sky-900 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-sky-800 rounded-lg"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
