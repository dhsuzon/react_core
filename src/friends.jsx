import { use } from "react";
import Friend from "./Friend"



export default function Friends({FriendsRes}){
    const friensData = use(FriendsRes)
    return (
        <>
         <span>User</span>
         <span>{friensData.length}</span>
         {
            friensData.map((friend)=><Friend key={friend.id} Friends={friend}></Friend>)
         }
        </>
    );
};