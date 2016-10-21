
 import React from 'react';
 import data from './data/data';
 import NewsItem from './NewsItem';
class NewsSection extends React.Component{
	render(){
		var list = this.props.newsList.sort((a, b) => {
  											return(b.upvote-a.upvote);
											})
		.map(news => {
				return(<NewsItem 
						{...news}						
						key= {news.id}
						id={news.id}
						incrementByOne= {this.props.incrementByOne}
						changeState ={this.props.ChangeState}
						/>
					)
		})
			return(<div>					
	 				<ul>{list}</ul>	 				 					
	 			</div>			
 				);
	}
}

export default NewsSection;