import React from "react"
import LoopItemProject from "./LoopItemProject.js"

export default class ListProject extends React.Component{


render(){

	var projects = this.props.projects

	return (

	projects.map((item, index)=>{

		return (

		<LoopItemProject
		 key={index}
		 project={item}
		 changePage={this.props.changePage}
		 />
		
		)
	})
	)
}
}