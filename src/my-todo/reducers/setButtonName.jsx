

const setButtonName = (state='新增用户' , action) => {
    switch (action.type) {
        case 'BUTTON_NAME':
            return action.buttonName
        default:
         return   state
    }
}

export default setButtonName
