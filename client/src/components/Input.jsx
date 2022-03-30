const Input = ({placeholder, name, type, value, handleChange}) => {
    return(
        <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(event) => handleChange(event, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-small white-glassmorphism"
        />
    )
}

export default Input