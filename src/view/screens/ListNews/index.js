import ListNews from './ListNews';
import {connect} from 'react-redux';
import {loadNews} from '../../../state/actions/news';

const mapStateToProps = (state) => ({
    news: state.news.news
})

const mapDispatchToProps = (dispatch) => ({
    loadNews: () => dispatch(loadNews()),
})

export default connect(mapStateToProps,mapDispatchToProps)(ListNews);