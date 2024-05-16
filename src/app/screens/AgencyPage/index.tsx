import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import { AllAgency } from "./allAgency";
import "../../../css/agency.css";
import { ChosenAgency } from "./chosenAgency";
import { Agency } from "../../../types/user";



export function AgencyPage() {
  /* INITIALIZATION */

  let agency = useRouteMatch();
  console.log(agency);
  return (
    <div className="agency_page">
      <Switch>
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
