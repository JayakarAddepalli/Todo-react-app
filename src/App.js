import './App.css';
import HomePage from './components/Home';
import { useState } from "react";


function App() {

  let userdata = document.getElementById('userdata');

  let [data, setData] = useState([])
  let [getIndex, setIndex] = useState(null)
  let [buttonText, setButtonText] = useState('Add')

  let [stateModel, setStateModel] = useState(false)

  let [activeModel, setActiveModel] = useState(false)
  let [updateArray, setUpdateArray] = useState([])

  let [completeModel, setCompletedModel] = useState(false)
  let [CompletedArray, setCompletedArray] = useState([])

  const Delete = (e, index)=>{
    e.stopPropagation()
    if (index != null){
      
      const newArray = [...data]
      newArray.splice(index, 1)
      setData(newArray)


      setButtonText('Add')

    }
  }

  const Edit = (e, index)=>{
    e.stopPropagation()
    setIndex(index)
    setButtonText('Update')
    userdata.value = data[index].text;
  }

  const handleClick = (e, index) =>{
    e.preventDefault()
    let ud = document.getElementById('userdata');

    if(buttonText === 'Update'){
        let valueData = ud.value
        if(valueData.length !== 0){
          data[index].text = ud.value
        }
        else{
          setStateModel(true)
        }
        setButtonText('Add')
        
    }
    else{
      let valueData = ud.value
      valueData.length !== 0 ? setData([...data, { text: ud.value, completed: false }]) : setStateModel(true)
    }
    ud.value = ''
  }

  const changeColor = (index)=>{
    const newData = data.map((item, i)=>{
      if (i===index){
        return {...item, completed:!item.completed};
      }
      return item;
    })

    setData(newData)
    
  }

  const onActive = ()=>{
    
    // console.log(data.filter((i)=>{ return i.completed === false}) );
    const newUpdate = data.filter(i=> i.completed === false)
    setUpdateArray(newUpdate)
    console.log(newUpdate);
    setActiveModel(true)
    setCompletedModel(false)
    setCompletedArray([])
  }

  const onComplete = ()=>{
    const completeArr = data.filter(i => i.completed === true )

    setCompletedArray(completeArr)
    setActiveModel(false)
    setCompletedModel(true)
    setUpdateArray([])
  }

  const AllEle = ()=>{
    setActiveModel(false)
    setCompletedModel(false)
    setUpdateArray([])
    setCompletedArray([])
  }

  return (
    <div className="App">
      <HomePage ondeleteContent = {Delete} onEdit = {Edit} onHandle = {handleClick} data = {data} indexValue = {getIndex} buttonContent = {buttonText} onChangeColor = {changeColor} stateModel = {stateModel} setStateModel = {setStateModel} onActiveElement = {onActive} onCompletedElement = {onComplete} AM = {activeModel} onupdateArray = {updateArray} CM = {completeModel} onCompletedArray = {CompletedArray} onALL = {AllEle} />
    </div>
  );
}

export default App;
