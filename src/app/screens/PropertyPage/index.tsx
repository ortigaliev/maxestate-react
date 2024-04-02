import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ChosenProperty } from "../PropertyPage/chosenProperty";
import { AllProperty } from "./allProprty";
import "../../../css/property.css";

export function PropertyPage(props: any) {
  let property = useRouteMatch();
  console.log(property);
  return (
    <div className={"propert_page"}>
      <Switch>
        <Route path={`/estate/:estate_id`}>
          <ChosenProperty />
        </Route>
        <Route path={`/estate`}>
          <AllProperty onAdd={props.onAdd} />
        </Route>
      </Switch>
    </div>
  );
}
