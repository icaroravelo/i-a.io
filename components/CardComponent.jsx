"use client";
import clsx from "clsx";
import Halo from "@/components/ui/Halo";

export default function Card({
    children,
    className,
    disableHalo,
    noPadding,
    }) {
    return (
        <Halo
        strength={disableHalo ? 0 : 10}
        className={clsx(
            "h-full w-full overflow-clip rounded-2xl border border-secondary bg-slate-800 text-zinc-300 text-center text-sm shadow-sm",
            className,
            noPadding ? "p-0" : "p-4 md:p-6",
        )}
        >
        {children}
        </Halo>
    );
}
