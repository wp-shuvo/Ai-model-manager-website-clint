import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import { useLocation, useNavigate } from 'react-router';

const AddModel = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddModel = e => {
    e.preventDefault();

    const form = e.target;
    const newModel = {
      name: form.name.value,
      framework: form.framework.value,
      useCase: form.useCase.value,
      dataset: form.dataset.value,
      description: form.description.value,
      image: form.image.value,
      createdBy: user?.email || 'anonymous',
      created_at: new Date(),
      purchasedCount: 0,
    };

    console.log('Add New Model data', newModel);

    fetch('http://localhost:5001/models', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newModel),
    })
      .then(res => res.json())
      .then(() => {
        toast.success('✅ Model added successfully!');
        form.reset();
        navigate(location?.state || '/allmodels');
      })
      .catch(err => {
        console.log(err.message);
        toast.error('Failed to add model.');
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="card bg-white shadow-2xl border border-gray-300 w-full max-w-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Add New{' '}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            Ai Model
          </span>
        </h2>

        <form onSubmit={handleAddModel} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-2 font-bold">
              Model Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold"
              placeholder="Model Name ... "
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2 font-bold">
              Framework
            </label>
            <select
              name="framework"
              required
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold"
            >
              <option value="">Select Framework</option>
              <option value="TensorFlow">TensorFlow</option>
              <option value="PyTorch">PyTorch</option>
              <option value="Keras">Keras</option>
              <option value="Scikit-learn">Scikit-learn</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2 font-bold">
              Use Case
            </label>
            <input
              type="text"
              name="useCase"
              required
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold"
              placeholder="Use Case ..."
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2 font-bold">
              Dataset
            </label>
            <input
              type="text"
              name="dataset"
              required
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold"
              placeholder="Dataset ..."
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2 font-bold">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              required
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold"
              placeholder="Describe the model ..."
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm text-gray-700 mb-2 font-bold">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              required
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold"
              placeholder="https://bb.model-image.jpg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            Add Model
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddModel;
