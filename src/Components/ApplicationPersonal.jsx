import {TextField} from "@mui/material";


export default function ApplicationPersonal() {

    return <form className={"w-full grid application-form"}>
        <h1>Personal Details</h1>
        <TextField variant={"standard"} label={"Full Name(As appears in ID/Certificate)"} className={"!h-[3em]"}/>
        <TextField variant={"standard"} label={"Email"} className={""}/>
        <TextField variant={"standard"} label={"Phone"} className={""}/>
        <TextField variant={"standard"} label={"ID/Birth Certificate No."}/>
        <TextField variant={"standard"} label={"Phone Number(1)"} style={{flex: "1"}}/>
        <TextField variant={"standard"} label={"Phone Number(2),optional"} style={{flex: "1"}}/>
    </form>
}

