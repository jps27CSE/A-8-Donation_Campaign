import { toast } from "react-toastify";
const getStoreData = () => {
  const storedDonationData = localStorage.getItem("donation-data");

  if (storedDonationData) {
    return JSON.parse(storedDonationData);
  } else {
    return [];
  }
};

const saveDonationData = (id) => {
  const storedDonationData = getStoreData();
  storedDonationData.push(id);
  localStorage.setItem("donation-data", JSON.stringify(storedDonationData));
  toast.success("Donate Successfully ");
};

export { getStoreData, saveDonationData };
