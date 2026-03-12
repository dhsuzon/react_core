import { use } from "react";

export default function  Users (props){
    const data =  use(props.fetchUsers)
    console.log(data)
    return (
        <>
         <span>User: <span>{data.length}</span></span>
        </>
    );
};