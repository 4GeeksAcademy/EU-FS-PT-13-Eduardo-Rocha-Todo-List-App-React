import React, {useState} from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([
    "oranges", "apples", "candy"
  ]);
  return (
    <div className="wrapper">
      <h1>todos</h1>
      <div className="row">
      <div className="container col-sm-8">
            <InputText className="input-item" handleSubmit={(item) => {
              setItems(items.concat(item));
            }}/>
            <ListDisplay className="list-item" items={items} handleClick={(item) => {
              setItems(items.slice().filter((i) => i !== item));
            }}/>
          <div className="counter">
            <h5>x items left</h5>
          </div>
      </div>
      <div className="subcontainerone"></div>
      <div className="subcontainertwo"></div>
      </div>
    </div>
  )
}

const ListItem = (props) => (
  <li onClick={()=> props.handleClick(props.name)}>{props.name}</li>
)

const ListDisplay = (props) => {
  const items = props.items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
      handleClick={props.handleClick}
    />
  ))
  return (
    <ul>
      {items}
    </ul>
  )
}

const InputText = (props) => {
  const [value, setValue] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit(value);
      setValue('');
    }}>
    <input type="text" value={value} placeHolder="What needs to be done?" onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

export default ShoppingList;