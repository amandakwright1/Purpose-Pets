import { ChildNav } from "./ChildNav"
import { ParentNav } from "./ParentNav"
import "./NavBar.css"

export const NavBar = () => {
    const purposeUser =localStorage.getItem ("purpose_parent")
    const purposeUserObject = JSON.parse(purposeUser)//OBJ with 2 keys -id and staff.

    if (purposeUserObject.isGuardian){
        //Return parent view
         return <ParentNav />
    }
    else{
        //Return child views
        return <ChildNav />
    }


}