import React from "react"
import MainProjects from "./projects/MainProjects.js"
import MainProjectSingle from "./projectsingle/MainProjectSingle.js"
import MainProjectStatements from "./statements/MainProjectStatements.js"
import MainProjectSummary from "./summary/MainProjectSummary.js"
import HomeBar from "./HomeBar.js"
import {Projects} from "./api/ProjectsDb.js"
import {Expenses} from "./api/ExpensesDb.js"
import {Incomes} from "./api/IncomesDb.js"

export default class App extends React.Component{

constructor(){

	super()

	this.changePage = this.changePage.bind(this)
	this.singleProjectCatcher = this.singleProjectCatcher.bind(this)

	this.state = {

		projects: [],
		expenses: [],
		incoming: [],

		currentProjectId: "",
		currentPage: "MainProjects",
		currentProject: {},
		nextPage: ""
	}
}

componentWillMount(){

	var projectsDb = Projects.find({}).fetch()
	var expensesDb = Expenses.find({}).fetch()
	var incomesDb = Incomes.find({}).fetch()

	this.setState({
			projects: projectsDb,
			expenses: expensesDb,
			incoming: incomesDb,
	}) 

}


changePage(pageName, projectId){
	
	this.setState({
				currentPage: pageName,
				currentProjectId: projectId
	})
}

singleProjectCatcher(projectId){

	var singleProject = Projects.findOne({_id: projectId})
	this.setState({currentProject: singleProject})
}





render(){

	var currentPage = this.state.currentPage
	var currentProject = this.state.currentProjectId
	var pageShown 

	if (currentPage == "MainProjects"){

		pageShown = <MainProjects
					 changePage={this.changePage}
					 projects={this.state.projects}
					 />
	} 

	else if (currentPage == "MainProjectSingle"){

		pageShown = <MainProjectSingle
					 changePage={this.changePage}
					 projectId={this.state.currentProjectId}
					 singleProjectCatcher={this.singleProjectCatcher}
					 currentProject={this.state.currentProject}
					 />

	}

	else if (currentPage == "MainProjectStatements"){

		pageShown = <MainProjectStatements
					 changePage={this.changePage}
					 projectId={this.state.currentProjectId}
					 singleProjectCatcher={this.singleProjectCatcher}
					 currentProject={this.state.currentProject}
					 />

	}

	else if (currentPage == "MainProjectSummary"){

		pageShown = <MainProjectSummary
					 changePage={this.changePage}
					 projectId={this.state.currentProjectId}
					 singleProjectCatcher={this.singleProjectCatcher}
					 currentProject={this.state.currentProject}
					 />
	}

	return (

		<div>

		<HomeBar
		 changePage={this.changePage}
		/>
		{pageShown}
				
		</div>

		)
	
	}

}