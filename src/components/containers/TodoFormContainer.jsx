

import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/actions';
import TodoForm from '../pure/TodoForm';

const mapStateToProps = (state) => {
        return {
            loged: state.userState.loged,
            fetching: state.userState.fetching
        }
}

const mapDispatchToProps = (dispatch) => {
        return {
            submit : (text) => {
                dispatch(addTodo(text))
            }
        }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default TodoFormContainer ;
