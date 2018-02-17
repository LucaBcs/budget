
export const Expenses = new Meteor.Collection(null);
//passing null as argument to Meteor.Collection is what makes the collection client 
//side only.
var ExpensesObserver = new LocalPersist(Expenses, 'expenses-collection');
//using the LocalPersist package we install we connect local storage to mongo, and use can save our data in the browser.
//after that we can use the standard mongo syntax.