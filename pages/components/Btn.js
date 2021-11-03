export default function Home(props) {
    return (
        <button className={`text-white bg-red-700 inline-block font-bold px-4 py-2 hover:bg-opacity-60 transition-all ease-in-out duration-300 ${props.classes ? props.classes : ''} `}>
            {props.text}
        </button>
    )
}