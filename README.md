Agregaciones al codigo




//--match.controller.js/////////////////////////////////////////////////////////////////

// Mensaje a usuarios que han echo Match
export const msMatches = async (req, res) => {
    try {
        
            const currentUserIsUser1 = Match.user1._id.equals(req.user._id);
            const matchedUser = currentUserIsUser1 ? Match.user2 : Match.user1;

            if (Match.matched) {
                console.log(`Ya has hecho match con el usuario ${matchedUser.username}`);
            } else {
                console.log(`Has hecho match correctamente con el usuario ${matchedUser.username}`);
                Match.matched = true;
                await Match.save();
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
