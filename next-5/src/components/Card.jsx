"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import EditAndDelete from "./EditAndDelete";
import { deleteData } from "@/utils/actions";

function Card({ data, PNum = 100, height = 500, btnTrue = true, navigateTo, image = false, isAdmin = false, deleteUrl }) {

    const router = useRouter();
    const clickHandler = () => router.push(navigateTo);
    const deleteHandler = () => deleteData(deleteUrl);
    return (
        <section style={{ margin: 10, padding: 5, border: "solid", width: 400, height: height, overflow: "auto" }}>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {image && <Image unoptimized src={data.image} alt={data.id} width={0} height={0} style={{ width: "100%", height: "auto" }} />}
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
                {btnTrue && (isAdmin ? <EditAndDelete editClickHandler={clickHandler} deleteClickHandler={deleteHandler} /> : <button onClick={clickHandler} style={{ padding: 15, backgroundColor: "lightblue" }}>Click For More Details</button>)}
            </div>
        </section>
    );
}

export default Card;