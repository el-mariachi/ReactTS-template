import { FC } from "react"

export const Input: FC<any> = ({onChange, value, placeholder}) => (
    <input onChange={onChange} value={value} placeholder={placeholder}/>
);
