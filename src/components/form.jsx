import React from 'react'
import ReactDOM from 'react-dom'
import Report from './report'
import getRequest from '../services/apiCallService'
import getHeaders from '../services/jsonParsingService'
require('bootstrap/dist/css/bootstrap.css')

export default class Form extends React.Component {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            key: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        getRequest(this.state.url, this.state.key).then((data) => {
            let sourceArr = []
            if (data.constructor !== Array) {
                sourceArr.push(data)
            } else sourceArr = data

            ReactDOM.render(
                React.createElement(Report, {
                    headers: getHeaders(sourceArr),
                    rows: Object.values(sourceArr),
                }),
                document.getElementById('table'),
            )
        })
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="url">Url:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="url"
                        value={this.state.url}
                        onChange={this.handleChange}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="key">Key:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="key"
                        value={this.state.key}
                        onChange={this.handleChange}
                    ></input>
                </div>
                <div className="submit">
                    <button className="btn btn-default" onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}
