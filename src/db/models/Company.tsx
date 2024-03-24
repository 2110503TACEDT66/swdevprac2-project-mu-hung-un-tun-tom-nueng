import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `Please add company's name`],
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    required: [true, `Please add company's address`],
  },
  website: {
    type: String,
    required: [true, `Please add company's website`],
  },
  desc: {
    type: String,
  },
  tel: {
    type: String,
  },
});

const Company =
  mongoose.models.Company || mongoose.model('Company', CompanySchema);
export default Company;
