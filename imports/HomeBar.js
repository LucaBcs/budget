import React from "react"


export default class HomeBar extends React.Component{


changePageHandler(){

this.props.changePage("MainProjects")

}


render(){

	return (

		<center className="btn-container" onClick={this.changePageHandler.bind(this)}>
		<i className="fas fa-home"></i>
		</center>

		)
	
	}

}