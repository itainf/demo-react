import React from 'react'
import PropTypes from 'prop-types'


const List = ({ users }) => (
    <div>
        <table>
            <tr><td>姓名</td><td>性别</td><td>年龄</td></tr>
            {users.map(user => (
                <tr><td>{user.name}</td><td>{user.sex}</td><td>{user.age}</td></tr>
            ))}
        </table>
    </div>
)

List.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            sex: PropTypes.number.isRequired,
            age: PropTypes.number.isRequired
        }).isRequired
    )
}

List.defaultProps={
    users:[]

}

export default List
