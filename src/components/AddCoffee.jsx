/* eslint-disable no-unused-vars */
import React from "react";
import Swal from 'sweetalert2'


const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    //  send data to the server
    fetch('http://localhost:5000/coffee',{
      method: 'POST',
      headers: {
       'content-type' : 'application/json'
      },
      body : JSON.stringify(newCoffee)

    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: 'success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  };
  return (
    <div className="bg-[#F4F3F0] w-[1320px] h-[878px] mx-auto">
      <h1 className="text-center text-3xl">Add New Coffee</h1>
      <form onSubmit={handleSubmit} className="mx-10 my-10">
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group w-[536px] h-[48px]">
              <input
                type="text"
                name="name"
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
              placeholder="photo"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-[#D2B48C] text-[#331A15] mt-10"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
