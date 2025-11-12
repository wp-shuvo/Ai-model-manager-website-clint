import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/AuthContext';

const ModelDetails = () => {
  const model = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [purchaseCount, setPurchaseCount] = useState(model.purchaseCount || 0);

  const {
    _id,
    name,
    framework,
    useCase,
    dataset,
    description,
    image,
    createdBy,
  } = model;

  // 🛒 Handle purchase
  const handlePurchase = async () => {
    try {
      const purchaseData = {
        modelId: _id,
        name,
        framework,
        useCase,
        buyerEmail: user?.email,
      };

      // 1️⃣ Add to purchasedModels collection
      const res = await fetch('http://localhost:5001/purchasedModels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(purchaseData),
      });

      if (res.ok) {
        // 2️⃣ Increment purchase count
        const updateRes = await fetch(
          `http://localhost:5001/models/${_id}/purchase`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (updateRes.ok) {
          setPurchaseCount(prev => prev + 1);
          swal('Success', 'Model purchased successfully!', 'success');
        } else {
          swal('Error', 'Failed to update purchase count', 'error');
        }
      } else {
        swal('Error', 'Failed to purchase model', 'error');
      }
    } catch (error) {
      console.error(error);
      swal('Error', 'Something went wrong', 'error');
    }
  };

  // 🗑️ Handle delete
  const handleDelete = async () => {
    const confirmDelete = await swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this model!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    });

    if (confirmDelete) {
      try {
        const res = await fetch(`http://localhost:5001/models/${_id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          swal('Deleted!', 'Model has been deleted.', 'success');
          navigate('/allmodels');
        } else {
          swal('Error', 'Failed to delete model.', 'error');
        }
      } catch (error) {
        console.error(error);
        swal('Error', 'Something went wrong.', 'error');
      }
    }
  };

  // 🖊️ Handle edit redirect
  const handleEdit = () => navigate(`/editmodel/${_id}`);

  return (
    <div className="max-w-5xl mx-auto my-10 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 bg-gray-50 flex justify-center items-center">
          <img
            src={image || '/placeholder.png'}
            alt={name}
            className="w-full h-80 object-contain p-4"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
          <p className="text-gray-700">
            <span className="font-semibold">Framework:</span> {framework}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Use Case:</span> {useCase}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Dataset:</span> {dataset}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Description:</span> {description}
          </p>

          <p className="text-gray-900 font-semibold">
            Purchased {purchaseCount} {purchaseCount === 1 ? 'time' : 'times'}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {/* Purchase */}
            <button
              onClick={handlePurchase}
              className="px-5 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md hover:opacity-90 transition"
            >
              Purchase Model
            </button>

            {/*Buttons for Creator */}
            {user?.email === createdBy && (
              <>
                <button
                  onClick={handleEdit}
                  className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
