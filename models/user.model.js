const mongoose = require("mongoose");
/// oauth 0 : nom et mot de passe 
/// oauth 1 : nom numero de telephone et mdp

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "veuillez entrer votre nom "],
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    password: {
      type: String,
    },

    role: {
      type: Number,
      default: 0, // 0 pour les visiteurs non instcrits , 1 pour les utilisateurs inscrits , 2 pour les hotes , 3 pour les admins , 4 pour le superAdmin
    },
    createur : {
    type: String,
    trim: true
    },
    reservations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tables", 
      },
    ],

    tables: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tables", 
      },
    ],
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/it-engineering-factory/image/upload/v1654873543/mes%20outils/avatar_v8ixww.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
