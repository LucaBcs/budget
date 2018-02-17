import React from "react"
import SingleItemProject from "./SingleItemProject.js"
import HeaderProject from "../reusable/HeaderProject.js"
import ButtonsLeftRight from "../reusable/ButtonsLeftRight.js"


export default class MainProjectSingle extends React.Component{

componentWillMount(){

	this.props.singleProjectCatcher(this.props.projectId)

}


render(){

	return (

		<div>
		<HeaderProject
		 currentProject={this.props.currentProject}
  		/>
		<SingleItemProject/>
		<ButtonsLeftRight
		 currentPage={"MainProjectSingle"}
		 projectId={this.props.projectId}
		 changePage={this.props.changePage}
		/>
		</div> 

		)

	}

}