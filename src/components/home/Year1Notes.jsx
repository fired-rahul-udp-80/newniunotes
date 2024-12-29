import React, { useContext ,useEffect} from 'react'
import NotesCard from './NotesCard'
import NotesTemplate from './NotesTemplate'
import { AppContext } from '../../context/AppContext'
const Year1Notes = ({notesBook1}) => {

    const {getFirstSem,getSecondSem} = useContext(AppContext);
    
    
  return (
    <div className="grid md:grid-cols-2 gap-10 px-5">
            <div className="itemDiv  flex flex-col mt-5 gap-y-5 xl:w-[550px]">
                    <div>
                        <NotesTemplate 
                        title="1st Semester" />
                     </div>   
                {
                  notesBook1.map((subNotes) => {
                        return (
                        <div key={subNotes.id} className="flex flex-col gap-y-5">
                            {  subNotes.firstDetails?.map(({title,id}) => {
                                return (<div key={id} className="">
                                     <NotesCard 
                                     title = {title} getNotes={getFirstSem} /> 
                                </div>)
                            
                            })}
                        </div>
                        )
                    })
                }
            </div>

                <div className="itemDiv  flex flex-col mt-5  gap-y-5">
                     <div>
                        <NotesTemplate 
                        title="2nd Semester" />
                     </div>
                {
                  notesBook1.map((subNotes) => {
                        return (
                        <div key={subNotes.id} className="flex flex-col gap-y-5">
                            {  subNotes.secondDetails?.map(({title,id}) => {
                                return (<div key={id} className="">
                                     <NotesCard 
                                     title = {title} getNotes={getSecondSem} /> 
                                </div>)
                            
                            })}
                        </div>
                        )
                    })
                }
                </div>
            </div>
  
  )
}

export default Year1Notes