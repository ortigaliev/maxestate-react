import { Container } from "@mui/material";
import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import { AllAgency } from "./allAgency";
import { OneAgency } from "./oneAgency";
import "../../../css/agency.css";

export function AgencyPage() {
  let agency = useRouteMatch();
  console.log(agency);
  return (
    <div className="agency_page">
      <Switch>
        <Route path={`${agency.path}/:agency_id`}>
          <OneAgency />
        </Route>
        <Route path={`${agency.path}`}>
          <AllAgency />
        </Route>
      </Switch>
    </div>
  );
}
