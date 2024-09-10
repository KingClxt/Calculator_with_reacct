/* eslint-disable no-case-declarations */
import { useReducer } from "react"
import Body from "./components/Body"
import Header from "./components/Header"
import { createContext } from "react"
import { useContext } from "react"

const initialState = {
    nb1:0,
    operation:'',
    currentValue:0
}
function reducer(state, action){
    switch(action.type){
        case 'change':
            return {
                ...state,
                currentValue:parseInt(state.currentValue+action.payload.value)+''
            }
        case "delete":
            return {
                ...state,
                currentValue: state.currentValue.split('').slice(0, -1).join("")
            }
        case "operation":
            let result = 0
            switch(state.operation){
                    case '+':
                        result = parseInt(state.currentValue) + parseInt(state.nb1)
                        break
                    case '':
                        result = parseInt(state.currentValue) + parseInt(state.nb1)
                        break
                    
                    case '-':
                        result = parseInt(state.nb1) - parseInt(state.currentValue)
                        break
                    case '/':
                        result = parseInt(state.nb1) / parseInt(state.currentValue)
                        break
                    case 'x':
                        result = parseInt(state.currentValue) * parseInt(state.nb1)
                        break
                    
            }
            return {
                ...state,
                operation:action.payload,
                
                nb1:result,
                currentValue: 0
            }
        case "deleteAll":
            return{
                ...state,
                operation:'',
                currentValue:0,
                nb1:0
            }
        case "result":
            let resultat = 0
            switch(state.operation){
                case '+':
                    resultat = parseInt(state.currentValue) + parseInt(state.nb1)
                    break
                case '':
                    resultat = parseInt(state.currentValue) + parseInt(state.nb1)
                    break
                
                case '-':
                    resultat = parseInt(state.nb1) - parseInt(state.currentValue)
                    break
                case '/':
                    resultat = parseInt(state.nb1) / parseInt(state.currentValue)
                    break
                case 'x':
                    resultat = parseInt(state.currentValue) * parseInt(state.nb1)
                    break
        }
        return {
            ...state,
            currentValue:0,
            operation:'',
            nb1:resultat
        }
    }
}

const contextCalculatrice = createContext(null)
export const useCalcul = ()=>{
    const context = useContext(contextCalculatrice)
    if(!context) return null
    return context
}
function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
    const handleChange = (value) =>{
        dispatch({type:"change", payload:{value:value}})
    }
    const handleDel = ()=>{
        dispatch({type:"delete"})
    }
    const handleAdd = (operation)=>{
        dispatch({type:"operation", payload:operation})
    }
    const handleDeleteAll = ()=>{
        dispatch({type:"deleteAll"})
    }
    const handleResult = ()=>{
        dispatch({type:"result"})
    }
    return <contextCalculatrice.Provider value={{
                state,
                handleChange,
                handleDel,
                handleAdd,
                handleDeleteAll,
                handleResult
    }}>
            <div className="flex justify-center h-screen items-center">
            <div className="w-1/4 ">
                <Header  />
                <Body />
                </div>
            </div>
        </contextCalculatrice.Provider>
        

}
export default App
