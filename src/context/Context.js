
import React from 'react'
import {useState,useContext} from 'react'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
  const [isAddTodo, setIsAddTodo] = useState(true)
  const [editInfo, setEditInfo] = useState({
    toggle: true,
    taskContent: "",
    id:""
  })

  const toggleAddTodo = (task) => {
    setEditInfo({...editInfo,toggle:false,taskContent:task.title,id:task.id})
  }
  console.log(editInfo)
  return(
    <AppContext.Provider value={{toggleAddTodo,editInfo}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}