import express from 'express';
import { login, logout, onboard, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.get("/onboarding", protectRoute, onboard)
// CHECK IF USER LOGGED IN 
router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({ success: true, user: req.user })
})

//CHECK IF USER LOGGED IN.
router.get("/me", protectRoute, onboard, (req, res) => {
    res.status(200).json({ success: true, user: req.user })
})

// router.get("/signup", signup)
// router.get("/login", login)
// router.get("/logout", logout)
// router.get("/onboarding", protectRoute, onboard)
export default router
