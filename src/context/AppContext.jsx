import { createContext, useEffect, useState } from "react";
import { navItems,notesBook } from "../data"; 
import { getData } from "./ApiConector";
import { projectAPI,prevQuestionApi,placementApi } from "./AllApi";
 

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [navItems1,setNavItems1] = useState(navItems);
    const [notesBook1,setNotesBook1] = useState(notesBook);
    const [privateRoute, setPrivateRoute] = useState(false);
    

    const [projectList,setProjectList] = useState();
    const [loading, setLoading] = useState(false);
    const [feedbackFormData, setFeedBackFormData] = useState();
    const [subNotes, setSubNotes] = useState();
     
    const value = {
    navItems1,
    notesBook1,
    projectList,
    loading,
    feedbackFormData,
    privateRoute,
    setPrivateRoute,


    // get function 
    getAllProject,
    getAllFeedback,

    getFirstSem,
    getSecondSem,
    getThirdSem,
    getFourthSem,
    getFifthSem,
    getSixthSem,
    getSeventhSem,
    getEighthSem,
    subNotes,

    getFirstSemQuest,
    getSecondSemQuest,
    getThirdSemQuest,
    getFourthSemQuest,
    getFifthSemQuest,
    getSixthSemQuest,
    getSeventhSemQuest,
    getEighthSemQuest,

    getPlacementCell
     
    

};

async function getAllProject() {
    setLoading(true);
    const result = await getData(projectAPI.GETPROJECT);
    const dataArray = result.data;
    console.log(dataArray);
    setLoading(false);
    setProjectList(dataArray);
  }

// ----------------- getFeedbackFormData -----------------------

async function getAllFeedback(){
    setLoading(true);
    const response = await getData(projectAPI.GETFEEDFORM);
    const result = response.data;
    setLoading(false);
    setFeedBackFormData(result);
    console.log(result);
}

//----------------- get Semester Notes Data ------------------------
async function getFirstSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETFIRSTSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
  //  console.log("firstsem",result);
}
async function getSecondSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETSECONDSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
  //  console.log("Secondsem",result);
}
async function getThirdSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETTHIRDSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
   // console.log("thirdsem",result);
}
async function getFourthSem(){
    setLoading(true);
   // console.log("FOURTHG",projectAPI.GETFOURTHSEM);
    const response = await getData(projectAPI.GETFOURTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
  //  console.log("fourth",result);
}
async function getFifthSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETFIFTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
  //  console.log("fifth",result);
}
async function getSixthSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETSIXTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    //console.log("sixth",result);
}
async function getSeventhSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETSEVENTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
  //  console.log("seventn",result);
}
async function getEighthSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETEIGHTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
   // console.log("eigth",result);
}
// ------------------------- end ------------------------------------
// ---------------------- placement Cell ----------------------------------
async function getPlacementCell(){
    setLoading(true);
    const response = await getData(placementApi.GETPLACEMENTCELL);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
   // console.log("eigth",result);
}


// ------------------ Prevoius Year Question Paper --------------------------------
async function getFirstSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETFIRSTSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("firstsemQuest",result);
}
async function getSecondSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETSECONDSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("secondsemQuest",result);
}

async function getThirdSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETTHIRDSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("thirdsemQuest",result);
}

async function getFourthSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETFOURTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("FourthsemQuest",result);
}

async function getFifthSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETFIFTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("FifthsemQuest",result);
}
async function getSixthSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETSIXTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("sixthsemQuest",result);
}

async function getSeventhSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETSEVENTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("SeventhsemQuest",result);
}
async function getEighthSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETEIGHTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("EigthsemQuest",result);
}

// useEffect( () =>{
//     getThirdSemQuest();
//     getFourthSemQuest();
//     getFifthSemQuest();
//     getSixthSemQuest();
//     getSeventhSemQuest();
//     getEighthSemQuest();
// },[]);



   

return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>


}

 