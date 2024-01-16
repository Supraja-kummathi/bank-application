import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getBranchById, updateBranch } from "../../../../redux/reducers/branch/branchSlice";
import Button from "../../../../utilities/Button";
import toast from 'react-hot-toast';
import { Country, State, City } from "country-state-city";
const UpdateBranch = () => {
  let { branchId } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [updatedState, setUpdatedState] = useState();
<<<<<<< HEAD
  let [cou, setCon] = useState(null);
=======
>>>>>>> ef045e2e40959f916a69d7972c08eeed4ac67696
  
  useEffect(() => {
  dispatch(getBranchById(branchId))
  .then((x) => setUpdatedState(x.payload.data));
  }, [branchId]);


  const handleChange = (e) => {
   if (Object.keys(updatedState.address).includes(e.target.name)) {
      setUpdatedState({
        ...updatedState,
        address: { ...updatedState.address, [e.target.name]: e.target.value },
      });
    } else {
      setUpdatedState({
        ...updatedState,
        [e.target.name]: e.target.value,
      });
    }
  };
 
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBranch(updatedState));
    navigate("/mdlayout/all-branches");
    toast.success("updated successfully")
  };
  console.log(updatedState)
  return (
    <section className="h-[100%] w-[100%] relative">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">Update Branch</div>
        <form onSubmit={handleSubmit} className="p-2 ps-4">
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchName" className="text-[rgb(145,142,143)]">
              Branch Name
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter here..."
              id="branchName"
              name="branchName"
              value={updatedState && updatedState.branchName}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchEmail" className="text-[rgb(145,142,143)]">
              Email
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="email"
              placeholder="Enter Email"
              id="branchEmail"
              name="branchEmail"
              value={updatedState && updatedState.branchEmail}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchPhoneNumber" className="text-[rgb(145,142,143)]">
              Phone number
            </label>
            <input
              className=" w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter Phonenumber"
              id="branchPhoneNumber"
              name="branchPhoneNumber"
              value={updatedState && updatedState.branchPhoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="addressId" className="text-[rgb(145,142,143)]">
              Main Branch Address
            </label>
            <textarea
              className="p-2 w-[80%] rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              id="addressId"
              name="addressId"
              value={updatedState && updatedState.address.addressId}
              onChange={handleChange}
              cols={30}
              rows={3}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="country" className="text-[rgb(145,142,143)]">
              Country
            </label>

            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="country"
              id="country"
              value={updatedState.country}
              onChange={e => {
                console.log(e.target.value);
                setCon(
                  Country.getAllCountries().filter(ele => {
                    return ele.name == e.target.value;
                  })[0].isoCode
                );
                setUpdatedState({ ...updatedState, country: e.target.value });
              }}
            >
              {Country.getAllCountries().map(city => {
                return <option value={city.name}>{city.name}</option>;
              })}
            </select>
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="city" className="text-[rgb(145,142,143)]">
              City
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="city"
              id="city"
              value={updatedState.city}
              onChange={e => {
                setUpdatedState({ ...updatedState, city: e.target.value });
              }}
            >
              {City.getCitiesOfCountry(cou).map(city => {
                return <option value={city.name}>{city.name}</option>;
              })}
            </select>
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="pincode" className="text-[rgb(145,142,143)]">
              Pincode
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{6}"
              placeholder="Enter pincode"
              id="pincode"
              name="pincode"
              value={updatedState && updatedState.address.pincode}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchType" className="text-[rgb(145,142,143)]">
              Branch type
            </label>
            <select
              name="branchType"
              id="branchType"
              value={updatedState && updatedState.branchType}
              onChange={handleChange}
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-[rgb(145,142,143)] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
            >
              <option value="">--select here--</option>
              <option value="METRO">Metro branches</option>
              <option value="SEMIURBAN">Semi-Urban branches</option>
              <option value="RURAL">Rural branches</option>
            </select>
          </div>
          <div className="flex justify-end pt-4">
            <Button type="submit" name="Update Branch"></Button>
          </div>
        </form>
      </section>
    </section>

  );
};

export default UpdateBranch;
