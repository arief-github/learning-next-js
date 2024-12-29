export default function Products({ products }) {
    return (
        <div>
            <h1> Daftar Produk </h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Harga : Rp {product.price} </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/products')

    const data = await response.json()

    return {
        props: {
            products: data
        }
    }
}