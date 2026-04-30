import axios from 'axios'
import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify'

const AddProduct = () => {

    const api_base = "https://e-commerce-project-3365.onrender.com/admin"

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        disc_price: "",
        stock: true,
        catagory: "",
        image: null
    })

    // 🔁 Handle Input Change
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
        }
        else if (name === "stock") {
            setFormData({ ...formData, stock: value === "true" });
        }
        else {
            setFormData({ ...formData, [name]: value });
        }
    }

    // 🚀 Submit Product
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const data = new FormData()

            data.append("name", formData.name)
            data.append("description", formData.description)
            data.append("price", Number(formData.price))
            data.append("disc_price", Number(formData.disc_price))
            data.append("stock", formData.stock)
            data.append("catagory", formData.catagory)
            data.append("image", formData.image)

            console.log("Sending Data...")

            const res = await axios.post(
                `${api_base}/addproduct`,
                data,
                { headers: { "Content-Type": "multipart/form-data" } }
            )

            console.log(res.data)

            toast.success("Product Added Successfully 🎉", {
                position: "top-center",
                autoClose: 2000,
                transition: Bounce
            });

            // Reset form
            setFormData({
                name: "",
                description: "",
                price: "",
                disc_price: "",
                stock: true,
                catagory: "",
                image: null
            })

        } catch (err) {
            console.log(err.response?.data)
            toast.error("Error adding product ❌")
        }
    }

    return (
        <div className="w-full min-h-screen bg-[#EAEAEA] flex justify-center items-center p-6">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-4">

                <h2 className="text-2xl font-bold text-center mb-2">
                    Add New Product
                </h2>

                {/* Product Name */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter product details"
                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Price */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="₹ 000"
                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Discount Price */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium">Discount Price</label>
                    <input
                        type="number"
                        name="disc_price"
                        value={formData.disc_price}
                        onChange={handleChange}
                        placeholder="₹ 000"
                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Stock */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium">Stock</label>
                    <select
                        name="stock"
                        value={formData.stock.toString()}
                        onChange={handleChange}
                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                    >
                        <option value="true">Available</option>
                        <option value="false">Out of Stock</option>
                    </select>
                </div>

                {/* Category */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium">Category</label>
                    <input
                        type="text"
                        name="catagory"
                        value={formData.catagory}
                        onChange={handleChange}
                        placeholder="Enter category"
                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Image */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium">Product Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                        className="border rounded-lg p-2 bg-gray-50"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                    Add Product
                </button>

            </form>
        </div>
    )
}

export default AddProduct