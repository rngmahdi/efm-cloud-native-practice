import { mongoose } from "mongoose";

const projectShema = mongoose.Schema({
   Nomproject: {
      type: String,
      require: true
   },
   Type: {
      type: String,
      require: true
   },
   Statut: {
      type: String,
      require: true
   },
   Employees: {
      type: Array,
      require: false
   }
})

const Project = mongoose.model("Project", projectShema)
export { Project };