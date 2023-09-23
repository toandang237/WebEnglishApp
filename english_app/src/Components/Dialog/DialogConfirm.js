/** @format */

import * as React from "react";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { useDispatch, useSelector } from "react-redux";
export default function DialogConfirm() {
  const [visible, setVisible] = React.useState(false);
  const dialogStatus = useSelector((state) => state.dialogConfirm.isShow);
  const title = useSelector((state) => state.dialogConfirm.title);
  const content = useSelectorr((state) => state.dialog.content);
  const dispatch = useDispatch();
  const toggleDialog = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={toggleDialog}
      >
        Open Dialog
      </button>
      {visible && (
        <Dialog title={"Please confirm"} onClose={toggleDialog}>
          <p
            style={{
              margin: "25px",
              textAlign: "center",
            }}
          >
            Are you sure you want to continue?
          </p>
          <DialogActionsBar>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              onClick={toggleDialog}
            >
              No
            </button>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              onClick={toggleDialog}
            >
              Yes
            </button>
          </DialogActionsBar>
        </Dialog>
      )}
    </div>
  );
}
