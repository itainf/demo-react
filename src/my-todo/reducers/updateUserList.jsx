
const initialState =  [{name:'zhan',sex:'nv',age:9}];

const updateUserList = (state=[] , action) => {

    switch (action.type) {
        case 'ADD_USER':
            return [ ...state,
                {
                    name: action.user.name,
                    sex: action.user.sex,
                    age: action.user.age
                }]
        default:
         return   state
    }
}

export default updateUserList
