import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';

const ModelPurchase = () => {
  const { user } = useContext(AuthContext);
  const [models, setmodels] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://ai-model-manager-server-k5f7.vercel.app/myModelPurchase?email=${user.email}`
      )
        .then(res => res.json())
        .then(data => {
          console.log('data from My model', data);
          setmodels(data);
          setLoading(false);
        })
        .catch(error => console.log(error.message));
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#632EE3] border-solid"></div>
      </div>
    );
  }
  const handleDetails = modelId => {
    navigate(`/modeldetails/${modelId}`);
  };

  return (
    <div className="text-black p-4 md:px-16 md:py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 mt-10 text-gray-800">
        MY{' '}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          Purchase
        </span>{' '}
        Model
      </h2>

      {/* Model data table */}
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>SL No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Framework</th>
              <th>Use Case</th>
              <th>CreatedBy</th>
              <th>Purchased by</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {models.map((models, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <td>
                    <div className="flex items-center gap-3 text-gray-800">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={models.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                </td>
                <td>
                  <div className="font-bold">{models.name}</div>
                </td>
                <td>
                  <div className="font-bold">{models.framework}</div>
                </td>
                <th>
                  <div className="font-bold">{models.useCase}</div>
                </th>
                <th>
                  <div className="font-bold">{models.createdBy}</div>
                </th>
                <th>
                  <div className="font-bold">{models.buyerEmail}</div>
                </th>
                <th>
                  <button
                    onClick={() => handleDetails(models.modelId)}
                    className="btn btn-outline btn-primary"
                  >
                    Details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModelPurchase;
