/* eslint-disable react/prop-types */
import clsx from "clsx";

export default function Button({value, onClick, isRed}){
     return (
          <>
               <button onClick={!isRed?()=>onClick(value):()=>onClick()} className={clsx("btn", isRed?"btn-error":"btn-info", "w-full", "font-semibold")}>
                    {value}
               </button>
          </>
     )
}