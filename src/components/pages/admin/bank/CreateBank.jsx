import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Button from "../../../../utilities/Button";
import { useDispatch } from "react-redux";
import { createBank } from "../../../../redux/reducers/bank/bankSlice";
import { useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";
<<<<<<< HEAD

=======
>>>>>>> ef045e2e40959f916a69d7972c08eeed4ac67696
const CreateBank = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [cou, setCon] = useState(null);
  const [state, setState] = useState({
    bankName: "",
    address: "",
    addressId: "",
    addressLine: "",
    pincode: "",
    country: "",
    city: "",
  });

  // let randomId = Math.round(Math.random() * 10000);

  let payload = {
    bankName: state.bankName,
    address: {
      addressLine: state.addressLine,
      pincode: state.pincode,
      country: state.country,
      city: state.city,
    },
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createBank(payload));
    console.log(state);

    navigate("/adminlayout/all-bank");
  };
  console.log(payload);

  return (
    <section className="h-[100%] w-[100%] relative">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">Create Bank</div>
        <form onSubmit={handleSubmit} className="p-2 ps-4">
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              Bank Name
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter bankname"
              id="bankname"
              name="bankname"
              value={state.bankName}
              onChange={e => {
                setState({ ...state, bankName: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">
              Main Branch Address
            </label>
            <textarea
              className="p-2 w-[80%] rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              id="branchaddress"
              name="branchaddress"
              value={state.address.addressLine}
              onChange={e => {
                setState({ ...state, addressLine: e.target.value });
              }}
              cols={30}
              rows={3}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
<<<<<<< HEAD
            <label htmlFor="country" className="text-[rgb(145,142,143)]">
=======
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
>>>>>>> ef045e2e40959f916a69d7972c08eeed4ac67696
              Country
            </label>

            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="country"
              id="country"
              value={state.country}
              onChange={e => {
                console.log(e.target.value);
                setCon(
                  Country.getAllCountries().filter(ele => {
                    return ele.name == e.target.value;
                  })[0].isoCode
                );
                setState({ ...state, country: e.target.value });
              }}
            >
<<<<<<< HEAD
=======
              <option disabled value="" className="text-gray-400">
                -- Select The Country --
              </option>
>>>>>>> ef045e2e40959f916a69d7972c08eeed4ac67696
              {Country.getAllCountries().map(city => {
                return <option value={city.name}>{city.name}</option>;
              })}
            </select>
<<<<<<< HEAD
=======
          </div>

          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              City
            </label>

            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="city"
              id="city"
              value={state.city}
              onChange={e => {
                setState({ ...state, city: e.target.value });
              }}
            >
              {" "}
              <option disabled value="" className="text-gray-400">
                -- Select The City --
              </option>
              {City.getCitiesOfCountry(cou).map(city => {
                return <option value={city.name}>{city.name}</option>;
              })}
            </select>
>>>>>>> ef045e2e40959f916a69d7972c08eeed4ac67696
          </div>

          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="city" className="text-[rgb(145,142,143)]">
              City
            </label>

            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="city"
              id="city"
              value={state.city}
              onChange={e => {
                setState({ ...state, city: e.target.value });
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
              value={state.pincode}
              onChange={e => {
                setState({ ...state, pincode: e.target.value });
              }}
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" name="Create Bank"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateBank;
