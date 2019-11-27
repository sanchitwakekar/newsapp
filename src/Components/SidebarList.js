import React from 'react';
import { NewsList } from '../Constants/constants';
import { connect } from "react-redux";
import { GetNews } from "../Actions/Actions";

import './SidebarList.css';
class SidebarList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newsList: NewsList,
        }
    }

    BuildDynamicList = () => {
        return this.state.newsList.map((newsListElement) =>
            (<div className='ListElementStyle' onClick={() => this.changeNewsContainer(newsListElement)}>
                {newsListElement.NewsType}
            </div>)
        )
    }

    changeNewsContainer = (newsListElement) => {
        this.props.search_news(newsListElement);
    }

    render() {
        return (
            this.BuildDynamicList()
        );
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        search_news: (newsListElement) => {
            dispatch(GetNews(newsListElement));
        }
    };
}

export default connect(
    null, mapDispatchtoProps
)(SidebarList);
