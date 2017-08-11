"use strict"

const gm = require('gm');

const HTTPStatus = require("http-status")

const path = require('path')

exports.index = async(req, res, next) => {


    try {

        // res.send(
        //     '<form action="/upload" method="post" enctype="multipart/form-data">' +
        //     '<input type="file" name="source">' +
        //     '<input type="submit" value="Upload">' +
        //     '</form>'
        // );
        // res.sendFile(path.resolve(__dirname + '/../views/index.html'));
        res.render('index');
    } catch (error) {
        next(error);
    }
}

exports.upload = async(req, res, next) => {


    try {
        console.log("Received file:\n" + JSON.stringify(req.file.originalname));
        let imgName = req.file.originalname;
        let imgfile = req.file.path;
        console.log(imgfile)


        // gm(imgfile)
        //     .resize(80, 90)
        //     // .quality(50)
        //     // .minify(10)
        //     .noProfile()
        //     .write('public/uploads/new.jpg', function (err) {
        //         if (!err) console.log('done');
        //     });

        imageFunc(imgName, imgfile, 'w1240');
        imageFunc(imgName, imgfile, 'w206');
        imageFunc(imgName, imgfile, 'w322');
        imageFunc(imgName, imgfile, 'w80');
        // return res.status(HTTPStatus.OK).json("Done")
        res.render('display', {img: imgName});
    } catch (error) {
        next(error);
    }
}


function imageFunc(name, path, size) {
    switch (size) {
        case 'w1240':
            gm(path).resize(1240, 450).quality(50)
                .write('images/w1240/' + name, function (err) {
                    if (!err) console.log('done');
                });
            break;
        case 'w206':
            gm(path).resize(206, 230).quality(80)
                .write('images/w206/' + name, function (err) {
                    if (!err) console.log('done');
                });
            break;
        case 'w322':
            gm(path).resize(322, 187).quality(70)
                .write('images/w322/' + name, function (err) {
                    if (!err) console.log('done');
                });
            break;
        case 'w80':
            gm(path).resize(80, 90).quality(95)
                .write('images/w80/' + name, function (err) {
                    if (!err) console.log('done');
                });
            break;

        default:
            console.log("error");
            break;
    }
}