export const Task = ({taskObject}) => {
//TaskOBJ is prop

    return (    
        <>
            <h2>{taskObject.description}</h2>
            <ul>
                <li>{taskObject.pointValue}</li>
                
            </ul>
        </>
    
    )
    
    
    }