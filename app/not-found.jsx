import Link from "next/link";


export const metadata = {
    title: "404 | Ícaro Alves",
    description: "Eita! Essa página não existe",
};

const Custom404 = () => (
    <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-sky-800">404</h1>
        <p className="text-secondary">
            Uh oh! Esta página não existe, talvez você tenha clicado em um link antigo ou
            digitou errado. Tente novamente...
        </p>
        <div className="h-2" />
        <Link href="/" underline className="text-zinc-500">
            Voltar para a página principal
        </Link>
    </div>
);

export default Custom404;