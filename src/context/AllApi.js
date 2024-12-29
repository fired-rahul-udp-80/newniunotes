const BASE_URL = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;
// console.log(`Base url : ${import.meta.env.VITE_REACT_APP_BASE_URL}`)
export const projectAPI = {
    SENDPROJECT :BASE_URL + "/createProject",
    GETPROJECT : BASE_URL + "/getAllProject",
    // ------------------------------
    GETFEEDFORM : BASE_URL + "/getAllFeedback",
    SENDFEEBACK : BASE_URL + "/createFeedback",
    //----------------subject notes api--------------------------
    GETFIRSTSEM : BASE_URL + "/getFirstSem",
    GETSECONDSEM : BASE_URL + "/getSecondSem",
    GETTHIRDSEM : BASE_URL + "/getThirdSem",
    GETFOURTHSEM : BASE_URL + "/getFourthSem",
    GETFIFTHSEM : BASE_URL + "/getFifthSem",
    GETSIXTHSEM : BASE_URL + "/getSixthSem",
    GETSEVENTHSEM : BASE_URL + "/getSeventhSem",
    GETEIGHTHSEM : BASE_URL + "/getEighthSem",
    // ------------------------------------
    POSTFIRSTSEM:BASE_URL + "/createFirstSem",
    POSTSECONDSEM:BASE_URL + "/createSecondSem",
    POSTTHIRDSEM:BASE_URL + "/createThirdSem",
    POSTFOURTHSEM:BASE_URL + "/createFourthSem",
    POSTFIFTHSEM:BASE_URL + "/createFifthSem",
    POSTSIXTHSEM:BASE_URL + "/createSixthSem",
    POSTSEVENTHSEM:BASE_URL + "/createSeventhSem",
    POSTEIGHTHSEM:BASE_URL + "/createEighthSem",
    //------------------------------------
    DELETETHIRDSEM : BASE_URL + "/deleteThirdSem", 
    //------------ end -------------------------
}

export const prevQuestionApi = {
    // get Api Previous Year question paper
    GETFIRSTSEMQUEST : BASE_URL + "/getFirstSemQuest",
    GETSECONDSEMQUEST : BASE_URL + "/getSecondSemQuest",
    GETTHIRDSEMQUEST : BASE_URL + "/getThirdSemQuest",
    GETFOURTHSEMQUEST : BASE_URL + "/getFourthSemQuest",
    GETFIFTHSEMQUEST : BASE_URL + "/getFifthSemQuest",
    GETSIXTHSEMQUEST : BASE_URL + "/getSixthSemQuest",
    GETSEVENTHSEMQUEST : BASE_URL + "/getSeventhSemQuest",
    GETEIGHTHSEMQUEST : BASE_URL + "/getEighthSemQuest",
    // ----------------- end -------------------------
    POSTFIRSTSEMQUEST:BASE_URL + "/createFirstSemQuest",
    POSTSECONDSEMQUEST:BASE_URL + "/createSecondSemQuest",
    POSTTHIRDSEMQUEST:BASE_URL + "/createThirdSemQuest",
    POSTFOURTHSEMQUEST:BASE_URL + "/createFourthSemQuest",
    POSTFIFTHSEMQUEST:BASE_URL + "/createFifthSemQuest",
    POSTSIXTHSEMQUEST:BASE_URL + "/createSixthSemQuest",
    POSTSEVENTHSEMQUEST:BASE_URL + "/createSeventhSemQuest",
    POSTEIGHTHSEMQUEST:BASE_URL + "/createEighthSemQuest",
    

}
export const placementApi = {
    POSTPLACEMENTCELL : BASE_URL + "/createPlacementCellNotes",
    GETPLACEMENTCELL  : BASE_URL + "/getAllPlacementCellNotes"
}
