import React from 'react';
import { connect } from 'react-redux';
import './NewsContainer.css';

class NewsContainer extends React.Component {

    showStory = (index, newsItem) => {
        this.props.history.push('/storydetails', { newsItem });
    }
    formatDate = (date) => {
        return (new Date(date).toDateString());
    }

    buildNewsItem = () => {
        return this.props.newsItems.map((newsItem, index) =>

            <div className="newsBox" onClick={() => this.showStory(index, newsItem)}>
                <div>
                    <p><strong>
                        {newsItem.title}
                    </strong>
                    </p>
                </div>
                <div>
                    <img className="imgDiv" src={newsItem.urlToImage} />
                </div>
                <div className="contentDiv">
                    {newsItem.content}
                </div>
                <div className="publishdateDiv">
                    {this.formatDate(newsItem.publishedAt)}
                </div>
            </div>
        )
    }

    render() {
        console.log(this.props);

        return (<>
            {this.props.newsItems.length > 0 ?
                this.buildNewsItem() : <>Please Select the News Category</>}
        </>
        );
    }
}
function mapStatetoProps(state) {
    return { newsItems: state ? state.NewsArticles : [] }
}
export default connect(mapStatetoProps, null)(NewsContainer);