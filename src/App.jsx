import Router from "./routes";
import { Suspense } from "react";

import Table from "./components/Table";

export default function App() {
  return (
    // <Suspense fallback={"Loading..."}>
    //   <Router />
    // </Suspense>
    <Table />
  );
}
