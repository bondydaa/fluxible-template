/*globals document*/

var React = require('react');
var Nav = require('./Nav');
var ApplicationStore = require('../stores/ApplicationStore');
var connectToStores = require("fluxible-addons-react").connectToStores;
var provideContext = require('fluxible-addons-react').provideContext;
var handleHistory = require('fluxible-router').handleHistory;
var NavBar = require('./NavBar');

var Application = React.createClass({
    render: function() {
        var Handler = this.props.currentRoute.get('handler');

        return (
            <div>
                <h1>Welcome to The Next Facebook!</h1>
                <NavBar />
                <Handler />
            </div>
        );
    },

    componentDidUpdate: function(prevProps, prevState) {
        var newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
});

module.exports = handleHistory(provideContext(connectToStores(
    Application,
    [ApplicationStore],
    function (context, props) {
        var appStore = context.getStore(ApplicationStore);
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            pages: appStore.getPages()
        };
    }
)));
