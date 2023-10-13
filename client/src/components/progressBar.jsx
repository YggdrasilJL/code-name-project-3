import React from "react";
import { Progress } from "@material-tailwind/react";

// progress bar basics
// pretty much just as an output for back end
// feel free to change as you need

export default ProgressBar = (props) => {
    const { userXP } = props;

    const progressVal = (userXP / 3000) * 100

    return ( <div className="flex w-full flex-col gap-4">
        <Progress value={progressVal} size="lg" label="Large" />
    </div>

    );
}