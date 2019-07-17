import React from 'react';

import './user.details.css';

export class UserDetail extends React.Component {

    static defaultProps = {
        user: {},
        address: {},
        changeAddress: () => {}
    }

    state = {
        editMode: false
    }

    changeToEditMode = () => this.setState({editMode: true});

    changeToViewMode = () => this.setState({editMode: false});

    render() {
        let formContent = (
            <form>
            <div>
                <label for="userId"> User Id</label>
                <p>{this.props.user.id}</p>
            </div>
            <div>
                <label for="firstName"> First Name</label>
                <p>{this.props.user.first_name}</p>
            </div>
            <div>
                <label for="lastName"> Last Name</label>
                <p>{this.props.user.last_name}</p>
            </div>
            <div>
                <label for="email"> Email</label>
                <p>{this.props.user.email}</p>
            </div>
            <div>
                <button type="button" onClick={this.changeToEditMode}>Edit</button>
            </div>
            </form>
        );

        if (this.state.editMode) {
            formContent = (
                <form>
                <div>
                    <label for="userId"> User Id</label>
                    <p><input type="text" name="userId" value={this.props.user.id} /></p>
                </div>
                <div>
                    <label for="firstName"> First Name</label>
                    <p><input type="text" name="firstName" value={this.props.user.first_name} /></p>                    
                </div>
                <div>
                    <label for="lastName"> Last Name</label>
                    <p><input type="text" name="lastName" value={this.props.user.last_name} /></p>                    
                </div>
                <div>
                    <label for="email"> Email</label>
                    <p><input type="text" name="email" value={this.props.user.email} /></p>                                        
                </div>
                <div>
                    <p>
                        <button onClick={this.changeToViewMode} type = "button">Cancel</button>
                        <button type = "button">Save</button>
                    </p>
                </div>
                </form>
            );
        }
      return (
          <div className="user-details-container">
              {formContent}
          </div>
      )
    }
}

