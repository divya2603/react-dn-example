import React from 'react';
class NewsItem extends React.Component{
	constructor(props){
		super(props);
		this.updateCount=this.updateCount.bind(this);
		this.Checked = this.Checked.bind(this)
	}
	updateCount(){
		this.props.incrementByOne(this.props.id,this.props.upvote)
	}
	
	Checked(){
		this.props.changeState(this.props.id)		
	}
	render(){
		return(
			<div>
				<li className="newsItem">
					<span><img className="circle"/></span>
					<span className="upvotes">
						<button onClick = {this.updateCount}>/\</button>
						<p ref="upvotes">{this.props.upvote}</p>
					</span>
					<span className="content">
						<p >{this.props.text}</p>
					</span>
					<span><input type="checkbox"  checked ={this.props.states} onChange={this.Checked}/></span>
				</li>
			</div>
		);
	}
}
export default NewsItem;