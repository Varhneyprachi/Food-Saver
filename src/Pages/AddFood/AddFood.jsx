import React, { useContext } from 'react';
import logo from '../../assets/Pulse.png';
import { IoFastFoodOutline } from 'react-icons/io5';
import AuthContext from '../../Context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:5000"; // change to your deployed backend if needed

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddFood = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("You must be logged in");

    try {
      const form = e.target;
      const formData = new FormData(form);
      const foodData = Object.fromEntries(formData.entries());
      foodData.expiryDate = new Date(foodData.expiryDate);
      foodData.addedDate = new Date();

      // Get Firebase token
      const token = await user.getIdToken(true);

      // Send POST request with token in headers
      const res = await axios.post(`${BASE_URL}/foods`, foodData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.data.insertedId) {
        toast.success("New Food Added Successfully!");
        navigate('/my-items');
        form.reset();
      }
    } catch (err) {
      console.error("Add food error:", err);
      toast.error(err.message || "Failed to add food");
    }
  };

  return (
    <div className='bg-[#f4f1ea] pb-20 pt-4 px-5'>
      <div className='max-w-[1500px] mx-auto bg-[#151515] py-5 rounded-xl'>
        <h2 className='text-6xl font-extrabold text-center text-primary'>Add Food Items</h2>
        <div className='divider divider-primary w-56 mx-auto'></div>
      </div>

      <div className='max-w-[1500px] mx-auto bg-white p-5 md:p-10 rounded-3xl my-10'>
        <div className='flex justify-center lg:justify-start'>
          <div className="w-full md:px-10 px-5 py-12 space-y-3 rounded-3xl bg-[#f4f1ea]">
            <img src={logo} alt="logo" className='w-40 mx-auto' />
            <h1 className="text-4xl md:text-6xl font-extrabold text-center">Add New Food</h1>
            <p className='text-center font-medium text-accent'>Track your food before it expires!</p>

            <form onSubmit={handleAddFood} className="space-y-6">
              <input type="email" name="email" value={user?.email} readOnly required className="input w-full px-4 py-6 rounded-md" />
              <input type="text" name="foodTitle" placeholder="Food Title" required className="input w-full px-4 py-6 rounded-md" />
              <input type="url" name="foodImage" placeholder="Food Image URL" required className="input w-full px-4 py-6 rounded-md" />
              <input type="date" name="expiryDate" required className="input w-full px-4 py-6 rounded-md" />
              <select name='category' required className="select select-lg w-full rounded-md text-accent">
                <option value="">Select a category</option>
                <option>Dairy</option>
                <option>Meat</option>
                <option>Vegetables</option>
                <option>Snacks</option>
              </select>
              <input type="number" name="quantity" placeholder="Quantity" required className="input w-full px-4 py-6 rounded-md" />
              <textarea name='description' placeholder="Write description..." required className="textarea w-full px-4 py-6 rounded-md"></textarea>

              <button type='submit' className="w-full py-6 text-center rounded-sm btn btn-primary text-xl">
                <IoFastFoodOutline size={30} /> Add Food
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
