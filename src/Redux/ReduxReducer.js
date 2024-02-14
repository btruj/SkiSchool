import { people } from "../inputdata/inputdatafile";
import { ADD, DELETE } from "./ReduxType";

const initialState = {
    instructors: [],
};

export const instructorReducer = function (state = initialState, action) {
    switch(action.type){
       case ADD: {
        let idExists = false;
        let newInstructor = {};
        state.instructors.forEach((instructor) => {
            if(instructor.id === action.payload){
                idExists = true;
            }
        });
        if (!idExists){
           people.instructors.forEach((peep) => {
              if (peep.id === action.payload) {
                newInstructor = peep;
              } 
           });
           return {
            ...state,
            instructors:[...state.instructors, newInstructor]
           };
        }else {
            window.alert("Instructor has been added already.");
            return{
                ...state,
            };
         }
       }
       case DELETE: {
        return{
            ...state,
            instructors: state.instructors.filter((instru) => instru.id !== action.payload),
        };
       }
       default:{
return{
    ...state,
      };
    }
  }
};