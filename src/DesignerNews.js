import React from 'react';
import data from './data/data';
import NewsSection from './NewsSection';
 class DesignerNews extends React.Component{
	constructor(props){
		super(props)
		this.incrementByOne=this.incrementByOne.bind(this);
		this.Starred = this.Starred.bind(this);
		this.changeState = this.changeState.bind(this);
		this.state={
			newsList: data,
		}
	}
	incrementByOne(id,upvotes){
		var newsList = this.state.newsList.slice(0).map(news => Object.assign({}, news));
		var news = newsList.find(news => (news.id === id));
			news.upvote= ++news.upvote
			newsList.push(news);
		this.setState({
			newsList
		});
	}
	Starred(id){
		var newsList = this.state.newsList.slice(0).map(news => Object.assign({}, news));
		var newsList  = newsList.filter(item => {
			if(item.states){
				return item;
			}
		} )
		this.setState({
			newsList
		});
	}
	changeState(id){
		var newsList = this.state.newsList.slice(0).map(news => Object.assign({}, news));
	    var news = newsList.find(news => (news.id === id));
		var isStarred = true;
		news.states = !news.states;		
		newsList.push(news);

		this.setState({
			newsList
		});
	}
	
	render(){
		return(<div><h1>DEVELOPER NEWS</h1>
					<div className="app-header">
						<li><a>Recent</a></li>
	 					<li onClick = {this.Starred}><a>Starred</a></li>
	 				</div>
				<NewsSection 
					newsList = {this.state.newsList}
					incrementByOne = {this.incrementByOne}
					ChangeState = {this.changeState}/>
			</div>
		)
	}
}
export default DesignerNews;