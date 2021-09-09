const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
// const upload = multer({dest:'uploads/'});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

const User = require("../models/user");

router.get("/", (req, res, next) => {
  User.find()
    .select("firstname lastname gender education bio knownLanguages _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        users: docs.map((doc) => {
          return {
            firstname: doc.firstname,
            lastname: doc.lastname,
            gender: doc.gender,
            education: doc.education,
            knownLanguages: doc.knownLanguages,
            bio: doc.bio,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:8000/user/" + doc._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:userId", (req, res, next) => {
  // res.header('Access-Control-Allow-Origin: *');
  // res.header("Content-Type", "application/json")
  const id = req.params.userId;
  User.findById(id)
    .select("firstname lastname gender knownLanguages education bio _id")
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          user: {
            firstname: doc.firstname,
            lastname: doc.lastname,
            gender: doc.gender,
            education: doc.education,
            knownLanguages: doc.knownLanguages,
            bio: doc.bio,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:8000/user/" + doc._id,
            },
          },
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", upload.single("profilePicture"), (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    education: req.body.education,
    knownLanguages: req.body.knownLanguages,
    bio: req.body.bio,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created user successfully",
        createdUser: {
          firstname: result.firstname,
          lastname: result.lastname,
          gender: result.gender,
          education: result.education,
          knownLanguages: result.knownLanguages,
          bio: result.bio,
          _id: result._id,
          request: {
            type: "GET",
            url: "http://localhost:8000/user/" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.put("/:userId", (req, res, next) => {
  const id = req.params.userId;
  // console.log('put - ', req);
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propId] = ops.value;
  }
  User.findByIdAndUpdate({_id: id}, 
    { 
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    education: req.body.education,
    knownLanguages: req.body.knownLanguages,
    bio: req.body.bio,
  }
  )
  .exec().then((result) => {
      console.log('put result - ',result);
      res.status(200).json({
        message: "User updated",
        request: {
          type: "GET",
          url: "http://localhost:8000/user/" + id,
          body: result
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });;
});

router.delete("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "User deleted",
        request: {
          type: "POST",
          url: "http://localhost:8000/user",
          body: { firstname: "String", lastname: "String", gender: "Boolean" },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
