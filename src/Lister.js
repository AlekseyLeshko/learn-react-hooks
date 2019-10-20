import React, { useState, useEffect } from 'react'

const Item = ({ item: { text } }) => (<div>--/{text}/--</div>)

const Counter = () => {
  const [arr, setArr] = useState([])
  const [textSearch, setTextSearch] = useState('')

  const addItem = () => {
    const list = [
      ...arr, {
      id: Date.now(),
      text: textSearch
    }]
    setArr(list)
    setTextSearch('')
  }

  const onChange = (event) => {
    setTextSearch(event.target.value)
  }

  useEffect(() => {
    console.log('effect:render');
    document.title = `You have ${arr.length} items`;
  }, [arr]);

  return (
    <div>
      <button onClick={addItem} disabled={!textSearch}>
        Add item
      </button>
      <input value={textSearch} onChange={onChange} />
      <div>
        {arr.map(item => (<Item key={item.id} item={item} />))}
      </div>
    </div>)
}

export default Counter
