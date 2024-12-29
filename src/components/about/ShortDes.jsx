import React from 'react'

const ShortDes = ({title,list, desc0, desc1, desc2, desc3,desc4,desc5}) => {
  return (
    <div className="flex flex-col gap-y-1">
        <h2 className="text-2xl font-bold font-titleFont text-bgColor">{title}</h2>
        
        <p className="font-medium">{desc0}</p>
        <ul className={`list-${list} pl-10`}>
            <li className="font-medium">{desc1}</li>
            <li className="font-medium">{desc2}</li>
            <li className="font-medium">{desc3}</li>
            <li className="font-medium">{desc4}</li>
            {
              desc5 != " " ? (
                <li className="font-medium">{desc5}</li>
              ):
              ""
            }
        </ul>
    
    </div>
  )
}

export default ShortDes