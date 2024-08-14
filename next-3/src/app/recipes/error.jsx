"use client"

function error({ error }) {
    return (
        <div style={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
            backgroundColor: "goldenrod"
        }}>
            <h1>oops, looks like there is an error</h1>
            <h2>here is details:</h2>
            <h4>{error.message}</h4>
        </div>
    );
}

export default error;