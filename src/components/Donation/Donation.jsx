import { useEffect, useState } from "react";
import { getStoreData } from "../Utilities/LocalStorage";
import DonationCard from "./DonationCard/DonationCard";

const Donation = () => {
  const [DonationData, setDonationData] = useState([]);
  const [ApplyDonate, setApplyDonate] = useState([]);
  const [lengthItems, setLengthItems] = useState(4);

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setLengthItems(ApplyDonate.length);
    setShowAll(true);
  };

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => {
        setDonationData(data);
      });
  }, []);

  useEffect(() => {
    const storeData = getStoreData();
    if (DonationData.length > 0) {
      const appliedDonate = [];
      storeData.forEach((id) => {
        const matchingDonations = DonationData.filter(
          (singleData) => singleData.id === id
        );
        appliedDonate.push(...matchingDonations);
      });
      setApplyDonate(appliedDonate);
    }
  }, [DonationData]);

  return (
    <div className="max-w-6xl mx-auto mt-10 ">
      <div className="grid grid-cols-2">
        {ApplyDonate.slice(0, lengthItems).map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </div>
      <div className="mx-auto flex justify-center">
        {ApplyDonate.length > 4 && !showAll && (
          <button
            onClick={handleShowAll}
            className="btn btn-success text-white mb-5"
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
