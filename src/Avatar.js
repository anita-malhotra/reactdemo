import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';


class Avatar extends Component{
	constructor(){
		super();
		this.state ={
			name : "Welcome to Beryl World"
		}
	}
	
	namechange(){
		this.setState({
			name : "Check React page"
		})
	}
	
	render(){
		const avatarlistarray = [
			{
				id:1,
				name:"Vinod",
				work:"Team lead"
			},
			
			{
				id:2,
				name:"Tina",
				work:"Web Developer"
			},

			{
				id:3,
				name:"Rahul",
				work:"Tester"
			},
			
			{
				id:4,
				name:"Rajan",
				work:"Project Manager"
			}
		]

		const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
			return <Avatarlist key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
			}
		)
		

	return (
		<div className="mainpage_div">
			<h1> {this.state.name }</h1>
			{arrayavatarcard}
			<button onClick= { () => this.namechange()}> Change</button>
		</div>
		)
	}
}

export default Avatar;