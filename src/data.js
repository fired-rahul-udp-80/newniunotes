 
 
export const navItems = [
  {
    id :1,
    title : "Home",
    link : "/"
  },
  {
    id : 2,
    title : "About us",
    link : "/pages/about",
  },
  {
    id : 3,
    title : "Notes",
    link : "/pages/notes",
  },
  {
    id : 4,
    title : "Prev. Yr Ques.",
    link : "/pages/previous-year",
  },
  {
    id : 5,
    title : "Clg Web.",
    link : "https://niu.edu.in",
    
  },
  {
    id :6,
    title : "Feedback",
    link : "/pages/feedback",
  },

]

export const notesBook = [
  {
    id:101,
    title : "1st Year",
    firstDetails :[
      {
        id:911,
        title:"Mathematics –I ",
        courseCode : "BSC0101",
      },
      {
        id:921,
        title : "Chemistry-I",
        courseCode : "BSC0102"
      },
      {
        id:931,
        title : "Programming for Problem Solving",
        courseCode : "ESC0102"
      },
      {
        id:941,
        title : "English",
        courseCode : "HSMC0101"
      },
    ],
  secondDetails:[
    {
      id:951,
      title : " Physics",
      courseCode : "BSC0201",
    },
    {
      id: 961,
      title : "Mathematics –II",
      courseCode : "BSC0202",
    },
    {
      id : 971,
      title : "Basic Electrical Engineering",
      courseCode : "ESC0201",
    },
    {
      id : 981,
      title : "Environmental Studies",
      courseCode : "BSC0203"
    }
  ]
  },
  {
    id : 102,
    title : "2nd Year",
    thirdDetails : [
      {
        id : 1001,
        title : "Discrete Mathematics",
        courseCode : "BSC0301",
        
         
      },
      {
        id : 1002,
        title : "Analog and Digital Circuit",
        courseCode : "ESC0302",
        
      },
      {
        id : 1003,
        title : "Data Structure & Algorithm",
        courseCode : "PCCCSE0301",
        
      },
      {
        id : 1004,
        title : "IT Workshop (Matlab)",
        courseCode : "PCCCSE0302",
        
      },
      {
        id : 1005,
        title : "Status of Woman and Society",
        courseCode : "HSMC0301",
         
      },
      {
        id : 1006,
        title : "Cloud Computing",
        courseCode : "PCCCSE0303",
         
      },

    ],
    fourthDetails : [
      {
        id : 2001,
        title : "Computer Based Numerical & Statistical Techniques",
        courseCode : "PCCCSE0401",
         
      },
      {
        id : 2002,
        title : "Operating Systems",
        courseCode : "PCCCSE0403",
         
      },
      {
        id : 2003,
        title : "Computer Organization & Architecture",
        courseCode : "PCCCSE0402",
        
      },
      {
        id : 2004,
        title : "Design &Analysis of Algorithms",
        courseCode : "PCCCSE0404",
         
      },
      {
        id : 2005,
        title : "Humanities –II (Human Values)",
        courseCode : "HSMC0401",
         
      },
      {
        id : 2006,
        title : "Core Java",
        courseCode : "PCCCSE0405",
         
      }
    ]
  },

  {
    id : 103,
    title : "3nd Year",
    fifthDetails : [
      {
        id : 3001,
        title : "Signal and System",
        course_code : "PCCCSE0501",
         
      },
      {
        id : 3002,
        title : "Database Management Systems",
        course_code : "PCCCSE0502",
        
      },
      {
        id : 3003,
        title : "Formal Language & Automata Theory",
        course_code : "PCCCSE0503",
         
      },
      {
        id : 3004,
        title : "Object Oriented Programming",
        course_code : "PCCCSE0504",
         
      },
      {
        id : 3005,
        title : "AI",
        course_code : "PEC-CS*",
         
      },
      {
        id : 3006,
        title : "Organizational Behavior",
        course_code : "andn"
      },
      {
        id : 3007,
        title : "Advance AI & ML techniques",
        course_code : "HSMC0501",
         
      },
     {
      id:3008,
      title : "Probability and Statistics",
      course_code : "PBC0433",
     },
     {
      id:3009,
      title : "Digital Image Processing",
      course_code:"DIP4374",
     },
     
    ],
    sixthDetails : [
        {
          id : 30011,
          title : "Compiler Design",
          course_code : "PCCCSE0601",
           
        },
        {
          id : 30022,
          title : "Computer Networks",
          course_code : "PCCCSE0602",
           
        },
        {
          id : 30033,
          title : "Elective II",
          course_code : "PEC-CS*",
           
        },
        {
          id : 30044,
          title : "Elective III",
          course_code : "PEC-CS*",
           
        },
        {
          id : 30055,
          title : "Operation Research",
          course_code : "OEC0601",
          
        },
        {
          id : 30066,
          title : "Value Added Course (VAC)",
          course_code : "VAC0601",
           
        }
    ]
  },
  {
    id : 104,
    title : "4th Year",
    sevenDetails : [
      {
        id : 4001,
        title : "Elective IV",
        course_code : "PEC-CS*",
         
      },
      {
        id : 4002,
        title : "Elective V",
        course_code : "PEC-CS*",
         
      },
      {
        id : 4003,
        title : "Elective VI",
        course_code : "PEC-CS*",
         
      },
      {
        id : 4004,
        title : "Organizational Behavior & Industrial Psychology",
        course_code : "OEC0701",
         
      },
      
       
    ],
    eightDetails : [
      {
        id : 40011,
        title : "Cyber Law & Ethics",
        course_code : "OECCSE0801",
         
      },
      {
        id : 40022,
        title : "Software Project Management",
        course_code : "OECCSE0802*",
         
      },
      
    ]
  },
  {
    id : 105,
    title  :"Placement Cell",
    placementDetails : ["Apitutude", "Verbal Ability", "Reasoning", "Technical Round"]
  }
]

 

export const allSemester = [
  {
    id : "s0",
    semester : "1st semester",
    subject : ["Mathematics –I","Chemistry-I","Programming for Problem Solving","English"]
  },
  {
    id : "s1",
    semester : "2nd semester",
    subject : ["Physics","Mathematics –II","Basic Electrical Engineering","Environmental Studies"]
  },
  {
      id:"s2",
      semester : "3rd semester",
      subject : ["Discrete Mathematics","Analog and Digital Circuit","Data Structure & Algorithm","IT Workshop (Matlab)","Status of Woman and Society","Cloud Computing","Previous Year Question Paper"],
  },
  {
      id:"s3",
      semester : "4th semester",
      subject : ["Computer Based Numerical & Statistical Techniques","Operating Systems","Computer Organization & Architecture","Design &Analysis of Algorithms","Humanities –II (Human Values)","Core Java","Previous Year Question Paper"],
  },
  {
      id:"s4",
      semester : "5th semester",
      subject : ["Signal and System","Database Management Systems","Formal Language & Automata Theory","Object Oriented Programming","AI","Organizational Behavior","Advance AI & ML techniques","Probability and Statistics","Digital Image Processing","Previous Year Question Paper"],
  },
  {
      id:"s5",
      semester : "6th semester",
      subject : ["Compiler Design","Computer Networks","Elective II","Elective III","Operation Research","Value Added Course (VAC)","Previous Year Question Paper"],
  },
  {
      id:"s6",
      semester : "7th semester",
      subject : ["Elective IV","Elective V","Elective VI","Organizational Behavior & Industrial Psychology","Previous Year Question Paper"],
  },
  {
      id:"s7",
      semester : "8th semester",
      subject : ["Cyber Law & Ethics","Software Project Management","Previous Year Question Paper"],
  },
  {
    id : "s8",
    semester : "Placement Cell",
    subject  : ["Aptitude", "Technical Round", "Verbal Ability", "Reasoning"]
  }


];
