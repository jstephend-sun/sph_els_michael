import React, { useState } from "react";

import { Alert, Collapse } from "@mui/material";

const AlertContent = (props) => {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <Collapse in={open}>
                <Alert
                    severity={props.isError === false ? "success" : "error"}
                    sx={{ mb: 2 }}
                >
                    {props.message}
                </Alert>
            </Collapse>
        
        </div>
    );
};

export default AlertContent;
