import { ChildViews } from "./ChildViews"
import { ParentViews } from "./ParentViews"

export const ApplicationViews = () => {
    const localParentUser =localStorage.getItem ("purpose_parent") //<--p_p is saving login info that user inputs
    const parentObject = JSON.parse(localParentUser)//OBJ with 2 keys -id and staff.

    if (parentObject.isGuardian){
        //Return parent view
         return <ParentViews />
    }
    else{
        //Return child views
        return <ChildViews />
    }


}