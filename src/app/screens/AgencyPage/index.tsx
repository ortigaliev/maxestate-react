import { Container } from "@mui/material";
import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import { AllAgency } from "./allAgency";
import "../../../css/agency.css";
import { ChosenAgency } from "./chosenAgency";

export function AgencyPage() {
  let agency = useRouteMatch();
  console.log(agency);
  return (
    <div className="agency_page">
      <Switch>
        <Route path={`$/estate/:estate_id`}>
          Chosen Estate
        </Route>
        <Route path={`${agency.path}/:agency_id`}>
          <ChosenAgency />
        </Route>
        <Route path={`${agency.path}`}>
          <AllAgency />
        </Route>
      </Switch>
    </div>
  );
}
