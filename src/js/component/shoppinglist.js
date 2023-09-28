import React, {useState} from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const handleClick=((item) => {
    setItems(items.filter((i) => i !== item))})

  return (
    <div className="wrapper">
      <h1>todos</h1>
      <div className="row">
      <div className="container col-sm-8">
            <InputText className="input-item" items={items} handleSubmit={(item) => {
              setItems(items.concat(item));
            }}/>
            <ul>
              {items.map((item, index) => 
              <li className="todoitem d-flex justify-content-between" key={index}>{item}
                <button className="deletebtn" onClick={() => {handleClick(item)}}>X</button>
              </li>
              )}
            </ul>
          <div className="counter">
            {items.length == null ? 0: items.length} items left
          </div>
      </div>
      <div className="subcontainerone"></div>
      <div className="subcontainertwo"></div>
      </div>
    </div>
  )
}

const InputText = (props) => {
  const [value, setValue] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      {value === "" ? "" : props.handleSubmit(value.trim())};
      setValue('');
      }}>
      <input type="text" value={value} placeholder={props.items.length == 0 ? "No tasks, add a task" : "What needs to be done?"} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

export default ShoppingList;