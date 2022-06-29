import { createStore } from "redux";

const initialState = {
    students:[],
    profile:'',
    courses:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_STUDENT":
            return{
                ...state,
                students:[...state.students, action.payload]
            }
        case "REMOVE_STUDENT":
            return{
                ...state,
                students: state.students.filter(item => item.id !== action.payload)
            }
        case "EDIT_STUDENT":
                const studentIndex = state.students.findIndex(student => student.id== action.payload.id)
                if(studentIndex>=0){
                    state.students[studentIndex].sName=action.payload.sName
                    state.students[studentIndex].sClass=action.payload.sClass
                    state.students[studentIndex].sScore=action.payload.sScore
                }
        case "EDIT_COURSE":
            const courseIndex = state.courses.findIndex(course => course.id == action.payload.id)
            if(courseIndex>=0){
                state.courses[courseIndex].cTitle=action.payload.cTitle
                state.courses[courseIndex].cDescription=action.payload.cDescription
                state.courses[courseIndex].cfName=action.payload.cfName
                state.courses[courseIndex].csDate=action.payload.csDate
                state.courses[courseIndex].ceDate=action.payload.ceDate
            }
        case "UPDATE_PROFILE":
            return{
                ...state,
                profile:action.payload
            }
        case "CREATE_COURSE":
            return{
                ...state,
                courses:[...state.courses, action.payload]
            }
        case "DELETE_COURSE":
            return{
                ...state,
                courses:state.courses.filter(course => course.id !== action.payload)
            }
            default :
            return state;
    }
}
export default createStore( reducer )