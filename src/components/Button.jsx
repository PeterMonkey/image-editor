const Button = ({text, width, height, font, bg, click}) => {
    return(
        <button onClick={click} className={`flex ${bg} ${width} ${height} ${font} items-center justify-center border border-gray-400 rounded-md hover:opacity-70`}>
            {text}
        </button>
    )
}

export default Button