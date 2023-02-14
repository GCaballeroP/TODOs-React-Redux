
import { SETVISIBILITYFILTER } from '../../store/actions/actions';
import Filter from '../pure/Filter';
import { connect } from 'react-redux';



const mapStateToProps = (state,ownProps) => {
        return {
            active : ownProps.filter === state.filterState
        }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onClick : () => {
            dispatch(SETVISIBILITYFILTER(ownProps.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer;
