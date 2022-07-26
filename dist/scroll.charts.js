$(document).ready(function () {
    var diseasetype1Width = $("#disease-type1").width();
    var diseasetype1Height = $("#disease-type1").height();
    var diseasetypetextHeight = $("#disease-type-text").height();
    var fixedHeight = diseasetypetextHeight + diseasetype1Height * 1.1;

    $(".disease-type").css("padding-top", diseasetype1Height);


    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#disease-type-imgs",
        triggerHook: 0,
        duration: fixedHeight
    })
        .setPin("#disease-type-imgs")
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: "#hospital419-p1",
        triggerHook: 0.8
    })
        .setClassToggle("#hospital4191", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#hospital419-p2",
        triggerHook: 0.8
    })
        .setClassToggle("#hospital4192", "fadeout")
        .addTo(controller)
		
    new ScrollMagic.Scene({
        triggerElement: "#hospital419-p3",
        triggerHook: 0.8
    })
        .setClassToggle("#hospital4193", "fadeout")
        .addTo(controller)
		
	new ScrollMagic.Scene({
        triggerElement: "#disease-type-p1",
        triggerHook: 0.8
    })
        .setClassToggle("#disease-type1", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#disease-type-p2",
        triggerHook: 0.7
    })
        .setClassToggle("#disease-type2", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#disease-type-p3",
        triggerHook: 0.7
    })
        .setClassToggle("#disease-type3", "fadeout")
        .addTo(controller)
    new ScrollMagic.Scene({
        triggerElement: "#disease-type-p4",
        triggerHook: 0.7
    })
        .setClassToggle("#disease-type4", "fadeout")
        .addTo(controller)
    new ScrollMagic.Scene({
        triggerElement: "#disease-type-p5",
        triggerHook: 0.7
    })
        .setClassToggle("#disease-type5", "fadeout")
        .addTo(controller)
    new ScrollMagic.Scene({
        triggerElement: "#disease-type-p6",
        triggerHook: 0.7
    })
        .setClassToggle("#disease-type6", "fadeout")
        .addTo(controller)
});

$(document).ready(function () {
    var hospital4251Width = $("#hospital4251").width();
    var hospital4251Height = $("#hospital4251").height();
    var hospital425textHeight = $("#hospital425-text").height();
    var fixedHeight = hospital425textHeight + hospital4251Height*1.1;

    /*$(".hospital425").css("padding-top", hospital4251Height);*/
    $("#hospital425-imgs").css("width", hospital4251Width);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: ".start",
        triggerHook: 0,
        duration: fixedHeight
    })
        .setPin("#hospital425-imgs")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p2",
        triggerHook: 0.8
    })
        .setClassToggle("#hospital4251", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p3",
        triggerHook: 0.7
    })
        .setClassToggle("#hospital4252", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p4",
        triggerHook: 0.7
    })
        .setClassToggle("#hospital4253", "fadeout")
        .addTo(controller)
    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p5",
        triggerHook: 0.7
    })
        .setClassToggle("#hospital4254", "fadeout")
        .addTo(controller)
    /*new ScrollMagic.Scene({
        triggerElement: "#hospital425-p6",
        triggerHook: 0.7
    })
        .setClassToggle("#hospital4255", "fadeout")
        .addTo(controller)
    new ScrollMagic.Scene({
        triggerElement: "#hospital425-p7",
        triggerHook: 0.7
    })
        .setClassToggle("#geoq", "fadein")
        .addTo(controller)*/

});

$(document).ready(function () {
    var extradeath1Width = $("#extra-death1").width();
    var extradeath1Height = $("#extra-death1").height();
    var extradeathtextHeight = $("#extra-death-text").height();
    var fixedHeight = extradeathtextHeight;

    /*$(".hospital425").css("padding-top", hospital4251Height);*/
    $("#extra-death-imgs").css("width", extradeath1Width);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#extra-death-start",
        triggerHook: 0,
        duration: fixedHeight
    })
        .setPin("#extra-death-imgs")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#extra-death-p2",
        triggerHook: 0.8
    })
        .setClassToggle("#extra-death1", "fadeout")
        .addTo(controller)
    });


/*$(document).scroll(function(){
    var topnum1=$("#bubble").offset().top-$(document).scrollTop();
    if (topnum1>0){
        $("#bubble").play();
    }});*/
  