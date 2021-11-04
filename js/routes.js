(function (global) {
    var pf = {};
    var homeHtml = "pages/Homepage.html";
    let designprojects = "pages/designprojects.html";
    let codingprojects = "pages/codingprojects.html";
    let about = "pages/about.html";
    let contact = "pages/contact.html";

    // single pages DESIGN:
    let designOunass = "pages/designprojectssingle/ounass.html";
    let designIneedthis = "pages/designprojectssingle/ineedthis.html";
    let designAirplanemode = "pages/designprojectssingle/airplanemode.html";
    let designFrenchbrasserie = "pages/designprojectssingle/frenchbrasserie.html";
    let designJumeirah = "pages/designprojectssingle/jumeirah.html";
    let designAnatome = "pages/designprojectssingle/anatome.html";
    let designLeFenetres = "pages/designprojectssingle/lefenetres.html";
    let designKidsCove = "pages/designprojectssingle/KidsCove.html";

    // single pages CODING:
    let codingFBGD = "pages/codingprojectssingle/fbgd.html";
    let codingAirplanemode = "pages/codingprojectssingle/airplanemode.html";
    let codingStudiocapello = "pages/codingprojectssingle/studiocapello.html";
    let codingPinpint = "pages/codingprojectssingle/pinpint.html";

    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    document.addEventListener("DOMContentLoaded", function (event) {
        // On first load, show home page
        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    });

    pf.homeHtml = function () {
        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    // Load the design project page
    pf.designprojects = function () {
        $ajaxUtils.sendGetRequest(designprojects, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    // Load the coding project page
    pf.codingprojects = function () {
        $ajaxUtils.sendGetRequest(codingprojects, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };
    // Load the about page
    pf.about = function () {
        $ajaxUtils.sendGetRequest(about, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    // Load the contact page
    pf.contact = function () {

        $ajaxUtils.sendGetRequest(contact, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    // Load the single projects page
    pf.designOunass = function () {
        $ajaxUtils.sendGetRequest(designOunass, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };
    
    pf.designIneedthis = function () {
        $ajaxUtils.sendGetRequest(designIneedthis, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.designAirplanemode = function () {
        $ajaxUtils.sendGetRequest(designAirplanemode, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.designFrenchbrasserie = function () {
        $ajaxUtils.sendGetRequest(designFrenchbrasserie, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.designJumeirah = function () {
        $ajaxUtils.sendGetRequest(designJumeirah, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.designAnatome = function () {
        $ajaxUtils.sendGetRequest(designAnatome, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.designLeFenetres = function () {
        $ajaxUtils.sendGetRequest(designLeFenetres, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.designKidsCove = function () {
        $ajaxUtils.sendGetRequest(designKidsCove, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.codingFBGD = function () {
        $ajaxUtils.sendGetRequest(codingFBGD, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.codingAirplanemode = function () {
        $ajaxUtils.sendGetRequest(codingAirplanemode, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.codingStudiocapello = function () {
        $ajaxUtils.sendGetRequest(codingStudiocapello, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };

    pf.codingPinpint = function () {
        $ajaxUtils.sendGetRequest(codingPinpint, function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    };


    global.$pf = pf;
})(window);