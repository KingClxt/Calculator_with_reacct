import { useCalcul } from "../../App"

export default function Input(){
     const {state} = useCalcul()
     return <>
          <div className="border  my-4 px-2 py-2 rounded">
               <div className="text-end my-2">
                    {'' + state.nb1 + state.operation}
               </div>
          <input 
               type="text" 
               name="current" 
               className=" w-full py-2 input input-bordered"
               readOnly
               value={state.currentValue}
          />
          </div>
          
     </>
}