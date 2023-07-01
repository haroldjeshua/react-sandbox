import { Variants } from "framer-motion";

export const animationStart = 4;

export const reveal: Variants = {
    hiddenVariant: { y: 50, opacity: 0 },
    revealedVariant: {
        y: 0,
        opacity: 1,
    }
}

export const decorRevealLeft: Variants = {
    hiddenDecor: { x: 50, opacity: 0 },
    revealedDecor: {
        x: 0,
        opacity: 1,
    }
}

export const decorRevealRight: Variants = {
    hiddenDecor: { x: -50, opacity: 0 },
    revealedDecor: {
        x: 0,
        opacity: 1,
    }
}