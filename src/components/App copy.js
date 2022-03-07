import React, { useState, memo, useCallback } from 'react';
import FilterableProductTable from './FilterableProductTable'
{/* <FilterableProductTable products={PRODUCTS} /> */}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
}

const ChildArea = memo((props) => {
  const { isDisplay, onClickCloseDisplay } = props
  const data = [...Array(2000).keys()]
  data.forEach(() => {
    console.log('ChildArea is rendering...')
  })

  return (
    <div>
      { isDisplay ? (
        <div style={style}>
          <p>child component</p>
          <button onClick={onClickCloseDisplay}>close</button>
        </div>
      ) : null}
    </div>
  )
})

function App() {
  const [ text, setText ] = useState('')
  const onChangeText = (e) => setText(e.target.value)

  const [ isDisplay, setIsDispaly ] = useState(true)
  const onClickIsDisplay = () => setIsDispaly(!isDisplay)
  const onClickCloseDisplay = useCallback(() => setIsDispaly(false), [setIsDispaly])

  return (
    <div>
      <div>
        <input value={text} onChange={onChangeText} />
        <p>{ text }</p>
      </div>
      <div>
        <button onClick={onClickIsDisplay} >display</button>
        <ChildArea isDisplay={isDisplay} onClickCloseDisplay={onClickCloseDisplay} />
      </div>
    </div>
  );
}

export default App;
