const express = require('express')
const { isLoggedIn, isNotLoggedIn } = require('../middlewares')
const { renderProfile, renderJoin, renderMain, renderHashtag } = require('../controllers/pages')

const router = express.Router()

router.use((req, res, next)=>{
    res.locals.user = req.user;
    res.locals.followerCount = req.user?.Followers?.length || 0
    res.locals.followingCount = req.user?.Followings?.length || 0
    res.locals.followingIdList = req.user?.Followings?.map(f=>f.id) || []
    next()
})

router.get('/profile', isLoggedIn, renderProfile)
router.get('/join', isNotLoggedIn, renderJoin)
router.get('/hashtag', renderHashtag)
router.get('/', renderMain)

module.exports = router