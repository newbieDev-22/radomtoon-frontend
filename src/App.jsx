import MilestoneStatusTable from "./components/MilestoneStatusTable";
import SupportManagementTable from "./components/SupportManagementTable";
import Router from "./routes";
import { Suspense } from "react";

export default function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Router />
    </Suspense>
    // <>
    // <SupportManagementTable />
    // <MilestoneStatusTable />
    // </>
  );
}
