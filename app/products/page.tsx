import './products.css';

export default function Products() {
    const products = [];
    for (let i = 0; i < 2000; i++) {
        products.push({
            id: i + 1,
            title: `Product ${i + 1}`,
            price: Math.round(Math.random() * 10000)
        })
    }

    return (
        <main>
            <h2 className="text-center text-blue-600">Products</h2>
            {products.map(({ id, title, price }) => {
                return <div key={id}
                    className="border border-sky-500 border-b-0 last:border-b p-4 flex items-center product">
                    <div>
                        <p>Title: {title}</p>
                        <p>Price: ₹{price}</p>
                    </div>
                </div>

            })}
        </main >
    );
}