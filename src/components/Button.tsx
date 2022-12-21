import { FC } from "react"

export const Button: FC<any> = ({onClick, children}) => (
    <button onClick={onClick}>
        {children}
    </button>
);
