import React from "react"

export default class LoopItemProject extends React.Component{

handleChangePage(event){
	
	var changePage = this.props.changePage
	var pageName = "MainProjectSingle"
	var projectId = this.props.project._id
	changePage(pageName, projectId)
}

render(){

	var project = this.props.project
	
	return (

		<div className="prj-cont" onClick={this.handleChangePage.bind(this)}>
			<div className="prj-up">{project.name}</div>
			<div className="prj-down">Initial Amount: {project.initialAmount}</div>
		</div> 

		)

	}

}