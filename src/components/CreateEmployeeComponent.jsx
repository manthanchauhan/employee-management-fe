import React, {Component} from 'react';

class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName : "",
            lastName: "",
            emailId: ""
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);

        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeFirstNameHandler = (event) =>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) =>{
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler = (event) =>{
        this.setState({emailId: event.target.value});
    }

    saveEmployee = (e) =>{
        e.preventDefault();

        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log(employee);
    }

    cancel(){
        this.props.history.push("/employees");
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"card col-md-6 offset-md-3 offset-md-3"}>
                            <h3 className={"text-center"}>Add Employee</h3>
                            <div className={"card-body"}>
                                <form>
                                    <div className={"form-group"}>
                                        <label>First Name</label>
                                        <input placeholder={"Your name goes here"} name={"firstName"} className={"form-control"}
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>

                                    <div className={"form-group"}>
                                        <label>Last Name</label>
                                        <input placeholder={"if any"} name={"lastName"} className={"form-control"}
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <div className={"form-group"}>
                                        <label>Email ID</label>
                                        <input placeholder={"Your email"} name={"emailId"} className={"form-control"}
                                               value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>

                                    <button className={"btn btn-success"} onClick={this.saveEmployee}>Save</button>
                                    <button className={"btn btn-danger"} onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;