const Options = props => {
  const {eachObjectProp} = props
  const {capitalDisplayText, id} = eachObjectProp

  return <option value={id}>{capitalDisplayText}</option>
}

export default Options
