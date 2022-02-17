import {
    VALIDATE_WORD,
    VALIDATE_FIRST_CHOICE,
    VALIDATE_SECOND_CHOICE,
    VALIDATE_THIRD_CHOICE,
    VALIDATE_FOURTH_CHOICE,
} from "./types";

var data = {};
/*
  Validating of inputs has the same condition and it would be
  best to make a universal funciton. This function returns true
  and a message.
*/
const validate = (input) => {
    if (input !== "") {
        data = {
            isValid: false,
            message: "",
        };
    } else {
        data = {
            isValid: true,
            message: "This field should not be empty",
        };
    }
    return data;
};

export const validateWord = (input) => (dispatch) => {
    const data = validate(input);

    dispatch({
        type: VALIDATE_WORD,
        isValidWord: data.isValid,
        wordError: data.message,
    });
};

export const validateFirst = (input) => (dispatch) => {
    const data = validate(input);

    dispatch({
        type: VALIDATE_FIRST_CHOICE,
        isValidFirstChoice: data.isValid,
        firstChoiceError: data.message,
    });
};

export const validateSecond = (input) => (dispatch) => {
   const data = validate(input);

    dispatch({
        type: VALIDATE_SECOND_CHOICE,
        requestError: data.isValid,
        requestErrorMessage: data.message,
    });
};

export const validateThird = (input) => (dispatch) => {
  const data = validate(input);

   dispatch({
       type: VALIDATE_THIRD_CHOICE,
       requestError: data.isValid,
       requestErrorMessage: data.message,
   });
};


export const validateFourth = (input) => (dispatch) => {
  const data = validate(input);

   dispatch({
       type: VALIDATE_FOURTH_CHOICE,
       requestError: data.isValid,
       requestErrorMessage: data.message,
   });
};
