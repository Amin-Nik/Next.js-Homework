"use client"

import { useRouter } from "next/navigation";

function Card({ data, PNum = 100, height = 500, btnTrue = true, navigateTo }) {

    const router = useRouter();
    const clickHandler = () => router.push(navigateTo);

    return (
        <section style={{ margin: 10, padding: 5, border: "solid", width: 400, height: height, overflow: "scroll" }}>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {Object.entries(data).map((element, index) => {
                    if (index < PNum) {
                        if (element[0] != "reactions") {
                            return <p key={index}>
                                {`${element[0]} = ${element[1]}`}
                            </p>
                        } else {
                            return <div key={index}>
                                <p>{`likes = ${element[1].likes}`}</p>
                                <p>{`dislikes = ${element[1].dislikes}`}</p>
                            </div>
                        }
                    }
                })}
                {btnTrue && <button onClick={clickHandler} style={{ padding: 15, backgroundColor: "lightblue" }}>Click For More Details</button>}
            </div>
        </section>
    );
}

export default Card;