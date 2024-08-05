import './style.css'

export default function Chip (props: any) {
    return(
        <div className={`${props.color} w-fit px-4 rounded-full font-semibold
        dark:text-white transition-colors`}>{props.title || ""}</div>
    )
}