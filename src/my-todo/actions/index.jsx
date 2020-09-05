

export const addUser= text => {
    return {
        type: 'ADD_USER',
        user:text
    }
}


export const setButtonName= text => {
    return {
        type: 'BUTTON_NAME',
        buttonName:text
    }
}
