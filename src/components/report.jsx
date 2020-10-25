import ReactDataGrid from 'react-data-grid'
import React from 'react'
import exportReport from '../services/dataExportService'
require('bootstrap/dist/css/bootstrap.css')

export default class Report extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.rowGetter = this.rowGetter.bind(this)
        this.handleExport = this.handleExport.bind(this)
        this.isPrimitive = this.isPrimitive.bind(this)
        this.createRows()

        this._columns = this.props.headers
        this.state = null
    }

    createRows() {
        let dataRows = []
        for (let i = 0; i < this.props.rows.length; i++) {
            let dataKeys = {}
            for (let j = 0; j < Object.keys(this.props.rows[i]).length; j++) {
                let val = Object.values(this.props.rows[i])[j]
                if (!this.isPrimitive(val)) {
                    val = JSON.stringify(val)
                }
                dataKeys[Object.keys(this.props.rows[i])[j]] = val
            }
            dataRows.push(dataKeys)
        }
        this._rows = dataRows
    }

    isPrimitive(val) {
        return val !== Object(val)
    }

    rowGetter(i) {
        return this._rows[i]
    }

    handleExport() {
        exportReport(this.props.rows)
    }

    render() {
        return (
            <div className="results-block">
                <div className="card card-block">
                    <ReactDataGrid
                        columns={this._columns}
                        rowGetter={this.rowGetter}
                        rowsCount={this._rows.length}
                        minHeight={500}
                    />
                </div>
                <div className="export">
                    <button className="btn btn-default" onClick={this.handleExport}>
                        Export
                    </button>
                </div>
            </div>
        )
    }
}
