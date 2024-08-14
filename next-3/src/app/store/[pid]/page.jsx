import { notFound } from "next/navigation";

function productId({ params }) {
    if (params.pid > 100) {
        notFound();
    }
    return (
        <>
            <h2>Details of product id: {params.pid}</h2>
        </>
    );
}

export default productId;