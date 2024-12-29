import React from 'react'
import {Link} from 'react-router-dom'
const Link = ({text, linkto}) => {
  return (
    <div>
        <Link to="linkto">
            <div className="text-white font-semibold font-titleFont text-md bg-Color rounded-md px-8 py-4">
                {text}
            </div>
        </Link>
    </div>
  )
}

export default Link