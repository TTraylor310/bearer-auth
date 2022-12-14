'use strict';

const { users } = require('../models/index.js');

async function handleSignup(req, res, next) {
  try {
    let userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(200).json(output);
  } catch (e) {
    console.error(e);
    res.status(403).send('error signing up...');
  }
}

async function handleSignin(req, res, next) {
  try {
    console.log('testing num2');
    // const user = {
    //   user: req.user,
    //   token: req.user.token
    // };
    res.status(200).json(req.user);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function handleGetUsers(req, res, next) {
  try {
    const userRecords = await Users.findAll({});
    const list = users.map(user => user.username);
    res.status(200).json(list);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

function handleSecret(req, res, next) {
  res.status(200).text("Welcome to the secret area!");
}

module.exports = {
  handleSignup,
  handleSignin,
  handleGetUsers,
  handleSecret
}
