import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const metadata = {
    title: "404 | Ícaro Alves",
    description: "Eita! Essa página não existe",
};

const Custom404 = () => (
    <div className="flex flex-col gap-2 p-[2rem]">
        <h1 className="text-3xl font-bold tracking-tight text-sky-800">404</h1>
        <p className="text-secondary">
            Uh oh! Esta página não existe, talvez você tenha clicado em um link antigo ou
            digitou errado. Tente novamente...
        </p>
        <div className="h-2" />
        <Link href="/" underline className="text-zinc-300 flex items-center space-x-2 hover:text-zinc-500 transition-all duration-700">
            <ArrowLeftIcon />
            <span>Voltar para a página principal</span>
        </Link>
    </div>
);

export default Custom404;