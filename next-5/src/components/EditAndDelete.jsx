function EditAndDelete({ editClickHandler }) {

    const btnStyle = { padding: 15, borderRadius: 15 }

    return (
        <div style={{ margin: "30px 0", width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <button onClick={editClickHandler} style={{ ...btnStyle, backgroundColor: "green" }}>Edit</button>
            <button style={{ ...btnStyle, backgroundColor: "red" }}>Delete</button>
        </div>
    );
}

export default EditAndDelete;