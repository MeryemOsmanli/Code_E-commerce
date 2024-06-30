const express = require('express');
const UserController = require('../controller/user.controller');
// const protect = require('../middleware/auth.middleware');
const router = express.Router()

// Get 
router.get('/', UserController.getAll)
// Post
router.post('/register', UserController.register)
router.post('/login', UserController.login)
// Get
router.get('/getMe', UserController.getMe)
// Put
router.put('/updateIsLogin/:id', UserController.updateUserIsLogin);
// Delete
router.delete('/:id', UserController.deleteUser)
// Get
router.get('/:id', UserController.getOne)
// Wishlist Routes
router.put('/addToWishlist/:productId', UserController.addToWishlist);
router.put('/removeFromWishlist/:productId', UserController.removeFromWishlist);

// Basket Routes
router.put('/addToBasket/:productId', UserController.addToBasket);
router.put('/decreaseBasketItem/:productId', UserController.decreasedBasket);
router.put('/deleteFromBasket/:productId', UserController.removeItemFromBasket);
router.put('/clearBasket/:id', UserController.clearBasket);



module.exports = router