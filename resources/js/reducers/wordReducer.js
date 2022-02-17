import {
    VALIDATE_WORD,
    VALIDATE_FIRST_CHOICE,
    VALIDATE_SECOND_CHOICE,
    VALIDATE_THIRD_CHOICE,
    VALIDATE_FOURTH_CHOICE,
} from "../actions/types";

const intializeState = {
    requestError: "",
    requestErrorMessage: "",
    wordError: "",
    firstChoiceError: "",
    secondChoiceError: "",
    thirdChoiceError: "",
    fourthChoiceError: "",
    isValidWord: false,
    isValidFirstChoice: false,
    isValidSecondChoice: false,
    isValidThirChoice: false,
    isValidThirdChoice: false,
};

export default (state = intializeState, action) => {
    switch (action.type) {
        case VALIDATE_WORD:
            return {
                ...state,
                wordError: action.wordError,
                isValidWord: action.isValidWord,
            };
        case VALIDATE_FIRST_CHOICE:
            return {
                ...state,
                firstChoiceError: action.firstChoiceError,
                isValidFirstChoice: action.isValidFirstChoice,
            }
        case VALIDATE_SECOND_CHOICE:
            return {
                ...state,
                secondChoiceError: action.firstChoiceError,
                isValidSecondChoice: action.isValidSecondChoice,
            }
        default:
            return state;
    }
};
