import React from 'react';
import './NewsContainer.css';
import './storyDetails.css';

class storyDetails extends React.Component {
    formatDate = (date) => {
        console.log();
        return (new Date(date).toDateString());
    }
    render() {
        this.newsItem = this.props.location.state.newsItem ? this.props.location.state.newsItem : {};
        console.log(this.newsItem);

        return (
            <div className='textColorChange'>
                <div>
                    <p><strong>
                        {this.newsItem.title}
                    </strong>
                    </p>
                </div>
                <div>
                    <img src={this.newsItem.urlToImage} />
                </div>
                <div >
                    {this.newsItem.content}
                </div>
                <div >
                    {this.formatDate(this.newsItem.publishedAt)}
                </div>
            </div>
        );
    }
}

export default storyDetails;