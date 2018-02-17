import React from "react"

export default class ButtonLeftRight extends React.Component{

constructor(){

	super()

	this.state = {

		left:"",
		right:"",
		nextPageLeft: "",
		nextPageRight: "",

	}
}

componentWillMount(){

	var copyOfState = this.state
	var currentPage = this.props.currentPage

	if (currentPage == "MainProjectSingle"){

	copyOfState.left = "Summary"
	copyOfState.right = "Statements"
	copyOfState.nextPageLeft = "MainProjectSummary"
	copyOfState.nextPageRight = "MainProjectStatements"

	this.setState(copyOfState)

	}

	else if (currentPage == "MainProjectStatements"){

	copyOfState.left = "Expenses"
	copyOfState.right = "Incomes"
	copyOfState.nextPageLeft = "ListProjectStatementsExpenses"
	copyOfState.nextPageRight = "ListProjectStatementsIncomings"

	this.setState(copyOfState)

	}

	else if (currentPage == "MainProjectSummary"){

	copyOfState.left = "Expenses"
	copyOfState.right = "Incomes"
	copyOfState.nextPageLeft = "ListProjectSummaryExpenses"
	copyOfState.nextPageRight = "ListProjectSummaryIncomings"

	this.setState(copyOfState)

	}

}



handleChangePage(side, event){
	
	
	var changePage = this.props.changePage
	var pageName = ""
	var projectId = this.props.projectId

	if (side == "left"){

		pageName = this.state.nextPageLeft

	}

	else if (side == "right"){

		pageName = this.state.nextPageRight

	}

	changePage(pageName, projectId)
}


render(){

	return (

		<center className="double-btn-main">
			<center className="double-btn-content" onClick={this.handleChangePage.bind(this, "left")}> {this.state.left} </center>
			<center className="double-btn-content" onClick={this.handleChangePage.bind(this, "right")}> {this.state.right} </center>
		</center>

		)
	
	}

}