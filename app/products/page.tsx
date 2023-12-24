"use client"
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";

type Product = {
    id: number;
    title: string;
    price: number;
}

const getProducts = (products: Product[]) => {
    const Product = ({ index, style }: ListChildComponentProps) => {
        const { title, price } = products[index];
        return <div style={style} className="border border-sky-500 border-b-0 last:border-b p-4 flex items-center">
            <div>
                <p>Title: {title}</p>
                <p>Price: ₹{price}</p>
            </div>
        </div>;
    }
    return Product;
}
    
export default function Products() {
    const products: Product[] = [];
    for (let i = 0; i < 2000; i++) {
        products.push({
            id: i + 1,
            title: `Product title #${i + 1}`,
            price: Math.round(Math.random() * 10000)
        })
    }
    return (
        <main>
            <h2 className="text-center text-blue-600">Products</h2>
            <AutoSizer>
                {({ height, width }: Size) => (
                    <List
                        height={height}
                        width={width}
                        itemCount={products.length}
                        itemSize={120}>
                        {getProducts(products)}
                    </List>
                )}
            </AutoSizer>
        </main>
    );
}