import Image from "next/image";

import Avatar from "../public/avatar2-bw.jpg";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8 p-[2rem]">
        <Image
          src={Avatar}
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full bg-secondaryA"
        />
        <div
          className="animate-in space-y-4"
        >
          <h1 className="text-3xl font-bold tracking-tight text-zinc-300">
            Icaro Alves
          </h1>
          <p className="max-w-lg leading-relaxed text-secondary">
            Analista de dados com 2 anos de experiência em logística. 
            Desenvolvi estratégias que anteciparam carregamentos em até 1 semana. 
            Atualmente, focado em ampliar conhecimentos em Ciência de Dados e Automação de tarefas através do Python.
          </p>
        </div>
      </div>
      <div className="grid animate-in grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-8 px-[2rem]">
        <Link href={'https://github.com/icaroravelo'} target="_blank">
          <GitHubLogoIcon color="white" height={32} width={24} />
        </Link>

        <Link href={'https://www.linkedin.com/in/icaroravelo/'} target="_blank">
          <LinkedInLogoIcon color="white" height={32} width={24} />
        </Link>
      </div>
    </div>
  );
}
