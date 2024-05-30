import React from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { VisitOtherPage } from "./visitOtherPage";
import { VisitMyPage } from "./visitMyPage";
import "../../../css/member.css";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function MemberPage(props: any) {
  const { verifyMemberData } = props;
  const query = useQuery();
  let member = useRouteMatch();

  const chosen_mb_id: string | null = query.get("mb_id") ?? null;
  const chosen_bo_id: string | null = query.get("bo_id") ?? null;

  console.log("QUERY mb_id:", query.get("mb_id"));

  return (
    <div className="member_page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage
            chosen_mb_id={chosen_mb_id}
            chosen_bo_id={chosen_bo_id}
            verifyMemberData={verifyMemberData}
          />
        </Route>
        <Route path={`${member.path}`}>
          <VisitMyPage verifyMemberData={verifyMemberData} />
        </Route>
      </Switch>
    </div>
  );
}
