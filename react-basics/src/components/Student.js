const Student = (props) => {

    const {firstName, lastName} = props
    return (
        <div>
            <h1> Student Details</h1>
            <p>Student first name: {firstName}</p>
            <p>Student last name: {lastName}</p>
        </div>
    )
}

export default Student