var React = require('react');
var loginAction = require('../actions/login');

var Login = React.createClass({
    contextTypes: {
        executeAction: React.PropTypes.func.isRequired
    },
    handleLogin: function(element) {
        element.preventDefault();
        this.context.executeAction(loginAction, {
            username: React.findDOMNode(this.refs.username).value.trim()
        });
    },
    render() {
        return (
            <div>
                <h2>Log In</h2>
                <form onSubmit={this.handleLogin}>
                    <label for="username">Username:</label>
                    <input type="text" id="username" ref="username" />
                    <input type="submit" value="Log In" />
                </form>
            </div>
        );
    }
});
module.exports = Login;