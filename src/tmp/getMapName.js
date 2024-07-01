import axios from "axios";

const fetch = async () => {
  const res = await axios.get(
    "https://raw.githubusercontent.com/apisit/thailand.json/master/thailandwithdensity.json"
  );
  const data = res.data;
  const mapData = data.features.map((el) => el.properties.name.toUpperCase());
  console.log(mapData);
};

fetch();
