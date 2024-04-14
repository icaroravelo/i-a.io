"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Halo({
    children,
    size = 600,
    strength = 10,
    className,
    }) {

    return (
        <motion.div
        className={clsx("relative h-full w-full overflow-hidden", className)}
        whileHover="hover"
        >
        <motion.div
            style={{
            width: size,
            height: size,
            }}
            className={clsx(
            "pointer-events-none absolute inset-0 z-50 translate-x-[var(--x)] translate-y-[var(--y)] opacity-0 transition-opacity bg-slate-800"
            )}
        />
        {children}
        </motion.div>
    );
}
