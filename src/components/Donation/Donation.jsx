import { useEffect, useState } from "react";
import { getStoreData } from "../Utilities/LocalStorage";
import DonationCard from "./DonationCard/DonationCard";

const Donation = () => {
  const [DonationData, setDonationData] = useState([]);
  const [ApplyDonate, setApplyDonate] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setDonationData(data));
  }, []);

  useEffect(() => {
    const storeData = getStoreData();
    if (DonationData.length > 0) {
      const appliedDonate = DonationData.filter((singleData) =>
        storeData.includes(singleData.id)
      );
      setApplyDonate(appliedDonate);
    }
  }, [DonationData]);

  return (
    <div className="max-w-6xl mx-auto mt-10 ">
      <div className="grid grid-cols-2">
        {ApplyDonate.map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </div>
      <div className="mx-auto flex justify-center">
        <button className="btn btn-success text-white">Show All</button>
      </div>
    </div>
  );
};

export default Donation;
