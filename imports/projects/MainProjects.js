import React from "react"
import ListProjects from "./ListProject.js"
import ButtonSingle from "../reusable/ButtonSingle.js"

export default class MainProjects extends React.Component{


render(){
	
	return (

		<div>
		<ListProjects
		 projects={this.props.projects}
		 changePage={this.props.changePage}
		 />
		<ButtonSingle/>
		</div> 

		)

	}

}