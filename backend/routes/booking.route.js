const express = require('express');
const travelRoute = express.Router();
// model
let travelModel = require('../models/Booking');
travelRoute.route('/create-booking').post((req, res, next) => {
  travelModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
travelRoute.route('/').get((req, res, next) => {
    travelModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
travelRoute.route('/edit-booking/:id').get((req, res, next) => {
   travelModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
travelRoute.route('/update-booking/:id').put((req, res, next) => {
  travelModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Booking successfully updated!')
    }
  })
})
// Delete
travelRoute.route('/delete-booking/:id').delete((req, res, next) => {
  travelModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = travelRoute;
