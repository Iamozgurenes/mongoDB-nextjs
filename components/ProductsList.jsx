import Link from "next/link";
import Image from "next/image";
import RemoveBtn from "@/components/RemoveBtn";


const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/products", {
            cache: "no-store",
        });
 
        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }
 
        return res.json();
    } catch (error) {
        console.log("Error loading products: ", error);
    }
};

export default async function ProductsList() {
    const products = await getProducts();
  
    
    return (
        <>  
        
        <div className="overflow-x-auto">
            <div className="flex justify-between items-center">
                <h1 className="font-bold py-10 text-2xl"> Kayıt Sayfası</h1>
            </div>
            <div className="text-right">
                <Link className="btn btn-primary" href={"/addProduct"}>
                    Add Product
                </Link>
            </div>

            <table className="table">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Kategori</th>
        <th/>
      </tr>
    </thead>
    <tbody>
        {products.map((rs) => (
            <tr className="hover" key={rs._id}>
                <th>
                <label>
                <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>

                     
                        <div className="font-bold">{rs.name} </div>
                    
                </td>
                <td>{rs.price}</td>
                <td>{rs.category}</td>
                <th>
                    <Link href={`/editProduct/${rs._id}`}>
                    <button className="btn btn-primary">Edit</button>
                    </Link>
                     

                    <RemoveBtn id={rs._id} />
                </th>
            </tr>
        ))}
        </tbody>
        </table>
        </div>

        </>
    )
}