import React from 'react'

const SearchForm = ( props ) => {

    let input1, input2,  input3 ;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input1.value.trim()) {
                        return
                    }
                    props.handSubmit({
                        name:input1.value,
                        sex:input2.value,
                        age:input3.value,
                    } ) ;
                    input1.value = '';
                    input2.value = '';
                    input3.value = '';
                }}
            >

                <table>
                    <tr>
                        <td>姓名:
                            <input  ref={node => {
                            input1 = node
                        }}
                                       type='text'/>

                        </td>
                        <td>性别:<input ref={node => {
                            input2 = node
                        }} type='text'/></td>
                        <td>年龄<input ref={node => {
                            input3 = node
                        }} type='text'/></td>
                        <td>
                            <button type="submit">
                                {props.buttonName}
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )

}

export default SearchForm
