/** @format */

import * as React from "react";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { useDispatch, useSelector } from "react-redux";
import { TurnOffDialog } from "../../Creators/DialogCreator";
import { StopLoading } from "../../Creators/LoadingCreator";
export default function DialogMessage() {
  const [visible, setVisible] = React.useState(false);
  const dialogStatus = useSelector((state) => state.dialog.status);
  const title = useSelector((state) => state.dialog.title);
  const content = useSelector((state) => state.dialog.content);
  const dispatch = useDispatch();
  // console.log(visible);
  const toggleDialog = () => {
    setVisible(!visible);
    dispatch(TurnOffDialog());
    dispatch(StopLoading());
  };

  React.useEffect(() => {
    if (dialogStatus) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [dialogStatus]);

  return (
    <div>
      {visible && (
        <Dialog title={title} onClose={toggleDialog} width={320} height={230}>
          <p
            style={{
              margin: "25px",
              textAlign: "center",
            }}
          >
            {content}
          </p>
          <DialogActionsBar>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
              onClick={toggleDialog}
              id="dialog-mes"
            >
              Exit
            </button>
          </DialogActionsBar>
        </Dialog>
      )}
    </div>
  );
}
