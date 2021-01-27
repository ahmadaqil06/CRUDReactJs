import {Express} from React;

var express = require('express');
var bodyparser = require('bodyparser');
var app = express();
var router = require.Router();
var port = process.env.PORT || 3200;