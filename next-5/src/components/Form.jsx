function Form({ name, btnText }) {
    return (
        <section style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: 30 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <label htmlFor={name}>{name}</label>
                <input type="text" name={name} id={name} />
            </div>
            <button style={{ height: 40.4, borderRadius: 10 }}>{btnText}</button>
        </section>
    );
}

export default Form;