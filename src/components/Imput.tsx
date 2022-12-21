import { FC } from "react"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    customField: string;
}

export const Input: FC<Props> = ({onChange, value, placeholder}) => (
    <input onChange={onChange} value={value} placeholder={placeholder}/>
);
