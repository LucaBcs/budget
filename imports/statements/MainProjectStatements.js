import React from "react"
import ListProjectStatementsIncoming from "./ListProjectStatementsIncomings.js"
import ListProjectStatementsExpenses from "./ListProjectStatementsExpenses.js"
import HeaderProject from "../reusable/HeaderProject.js"
import ButtonsLeftRight from "../reusable/ButtonsLeftRight.js"

export default class MainProjectStatements extends React.Component{


render(){

	return (

		<div>
		<h1> MainProjectStatements </h1>
		<HeaderProject
		 currentProject={this.props.currentProject}
		 />
		<ListProjectStatementsIncoming/>
		<ListProjectStatementsExpenses/>
		<ButtonsLeftRight
		 currentPage={"MainProjectStatements"}
		 projectId={this.props.projectId}
		 changePage={this.props.changePage}
		/>
		</div> 

		)

	}

}