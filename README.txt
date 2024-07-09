


//--match.controller.js/////////////////////////////////////////////////////////////////

export const msMatches = async (req, res) => {
    try {
        const matches = await Match.find({
            $or: [{ user1: req.user._id }, { user2: req.user._id }]
        }).populate('user1', 'username')
          .populate('user2', 'username');

        const match = matches.find(m => m.user1._id.equals(req.user._id) || m.user2._id.equals(req.user._id));

        if (match) {
            const matchedUser = match.user1._id.equals(req.user._id) ? match.user2 : match.user1;
            res.status(200).json({ message: `Has hecho match correctamente con el usuario ${matchedUser.username}` });
        } else {
            res.status(404).json({ message: "No se encontraron matches" });
        }
    } catch (error) {
        console.error("Error en msMatches: ", error);
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
};
//--user.model.js//////////////////////////////////////////////////////////////////////
const userSch….

 userphone: {
      type: String,
      required: true,
    },



//--match.routes.js///////////////////////////////////////////////////////////////////

import { getAllMatches, getMatches, msMatches } from "../controllers/match.controller.js";



//--auth.controller.js////////////////////////////////////////////////////////////////

req.session.user = {
            username: userFound.username,
            rut: userFound.rut,
            userphone: userFound.userphone,
            email: userFound.email,
            rolName: userFound.roles[0].name
        };

const newUser = new User({
            username: userData.username,
            email: userData.email,
            userphone: userData.userphone,
            rut: userData.rut,
            password: await User.encryptPassword(userData.password),
            roles: [userRole._id]
        });
        await newUser.save();

        const newAdmin = new User({
            username: userData.username,
            email: userData.email,
            rut: userData.rut,
            userphone: userData.userphone,
            password: await User.encryptPassword(userData.password),
            roles: [adminRole._id]
        });
        await newAdmin.save();
 //--initSetup.js/////////////////////////////////////////////////////////////////////


await Promise.all([
      new User({
        username: "Nombre Usuario",
        email: "user@gmail.com",
        rut: "12345678-9",
        userphone:"912371263",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Administrador",
        email: "admin@gmail.com",
        rut: "12345678-0",
        userphone:"912323428",
        password: await User.encryptPassword("admin123"),
        roles: admin._id,
      }).save(),
    ]);

