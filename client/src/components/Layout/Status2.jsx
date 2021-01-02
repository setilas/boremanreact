import React, { useEffect, Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { loadUser } from "../../action/auth";
import Knob from "knob";
import configDB from "../../data/customizer/config";
import { connect } from "react-redux";
import { getallvendors } from "../../action/vendor";
import { getUsers } from "../../action/auth";
const primary =
  localStorage.getItem("default_color") || configDB.data.color.primary_color;
const Status2 = ({ vendors, users, getallvendors, getUsers }) => {
  function percentage(partialValue, totalValue) {
    return ((100 * partialValue) / totalValue).toFixed(2);
  }

  let initialValue = 0;

  //total value for vendor
  let total1 = vendors.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.totalEnquiry;
  }, initialValue);

  //total value for user
  let total2 = users.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.totalEnquiry;
  }, initialValue);

  //active value for vendor
  let active1 = vendors.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.activeEnquiry;
  }, initialValue);
  //active value for user
  let active2 = users.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.activeEnquiry;
  }, initialValue);

  const active = active1 + active2;
  const total = total1 + total2;
  const completed = total - active;
  useEffect(() => {
    getallvendors();
    getUsers();

    var Status2 = Knob({
      value: percentage(completed, total),
      min: -100,
      className: "review",
      thickness: 0.1,
      fgColor: primary,
      bgColor: "#f6f7fb",
      lineCap: "round",
    });
    document.getElementById("Status2").appendChild(Status2);
  }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Charts" />
      <Container fluid={true}>
        <Row>
          <Card>
            <CardHeader>
              <h5>{Status2}</h5>
            </CardHeader>
            <CardBody className="mt-0 pt-0">
              <div class="row text-center">
                <div class="col-4 b-r-light">
                  <div>
                    <span class="font-primary">
                      <i class="icon-angle-up f-12 ml-1"></i>
                    </span>
                    <span class="text-muted block-bottom">TotalEnquiry</span>
                    <h4 class="num m-0">
                      <span class="counter color-bottom">{total}</span>
                    </h4>
                  </div>
                </div>
                <div class="col-4 b-r-light">
                  <div>
                    <span class="font-primary">
                      <i class="icon-angle-up f-12 ml-1"></i>
                    </span>
                    <span class="text-muted block-bottom">Active Enquiry</span>
                    <h4 class="num m-0">
                      <span class="counter color-bottom">{active}</span>
                    </h4>
                  </div>
                </div>
                <div class="col-4">
                  <div>
                    <span class="font-primary">
                      <i class="icon-angle-up f-12 ml-1"></i>
                    </span>
                    <span class="text-muted block-bottom">
                      TotalWork Complete
                    </span>
                    <h4 class="num m-0">
                      <span class="counter color-bottom">{completed}</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col col-md-10 ">
                  <div className="knob-block text-center">
                    <div className="knob" id="Status2"></div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  vendors: state.vendor.vendors,
  users: state.vendor.users,
});

export default connect(mapStateToProps, {
  loadUser,
  getUsers,
  getallvendors,
})(Status2);
