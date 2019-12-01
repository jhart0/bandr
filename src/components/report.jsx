import ReactDataGrid from 'react-data-grid';
import React from 'react';
import ReactDOM from 'react-dom';
import exportReport from '../services/dataExportService';
require('bootstrap/dist/css/bootstrap.css');

export default class Report extends React.Component {
      constructor(props, context) {
        super(props, context);
        this.rowGetter = this.rowGetter.bind(this);
        this.handleExport = this.handleExport.bind(this);
        this.createRows();
        
        this._columns = this.props.headers;
        this.state = null;
      }

      createRows() {
        let dataRows = [];
        for (let i = 0; i < this.props.rows.length; i++) {
            dataRows.push(this.props.rows[i]);
          }
          this._rows = dataRows;
        };
    
      rowGetter(i){
        return this._rows[i];
      };

      handleExport(){
        exportReport(this.props.rows);
      }

      render() {
        return (
              <div className="results-block">
                <div className="card card-block">
                  <ReactDataGrid
                  columns={this._columns}
                  rowGetter={this.rowGetter}
                  rowsCount={this._rows.length}
                  minHeight={500} />
                </div>
                <div className="export">
                  <button className="btn btn-default" onClick={this.handleExport}>
                      Export
                  </button>
              </div>
            </div>
          )
    };
}