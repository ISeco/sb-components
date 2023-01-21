/// <reference types="react" />
import "./mylabel.css";
export interface Props {
    /**
     * Este es el mensaje a mostrar en el label
     */
    label: string;
    /**
     * Estos son los tamaños que puede tener el label
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Esto permite dejar todo texto del label en mayúsculas
     */
    allCaps?: boolean;
    /**
     * Esto permite cambiar el color del label
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Color personalizado del label
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: Props) => JSX.Element;
