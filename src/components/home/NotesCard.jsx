import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

const NotesCard = ({title, getNotes}) => {
  const {setPrivateRoute} = useContext(AppContext);
  const navigate = useNavigate();
  
  function getSemNotes(){
    getNotes();
    setPrivateRoute(true);
    if (title) {
      navigate('/semesterNotes', { state: { item: title } });
  }

  }
  
    
  return (
    <div className="flex flex-col ">
        
          <ul className=" ">
              
             <li onClick={getSemNotes} className=" py-3 sm:py-5 px-10 text-center bg-white shadow-lg rounded border-b-[10px] border-slate-200 border-r-[10px] cursor-pointer hover:bg-gray-100 hover:text-primaryColor font-bodyFont font-medium">{title}</li>
              
          </ul> 
        
    </div>
  )
}

export default NotesCard