

const InputWidget = ({ ph, label, type, multiple }) => {

    return (
    <span key={label}>
      <label>{label}</label>
      <input
        name={label}
        required
        type={type}
        placeholder={ph}
        {...type === 'file' ? multiple = false : ""} />
    </span>
    )
}

export default InputWidget