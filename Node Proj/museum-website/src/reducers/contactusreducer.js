// contactusreducer.js

export const initialFormData = {
    name: '',
    contactNo: '',
    email: '',
    message: ''
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
        case 'RESET_FORM':
            return initialFormData;
        default:
            return state;
    }
};
