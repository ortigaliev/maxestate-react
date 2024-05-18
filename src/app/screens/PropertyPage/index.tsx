import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ChosenProperty } from "../PropertyPage/chosenProperty";
import { AllProperty } from "./allProprty";
import "../../../css/property.css";
import { AllEstate } from "./allEstate";

export function PropertyPage(props: any) {
  let estate = useRouteMatch();
  let targetSearchObj = props.targetSearchObj;
  let setTargetSearchObj = props.setTargetSearchObj;
  console.log(estate);
  return (
    <div className={"propert_page"}>
      <Switch>
        <Route path={`${estate.path}/:estate_id`}>
          <ChosenProperty onAdd={props.onAdd} />
        </Route>
        <Route path={`${estate.path}`}>
          {/* <AllProperty onAdd={props.onAdd} /> */}
          <AllEstate />
        </Route>
      </Switch>
    </div>
  );
}
