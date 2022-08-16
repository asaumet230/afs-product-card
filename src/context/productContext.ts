import { createContext } from "react";

// Interface:
import { ContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext<ContextProps>({} as ContextProps);