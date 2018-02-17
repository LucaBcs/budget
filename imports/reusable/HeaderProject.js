import React from "react"

export default class HeaderProject extends React.Component{


render(){

	var projectName = this.props.currentProject.name

	return (

		<center className="header-prj-cont">
		<center className="header-prj-up">{projectName}</center>
		<center className="header-prj-down">Project: MAIN</center>
		</center>

		)
	
	}

}