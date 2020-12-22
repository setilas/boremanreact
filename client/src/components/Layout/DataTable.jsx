import React, { Fragment, useState, useCallback, useMemo } from "react";
import "../scss/admin.scss";
import differenceBy from "lodash/differenceBy";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { tableData } from "./Data";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const DataTables = () => {
  const [data, setData] = useState(tableData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const tableColumns = [
    {
      name: "Vendor Code",
      selector: "code",
      sortable: true,
      center: true,
    },
    {
      name: "Vendor Name",
      selector: "name",
      sortable: true,
      center: true,
    },
    {
      name: <i className="fa fa-circle font-success f-12" >Active Enquiry</i>,
      selector: "active",
      sortable: true,
      center: true,
    },
    {
      name: "Total Enquiry",
      selector: "total",
      sortable: true,
      center: true,
    },
    {
      name:  <i className="fa fa-circle font-danger f-12" >Total Work Complete</i>,
      selector: "total_work",
      sortable: true,
      center: true,
    },
    {
      name: "User info",
      selector: "info",
      sortable: true,
      center: true,
    },
  ];

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.name
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "name"));
        toast.success("Successfully Deleted !");
      }
    };

    return (
      <button key="delete" className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    );
  }, [data, selectedRows, toggleCleared]);

  return (
    <Fragment>
      <div className="container-contact100">
       <Container fluid={true}  >
        <Row>
          <Col sm="12"> 
            <Card>
              <CardHeader style={{background:"#C4F6F7" ,textAlign:"center"}}>
                <h5>{"View User"}</h5>
              </CardHeader>
              <CardBody >
                <DataTable
                  data={data}
                  columns={tableColumns}
                  striped={true}
                  center={true}
                  selectableRows
                  persistTableHead
                  contextActions={contextActions}
                  onSelectedRowsChange={handleRowSelected}
                  clearSelectedRows={toggleCleared}
                />
                 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container> 
      </div>
    </Fragment>
  );
};

export default DataTables;
