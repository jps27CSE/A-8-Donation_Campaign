import { useEffect, useState } from "react";
import { getStoreData } from "../Utilities/LocalStorage";
import ApexChart from "react-apexcharts";

const Statistics = () => {
  const [fulldata, setFullData] = useState([]);
  const [userDonations, setUserDonations] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setFullData(data));

    const userDonationsFromLocalStorage = getStoreData();
    if (userDonationsFromLocalStorage) {
      setUserDonations(userDonationsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    const totalPrice = userDonations.reduce((acc, donationId) => {
      const matchingDonation = fulldata.find(
        (donation) => donation.id === donationId
      );
      if (matchingDonation) {
        return acc + matchingDonation.price;
      }
      return acc;
    }, 0);

    if (totalPrice > 0 && fulldata.length > 0) {
      const totalFullDataPrice = fulldata.reduce(
        (acc, donation) => acc + donation.price,
        0
      );
      const calculatedPercentage = (totalPrice / totalFullDataPrice) * 100;
      setPercentage(calculatedPercentage);
    } else {
      setPercentage(0);
    }
  }, [userDonations, fulldata]);

  const userDonationPercentage = 100 - percentage;

  const pieChartData = [
    { name: "Your Donation", data: 100 - userDonationPercentage },
    { name: "Total Donation", data: userDonationPercentage },
  ];

  const options = {
    labels: pieChartData.map((item) => item.name),
    legend: {
      position: "bottom",
    },
    colors: ["#4d8735", "#FF5733"],
  };

  return (
    <div>
      <div className=" flex justify-center mx-auto mt-5">
        <ApexChart
          options={options}
          series={pieChartData.map((item) => item.data)}
          type="pie"
          width={600}
        />
      </div>
    </div>
  );
};

export default Statistics;
