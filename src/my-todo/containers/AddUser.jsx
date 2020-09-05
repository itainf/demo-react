import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm'

import {addUser} from '../actions/index'


//mapStateToProps 将更新后的状态数据传递给展现组件，本例中会将 buttonName 传递给组件
//state:  state参数接收通过 reducer 变更过后的数据
//state.setButtonName  其实就是获取了变更后的数据
const mapStateToProps = state => {
    return {
        buttonName:state.setButtonName
    }
}

//mapDispatchToProps 将函数传递给组件
const mapDispatchToProps= dispatch   => {
    return {
        handSubmit: (val) => {
            dispatch(addUser(val))
        }
    }
};

// 将容器和展示组件关联起来
const AddUserForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)


export default AddUserForm
