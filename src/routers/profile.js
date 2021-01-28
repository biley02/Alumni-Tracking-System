const profileRouter=require("../controllers/profile");
const router=require("express").Router();
const auth=require("../middleware/auth");

// edit user profile
router.patch("/users/me/profile_edit",auth,profileRouter.profileUpdate);

// delete user profile
router.delete("/users/me/profile_delete",auth,profileRouter.profileDelete);

module.exports=router;