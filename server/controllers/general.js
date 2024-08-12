import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transaction from "../models/Transaction.js";
import Recruits from "../models/Recruit.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const getPendingRecruits = async (req, res) => {
  try {
    const recruits = await Recruits.find({ charRecruitStatus: "pending" })
      .sort({ createdAt: -1 })
      .lean()
      .limit(100)
      .exec();
    res.status(200).json(recruits);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const getRejectedRecruits = async (req, res) => {
  try {
    const rejectedRecruits = await Recruits.find({
      charRecruitStatus: "rejected",
    })
      .sort({ createdAt: -1 })
      .lean()
      .limit(50)
      .exec();
    res.status(200).json(rejectedRecruits);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const getContactedRecruits = async (req, res) => {
  try {
    const contactedRecruits = await Recruits.find({
      charRecruitStatus: "contacted",
    })
      .sort({ createdAt: -1 })
      .lean()
      .limit(100)
      .exec();
    res.status(200).json(contactedRecruits);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const putRejectRecruits = async (req, res) => {
  try {
    const rejectedRecruit = req.body;
    const changedToRejected = await Recruits.findOneAndUpdate(
      { charID: rejectedRecruit.id },
      {
        $set: {
          charRecruitStatus: "rejected",
        },
      }
    );

    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const putContactRecruits = async (req, res) => {
  try {
    console.log("contacted", req.body);
    const contactedRecruit = req.body;
    const changedToContacted = await Recruits.findOneAndUpdate(
      { charID: contactedRecruit.id },
      {
        $set: {
          charRecruitStatus: "contacted",
        },
      }
    );

    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    // Hardcoded values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    // Recent Transaction
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    // Overall Stats
    const overallStat = await OverallStat.find({ year: currentYear });
    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });
    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};
