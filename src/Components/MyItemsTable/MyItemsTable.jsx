import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaInfoCircle } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import axios from 'axios';
import toast from 'react-hot-toast';
import logo from '../../assets/Pulse.png';
import AuthContext from '../../Context/AuthContext';
import dataNotFound from '../../assets/notFound.json';
import Lottie from 'lottie-react';

const BASE_URL = "http://localhost:5000"; // local backend

const MyItemsTable = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const [singleFood, setSingleFood] = useState({});

  // Fetch user foods
  const fetchFoods = async () => {
    try {
      if (!user) return;
      const token = await user.getIdToken(true);
      const res = await axios.get(`${BASE_URL}/foods/my-foods?email=${user.email}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMyFoods(res.data);
    } catch (err) {
      console.error("Error fetching foods:", err);
      toast.error("Failed to fetch foods");
    }
  };

  useEffect(() => {
    fetchFoods();
  }, [user]);

  // Delete food
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        const token = await user.getIdToken(true);
        const res = await axios.delete(`${BASE_URL}/foods/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.data.deletedCount) {
          setMyFoods(myFoods.filter(f => f._id !== id));
          Swal.fire("Deleted!", "Your food has been deleted.", "success");
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  // Select single food
  const singleFoodData = (id) => {
    const findFood = myFoods.find(food => food._id === id);
    setSingleFood({ ...findFood });
  };

  // Update food
  const handleUpdate = async (e, id) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const updateInfo = Object.fromEntries(formData.entries());
      const token = await user.getIdToken(true);
      const res = await axios.put(`${BASE_URL}/foods/${id}`, updateInfo, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setMyFoods(myFoods.map(f => (f._id === res.data._id ? res.data : f)));
      document.getElementById('my_modal_3').close();
      Swal.fire({ icon: "success", title: "Updated!", timer: 1500, showConfirmButton: false });
    } catch (err) {
      document.getElementById('my_modal_3').close();
      Swal.fire({ icon: "error", title: err.message, timer: 1500, showConfirmButton: false });
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        <thead className='bg-primary text-white'>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Food Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>Auction</th>
          </tr>
        </thead>
        <tbody>
          {myFoods.map((food, index) =>
            <tr key={food._id}>
              <th className='bg-gray-200'>{index + 1}</th>
              <td className='bg-[#f4f1ea]'>
                <div className="flex items-center gap-3 justify-center">
                  <div className="avatar">
                    <div className="mask mask-circle h-12 w-12">
                      <img src={food.foodImage} alt="food img" />
                    </div>
                  </div>
                </div>
              </td>
              <td className='bg-gray-200 font-bold text-primary'>{food.foodTitle}</td>
              <td className='text-black font-medium bg-[#f4f1ea]'>{food.category}</td>
              <td className='font-bold text-md bg-gray-200'>{food.quantity}</td>
              <td className='text-primary font-semibold bg-[#f4f1ea]'>{food.expiryDate?.split('T')[0]}</td>
              <td className='bg-gray-200'>
                <div className="join flex justify-center items-center gap-7">
                  <Link to={`/foods/${food._id}`}>
                    <button className="flex join-item items-center"><FaInfoCircle size={22} color='#ff5722' /></button>
                  </Link>
                  <button onClick={() => { document.getElementById('my_modal_3').showModal(); singleFoodData(food._id) }} className="join-item">
                    <FaEdit size={22} color='#1e0a3c' />
                  </button>
                  <button onClick={() => handleDelete(food._id)} className="join-item">
                    <MdDeleteForever size={25} color='red' />
                  </button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {myFoods.length === 0 &&
        <div className='text-center flex flex-col items-center justify-center pb-10'>
          <Lottie animationData={dataNotFound} style={{ width: '250px', marginRight: '20px' }} />
          <h2 className='text-5xl text-gray-600'>Oops! No food found.</h2>
          <p className='mt-4 text-primary font-bold'>
            <Link className='underline' to='/add-food'>Add a food now</Link>
          </p>
        </div>
      }

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-4xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</button>
          </form>

          <div className='w-full max-w-4xl md:px-10 px-5 py-12 space-y-3 rounded-3xl bg-[#f4f1ea]'>
            <img src={logo} alt="logo" className='w-40 mx-auto' />
            <h1 className="text-4xl md:text-6xl font-extrabold text-center">Update Food Information</h1>
            <p className='text-center font-medium text-accent'>Track your food before it expires!</p>

            <form onSubmit={(e) => handleUpdate(e, singleFood._id)} className="space-y-6">
              <input type="email" name="email" defaultValue={singleFood.email} readOnly required className="input w-full px-4 py-6 rounded-md" />
              <input type="text" name="foodTitle" defaultValue={singleFood.foodTitle} required className="input w-full px-4 py-6 rounded-md" />
              <input type="url" name="foodImage" defaultValue={singleFood.foodImage} required className="input w-full px-4 py-6 rounded-md" />
              <input type="date" name="expiryDate" defaultValue={singleFood.expiryDate?.split('T')[0]} required className="input w-full px-4 py-6 rounded-md" />
              <select name='category' defaultValue={singleFood.category} required className="select select-lg w-full rounded-md text-accent">
                <option>Dairy</option>
                <option>Meat</option>
                <option>Vegetables</option>
                <option>Snacks</option>
              </select>
              <input type="number" name="quantity" defaultValue={singleFood.quantity} required className="input w-full px-4 py-6 rounded-md" />
              <textarea name='description' defaultValue={singleFood.description} required className="textarea w-full px-4 py-6 rounded-md"></textarea>
              <button type='submit' className="w-full py-6 rounded-sm btn btn-primary text-xl">Update food information</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyItemsTable;
