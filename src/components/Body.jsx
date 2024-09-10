/* eslint-disable react/jsx-key */

import { useCalcul } from "../App";
import Button from "./BodyComponent/Button";


export default function Body(){
     const {handleChange, handleDel, handleAdd, handleDeleteAll, handleResult} = useCalcul()
     return (
          <>
          <div className="grid grid-cols-4 my-2 gap-2 justify-items-center">
               <Button value="+" onClick={()=>handleAdd("+")} />
               <Button value="-" onClick={()=>handleAdd("-")}/>
               <Button value="x" onClick={()=>handleAdd("x")}/>
               <Button value="/" onClick={()=>handleAdd("/")}/>
          </div>
          <div className="grid grid-cols-3 justify-items-center gap-2">
               <Button value="1" onClick={handleChange} />
               <Button value="2" onClick={handleChange} />
               <Button value="3" onClick={handleChange} />
               <Button value="4" onClick={handleChange} />
               <Button value="5" onClick={handleChange} />
               <Button value="6" onClick={handleChange} />
               <Button value="7" onClick={handleChange} />
               <Button value="8" onClick={handleChange} />
               <Button value="9" onClick={handleChange}/>
               <Button value="00" onClick={handleChange} />
               <Button value="AC" onClick={handleDeleteAll}/>
               <Button value="DEL" onClick={handleDel} isRed />
          </div>
          <div className="my-2">
               <Button value="=" onClick={handleResult}  />
          </div>
          </>
         
          
         
     )
}