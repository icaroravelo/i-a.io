import Image from "next/image";

import Avatar from "../public/avatar2-bw.jpg";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import CardComponent from "@/components/CardComponent";
import { gear } from "@/components/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-24">
      <div className="flex animate-in flex-col gap-8 mx-auto p-[2rem]">
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
            Atualmente, focado em ampliar conhecimentos em Ciência de Dados.
          </p>
        </div>
      </div>

      <div className="grid animate-in grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-8 md:ml-24 px-[2rem]">
        <div className="h-full w-full overflow-clip rounded-2xl border border-secondary bg-slate-800 text-sm shadow-sm">
          <Link href={'https://github.com/icaroravelo'} target="_blank"
            className="flex h-full w-full flex-col items-center justify-center gap-4"
          >
            <GitHubLogoIcon color="white" height={32} width={24} />
            <span className="text-zinc-300">GitHub</span>
          </Link>
        </div>

        <div className="h-full w-full overflow-clip rounded-2xl border border-secondary bg-slate-800 text-sm shadow-sm">
          <Link href={'https://www.linkedin.com/in/icaro-alves-46429b164/'} target="_blank"
            className="flex h-full w-full flex-col items-center justify-center gap-4"
          >
            <LinkedInLogoIcon color="white" height={32} width={24} />
            <span className="text-zinc-300">LinkedIn</span>
          </Link>
        </div>
      </div>

      <div className="flex animate-in flex-col gap-8 p-[2rem]">
        <h2 className="text-sky-800 text-2xl text-center font-medium">Meu equipamento</h2>
        <div className="grid animate-in grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-8 px-[2rem]">
          {gear.map((item) => (
            <CardComponent>
              <h3>{item.name}</h3>
              <span>{item.brand} - {item.model}</span>
              <Image src={item.image} width={100} height={100} alt={item.name} style={{ margin: '10px auto', borderRadius: '10px'}} />
            </CardComponent>
          ))}
        </div>
      </div>
    </div>
  );
}
