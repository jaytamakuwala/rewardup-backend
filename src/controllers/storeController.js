const { Store } = require("../models/Store");

exports.getAllStores = async (req, res) => {
  const { name } = req.params;
  try {
    const store = await Store.findOne({ where: { name } });

    if (store) {
      return res
        .status(200)
        .send({ data: store, message: "all stores fetched successfully" });
    } else {
      return res.status(404).send({ message: "Store not found" });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};
