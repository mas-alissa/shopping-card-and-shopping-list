function InputField(props) {
  return (
    <input type="text" value={props.value} onChange={(e) => props.setValue(e.target.value)}/>
  )
}
export default InputField