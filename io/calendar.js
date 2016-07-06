
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoCalendar extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m8.8 10c-1.5 0-2.5-1.1-2.5-2.5v-2.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v2.5c0 1.4-1.1 2.5-2.5 2.5z m17.5 0c-1.5 0-2.5-1.1-2.5-2.5v-2.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v2.5c0 1.4-1.1 2.5-2.5 2.5z m8.1-5c0.3 0 0.6 0.3 0.6 0.6v31.3c0 0.3-0.3 0.6-0.6 0.6h-33.8c-0.3 0-0.6-0.3-0.6-0.6v-31.3c0-0.3 0.3-0.6 0.6-0.6h4.4v3.2c0 1.7 1.9 3.1 3.8 3.1s3.7-1.4 3.7-3.1v-3.2h10v3.2c0 1.7 2 3.1 3.8 3.1s3.7-1.4 3.7-3.1v-3.2h4.4z m-3.1 28.8v-20h-27.5v20h27.5z"/></g>
            </IconBase>
        );
    }
}