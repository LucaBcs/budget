import React from "react"
import ListProjectSummaryIncoming from "./ListProjectSummaryIncomings.js"
import ListProjectSummaryExpenses from "./ListProjectSummaryExpenses.js"
import HeaderProject from "../reusable/HeaderProject.js"
import ButtonsLeftRight from "../reusable/ButtonsLeftRight.js"

export default class MainProjectSummary extends React.Component{


render(){

	return (

		<div>
		<h1> MainProjectSummary </h1>
		<HeaderProject
		 currentProject={this.props.currentProject}
		 />
		<ListProjectSummaryIncoming/>
		<ListProjectSummaryExpenses/>
		<ButtonsLeftRight
		 currentPage={"MainProjectSummary"}
		 projectId={this.props.projectId}
		 changePage={this.props.changePage}
		/>
		</div> 

		)

	}

}