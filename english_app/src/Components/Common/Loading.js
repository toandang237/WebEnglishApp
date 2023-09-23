/** @format */

import * as React from "react";
import { Loader } from "@progress/kendo-react-indicators";
import { useSelector } from "react-redux";
export default function Loading() {
  const isLoading = useSelector((state) => state.load.load);
  const [stop, setStop] = React.useState("");
  React.useEffect(() => {
    if (!isLoading) {
      setStop("stop-show");
    } else {
      setStop("");
    }
  }, [isLoading]);
  return (
    <div className={`row col-6 loading ${stop}`} id="set-loading">
      <div className="col-4">
        <Loader
          style={{ zIndex: 1000 }}
          size="large"
          type="converging-spinner"
        />
      </div>
    </div>
  );
}
