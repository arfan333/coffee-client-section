/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, test, category, details, photo } =
    coffee;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
    //  send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] w-[1320px] h-[878px] mx-auto">
        <h1 className="text-center text-3xl">Update Coffee {name}</h1>
        <form onSubmit={handleUpdate} className="mx-10 my-10">
          <div className="md:flex gap-10">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group w-[536px] h-[48px]">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group w-[536px] h-[48px]">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Coffee Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-10">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group w-[536px] h-[48px]">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="supplier Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Test</span>
              </label>
              <label className="input-group w-[536px] h-[48px]">
                <input
                  type="text"
                  name="test"
                  defaultValue={test}
                  placeholder="test"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-10">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group w-[536px] h-[48px]">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group w-[536px] h-[48px]">
                <input
                  type="text"
                  defaultValue={details}
                  name="details"
                  placeholder="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <label className="input-group w-[536px] h-[48px]">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-block bg-[#D2B48C] text-[#331A15] mt-10"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
