const User = ({name, location}) => {
    return(
        <div className="user-card">
            <h2>Functional Component Syntax</h2>
            <h3>{name}</h3>
            <h3>{location}</h3>
        </div>
    )
}

export default User;