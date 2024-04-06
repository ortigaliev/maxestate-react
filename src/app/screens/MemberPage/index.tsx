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
  const { verifiedMemberData } = props;
  let member = useRouteMatch();
  const query = useQuery();

  let chosen_mb_id: string | null = query.get("mb_id") ?? null;
  const chosen_blog_id: string | null = query.get("blog_id") ?? null;

  console.log("QUERY TEST:", query.get("test"));

  return (
    <div className="member_page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage
            verifiedMemberData={verifiedMemberData}
            chosen_mb_id={chosen_mb_id}
            chosen_blog_id={chosen_blog_id}
          />
        </Route>
        <Route path={`${member.path}`}>
          <VisitMyPage verifiedMemberData={verifiedMemberData} />
        </Route>
      </Switch>
    </div>
  );
}
