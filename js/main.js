$(document).ready(function(){

  var ratio = 1.7775
  var img_width = $(window).width();
  var img_height = img_width/ratio;
  var win_height = $(window).height();
  var diff = (win_height - img_height)/2;
  var diff2 = (win_height - img_height+50)/2;
  $("#title-img").css({
      "margin-top": diff + 'px'
  });
  $("#intern-img").css({
      "top": diff2 + 'px'
  });
    var controller = new ScrollMagic.Controller();

    var t = new TimelineMax();
    t.to("#transition-color",1,{opacity:1})
        .to("#scroll",0.2,{opacity:0},0);
    var transition = new ScrollMagic.Scene({
        triggerElement:"#transition-color",
        triggerHook:0,
        duration:'70%'
        })
        .setTween(t)
        .addTo(controller);


    var images = [
        "images/Transformation/introSpritesheet_01.png",
        "images/Transformation/introSpritesheet_02.png",
        "images/Transformation/introSpritesheet_03.png",
        "images/Transformation/introSpritesheet_04.png",
        "images/Transformation/introSpritesheet_05.png",
        "images/Transformation/introSpritesheet_06.png",
        "images/Transformation/introSpritesheet_07.png",
        "images/Transformation/introSpritesheet_08.png",
        "images/Transformation/introSpritesheet_09.png",
        "images/Transformation/introSpritesheet_10.png",
        "images/Transformation/introSpritesheet_11.png",
        "images/Transformation/introSpritesheet_12.png",
        "images/Transformation/introSpritesheet_13.png",
        "images/Transformation/introSpritesheet_14.png",
        "images/Transformation/introSpritesheet_15.png",
        "images/Transformation/introSpritesheet_16.png",
        "images/Transformation/introSpritesheet_17.png",
        "images/Transformation/introSpritesheet_18.png",
        "images/Transformation/introSpritesheet_19.png",
        "images/Transformation/introSpritesheet_20.png",
        "images/Transformation/introSpritesheet_21.png",
        "images/Transformation/introSpritesheet_22.png",
        "images/Transformation/introSpritesheet_23.png",
        "images/Transformation/introSpritesheet_24.png",
        "images/Transformation/introSpritesheet_25.png",
        "images/Transformation/introSpritesheet_26.png",
        "images/Transformation/introSpritesheet_27.png",
        ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {curImg: 0};

    // create tween
    var tween = TweenMax.to(obj, 6,
    {
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
            $("#myimg").attr("src", images[obj.curImg]); // set the image source
        },
        delay:1
    });

    // build scene
    var scene2 = new ScrollMagic.Scene({triggerElement: "#transition-color", duration: "100%",triggerHook:0})
        .setTween(tween)
        .addTo(controller);
    var pin1 = new ScrollMagic.Scene({triggerElement: "#transition-color", triggerHook:0})
        .setPin("#scroll-button")
        .addTo(controller);
    var images2 = [
        "images/Walking/8.png",
        "images/Walking/7.png",
        "images/Walking/6.png",
        "images/Walking/5.png",
        "images/Walking/4.png",
        "images/Walking/3.png",
        "images/Walking/2.png",
        "images/Walking/1.png"
        ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj2 = {curImg: 0};

    // create tween
    var tween2 = TweenMax.to(obj2, 5,
    {
        curImg: images2.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 5,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
            $("#img-walk").attr("src", images2[obj2.curImg]); // set the image source
        }
    });

    // build scene
    var scene5 = new ScrollMagic.Scene({triggerElement: ".next", duration: "300%",triggerHook:1})
        .setTween(tween2)
        .addTo(controller);

    var walkpartfadeout = new ScrollMagic.Scene({triggerElement: ".next",triggerHook:1})
        .setTween("#myimg",0,{opacity:0})
        .addTo(controller);

    var walkpartfadein = new ScrollMagic.Scene({triggerElement: ".next",triggerHook:1})
        .setTween("#img-walk",0,{opacity:1})
        .addTo(controller);

    var walkpartfadingout = new ScrollMagic.Scene({triggerElement: "#garage",triggerHook:0.45})
        .setTween("#img-walk",0,{width: "0px"})
        .addTo(controller);

    var bikefadein = new ScrollMagic.Scene({triggerElement: "#garage",triggerHook:0.45})
        .setTween("#bike-img",0,{opacity:1})
        .addTo(controller);



    var bikefadingout = new ScrollMagic.Scene({triggerElement: "#garage2",triggerHook:0.45})
        .setTween("#bike-img",0,{width: "0px"})
        .addTo(controller);

    var carfadein = new ScrollMagic.Scene({triggerElement: "#garage2",triggerHook:0.45})
        .setTween("#car-img",0,{opacity:1})
        .addTo(controller);



    var pinabout = new ScrollMagic.Scene({
        triggerElement:"#trigger1",
        triggerHook:0.3,
        duration:0
        })
        .setPin("#trigger1")
        .addTo(controller);
    var pincontent = new ScrollMagic.Scene({
        triggerElement:"#trigger2",
        triggerHook:0.2,
        duration:0
        })
        .setPin("#trigger2")
        .addTo(controller);

    var t2 = new TimelineMax();
    t2.from("#heading",2,{right:'-60vw',ease: Sine.easeOut})
    .from("#content",2,{left:'-50vw', ease: Sine.easeOut},0);
    var about = new ScrollMagic.Scene({
        triggerElement:"#trigger1",
        triggerHook:0.3,
        duration:'30%'
        })
        .setTween(t2)
        .addTo(controller);

    var t3 = new TimelineMax();
    t3.to("#heading",2,{right:'-60vw',ease: Sine.easeOut})
        .to("#content",2,{left:'-50vw', ease: Sine.easeOut},0)
        .to("#heading",0.1,{width:'0',ease: Sine.easeOut},0)
        .to("#content",0.1,{width:'0',ease: Sine.easeOut},0)
        .to("#heading",0.1,{height:'0',ease: Sine.easeOut},0)
        .to("#content",0.1,{height:'0',ease: Sine.easeOut},0);
    var out = new ScrollMagic.Scene({
        triggerElement:"#garage",
        triggerHook:1,
        duration:'30%'
    })
    .setTween(t3)
    .addTo(controller);

    var cloudtimeline = new TimelineMax();
    cloudtimeline.to("#wrapper-cloud",1,{left:'100vw'});
    var cloudscene = new ScrollMagic.Scene({triggerElement: "#wrapper-cloud",duration: '120%',triggerHook:1})
        .setTween(cloudtimeline)
        .addTo(controller);


    var cloudtimeline2 = new TimelineMax();
    cloudtimeline2.to("#wrapper-cloud2",1,{right:'100vw'});
    var cloudscene2 = new ScrollMagic.Scene({triggerElement:"#wrapper-cloud2",duration: '120%',triggerHook:1})
        .setTween(cloudtimeline2)
        .addTo(controller);

    var cloudtimeliner = new TimelineMax();
    cloudtimeliner.to("#wrapper-cloud6",1,{left:'100vw'});
    var cloudscene234 = new ScrollMagic.Scene({triggerElement:"#wrapper-cloud6",duration: '120%',triggerHook:1})
        .setTween(cloudtimeliner)
        .addTo(controller);


    // var row1 = new TimelineMax();
    // row1
    // .to("#home-img-l1",0.5,{scaleY:1.3})
    // .to("#home-img-r2",0.5,{scaleY:1.3},0)
    // .to("#home-img-l2",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-r1",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-l1",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-r2",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-l2",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-r1",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-l1",0.5,{scaleX:1},1)
    // .to("#home-img-r2",0.5,{scaleX:1},1)
    // .to("#home-img-l2",0.5,{scaleX:1},1.4)
    // .to("#home-img-r1",0.5,{scaleX:1},1.4);
    //
    // var row1b = new ScrollMagic.Scene({
    //   triggerElement:"#events-logo",
    //   triggerHook:0.2,
    //   duration:'30%'
    // })
    //   .setTween(row1)
    //   .addTo(controller);
    //
    // var row2 = new TimelineMax();
    // row2
    // .to("#home-img-l3",0.5,{scaleY:1.3})
    // .to("#home-img-r4",0.5,{scaleY:1.3},0)
    // .to("#home-img-l4",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-r3",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-l3",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-r4",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-l4",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-r3",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-l3",0.5,{scaleX:1},1)
    // .to("#home-img-r4",0.5,{scaleX:1},1)
    // .to("#home-img-l4",0.5,{scaleX:1},1.4)
    // .to("#home-img-r3",0.5,{scaleX:1},1.4);
    //
    // var row2b = new ScrollMagic.Scene({
    //   triggerElement:"#events-logo",
    //   triggerHook:0.2,
    //   duration:'30%',
    //   offset:150,
    // })
    //   .setTween(row2)
    //   .addTo(controller);
    //
    // var row3 = new TimelineMax();
    // row3
    // .to("#home-img-l5",0.5,{scaleY:1.3})
    // .to("#home-img-r6",0.5,{scaleY:1.3},0)
    // .to("#home-img-l6",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-r5",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-l5",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-r6",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-l6",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-r5",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-l5",0.5,{scaleX:1},1)
    // .to("#home-img-r6",0.5,{scaleX:1},1)
    // .to("#home-img-l6",0.5,{scaleX:1},1.4)
    // .to("#home-img-r5",0.5,{scaleX:1},1.4);
    //
    // var row3b = new ScrollMagic.Scene({
    //   triggerElement:"#events-logo",
    //   triggerHook:0.2,
    //   duration:'30%',
    //   offset:300,
    // })
    //   .setTween(row3)
    //   .addTo(controller);
    //
    // var row4 = new TimelineMax();
    // row4
    // .to("#home-img-l7",0.5,{scaleY:1.3})
    // .to("#home-img-r8",0.5,{scaleY:1.3},0)
    // .to("#home-img-l8",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-r7",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-l7",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-r8",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-l8",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-r7",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-l7",0.5,{scaleX:1},1)
    // .to("#home-img-r8",0.5,{scaleX:1},1)
    // .to("#home-img-l8",0.5,{scaleX:1},1.4)
    // .to("#home-img-r7",0.5,{scaleX:1},1.4);
    //
    // var row4b = new ScrollMagic.Scene({
    //   triggerElement:"#events-logo",
    //   triggerHook:0.2,
    //   duration:'30%',
    //   offset:450,
    // })
    //   .setTween(row4)
    //   .addTo(controller);
    //
    // var row5 = new TimelineMax();
    // row5
    // .to("#home-img-l9",0.5,{scaleY:1.3})
    // .to("#home-img-r10",0.5,{scaleY:1.3},0)
    // .to("#home-img-l10",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-r9",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-l9",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-r10",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-l10",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-r9",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-l9",0.5,{scaleX:1},1)
    // .to("#home-img-r10",0.5,{scaleX:1},1)
    // .to("#home-img-l10",0.5,{scaleX:1},1.4)
    // .to("#home-img-r9",0.5,{scaleX:1},1.4);
    //
    // var row5b = new ScrollMagic.Scene({
    //   triggerElement:"#events-logo",
    //   triggerHook:0.2,
    //   duration:'30%',
    //   offset:600,
    // })
    //   .setTween(row5)
    //   .addTo(controller);
    //
    // var row6 = new TimelineMax();
    // row6
    // .to("#home-img-l11",0.5,{scaleY:1.3})
    // .to("#home-img-r12",0.5,{scaleY:1.3},0)
    // .to("#home-img-l12",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-r11",0.5,{scaleY:1.2},0.4)
    // .to("#home-img-l11",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-r12",0.5,{scaleX:1.1,scaleY:1},0.5)
    // .to("#home-img-l12",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-r11",0.5,{scaleX:1.1,scaleY:1},0.9)
    // .to("#home-img-l11",0.5,{scaleX:1},1)
    // .to("#home-img-r12",0.5,{scaleX:1},1)
    // .to("#home-img-l12",0.5,{scaleX:1},1.4)
    // .to("#home-img-r11",0.5,{scaleX:1},1.4);
    //
    // var row5b = new ScrollMagic.Scene({
    //   triggerElement:"#events-logo",
    //   triggerHook:0.2,
    //   duration:'30%',
    //   offset:750,
    // })
    //   .setTween(row6)
    //   .addTo(controller);

    // var eventsltl = new TimelineMax();
    // eventsltl
    //   .to("#events-left",1,{y:'50%'})
    //   .to("#events-right",1,{y:'50%'},0)
    // ;
    //
    // var eventsl = new ScrollMagic.Scene({
    //   triggerElement:"#events-logo",
    //   triggerHook:0.6,
    //   duration:'200%',
    //   offset:200
    // })
    //   .setTween(eventsltl)
    //   .addTo(controller);


    // to be added
    var m1fadeintl = new TimelineMax();
    m1fadeintl
    .to("#m-1-left",1,{opacity:1});
    var m1fadein = new ScrollMagic.Scene({
      triggerElement:"#m1-trigger",
      triggerHook:0.5,
      duration:'30%'
    })
      .setTween(m1fadeintl)
      .addTo(controller);
    var m1tl = new TimelineMax();
    m1tl
      .to("#m-1",1,{y:'300vh'})
    ;

    var m1 = new ScrollMagic.Scene({
      triggerElement:"#m1-trigger",
      triggerHook:0.7,
      duration:'140%',
    })
      .setTween(m1tl)
      .addTo(controller);

    var m1fadeintl2 = new TimelineMax();
    m1fadeintl2
    .to("#m-2-right",1,{opacity:1});

    var m1fadein2 = new ScrollMagic.Scene({
      triggerElement:"#m2-trigger",
      triggerHook:0.5,
      duration:'30%'
    })
      .setTween(m1fadeintl2)
      .addTo(controller);

    var m2tl = new TimelineMax();
    m2tl
      .to("#m-2",1,{y:'300vh'})
    ;
    var m2 = new ScrollMagic.Scene({
      triggerElement:"#m2-trigger",
      triggerHook:0.7,
      duration:'140%'
    })
      .setTween(m2tl)
      .addTo(controller);

    var m1fadeintl3 = new TimelineMax();
    m1fadeintl3
    .to("#m-3-left",1,{opacity:1});
    // .to("#m-3-right",1,{scale:1.1,ease: Bounce.easeOut},0);;

    var m1fadein3 = new ScrollMagic.Scene({
      triggerElement:"#m3-trigger",
      triggerHook:0.5,
      duration:'30%'
    })
      .setTween(m1fadeintl3)
      .addTo(controller);

    var m3tl = new TimelineMax();
    m3tl
      .to("#m-3",1,{y:'300vh'});
    var m3 = new ScrollMagic.Scene({
      triggerElement:"#m3-trigger",
      triggerHook:0.7,
      duration:'140%'
    })
      .setTween(m3tl)
      .addTo(controller);


    var m1fadeintl4 = new TimelineMax();
    m1fadeintl4
    .to("#m-4-right",1,{opacity:1});
    // .to("#m-3-right",1,{scale:1.1,ease: Bounce.easeOut},0);;

    var m1fadein4 = new ScrollMagic.Scene({
      triggerElement:"#m4-trigger",
      triggerHook:0.8,
      duration:'30%'
    })
      .setTween(m1fadeintl4)
      .addTo(controller);

    var m4tl = new TimelineMax();
    m4tl
      .to("#m-4",1,{y:'300vh'});
    var m3 = new ScrollMagic.Scene({
      triggerElement:"#m4-trigger",
      triggerHook:0.6,
      duration:'140%',
      offset:200
    })
      .setTween(m4tl)
      .addTo(controller);

    var w1fadeintl = new TimelineMax();
    w1fadeintl
    .to("#ws1-left",1,{opacity:1})
    .to("#ws1-right",1,{scale:1.1,ease: Bounce.easeOut},0);

    var w1fadein = new ScrollMagic.Scene({
      triggerElement:"#ws-1",
      triggerHook:0.8,
      duration:'30%'
    })
      .setTween(w1fadeintl)
      .addTo(controller);

    var w1tl = new TimelineMax();
    w1tl
      .to("#ws-1",1,{y:'300vh'});
    var w1 = new ScrollMagic.Scene({
      triggerElement:"#ws-1",
      triggerHook:1,
      duration:'140%',
      offset:250
    })
      .setTween(w1tl)
      .addTo(controller);

    var w1fadeintl2 = new TimelineMax();
    w1fadeintl2
    .to("#ws2-right",1,{opacity:1})
    .to("#ws2-left",1,{scale:1.1,ease: Bounce.easeOut},0);

    var w1fadein2 = new ScrollMagic.Scene({
      triggerElement:"#ws-2",
      triggerHook:0.5,
      duration:'30%'
    })
      .setTween(w1fadeintl2)
      .addTo(controller);

    var w2tl = new TimelineMax();
    w2tl
      .to("#ws-2",1,{y:'300vh'});
    var w3 = new ScrollMagic.Scene({
      triggerElement:"#ws-2",
      triggerHook:1,
      duration:'140%',
      offset:250
    })
      .setTween(w2tl)
      .addTo(controller);

    var w1fadeintl3 = new TimelineMax();
    w1fadeintl3
    .to("#ws3-left",1,{opacity:1})
    .to("#ws3-right",1,{scale:1.1,ease: Bounce.easeOut},0);

    var w1fadein3 = new ScrollMagic.Scene({
      triggerElement:"#ws-3",
      triggerHook:0.8,
      duration:'30%'
    })
      .setTween(w1fadeintl3)
      .addTo(controller);

    var w3tl = new TimelineMax();
    w3tl
      .to("#ws-3",1,{y:'300vh'});
    var w3 = new ScrollMagic.Scene({
      triggerElement:"#ws-3",
      triggerHook:1,
      duration:'140%',
      offset:250
    })
      .setTween(w3tl)

      .addTo(controller);
    var w1fadeintl4 = new TimelineMax();
    w1fadeintl4
    .to("#ws4-right",1,{opacity:1})
    .to("#ws4-left",1,{scale:1.1,ease: Bounce.easeOut},0);

    var w1fadein4 = new ScrollMagic.Scene({
      triggerElement:"#ws-4",
      triggerHook:0.5,
      duration:'30%'
    })
      .setTween(w1fadeintl4)
      .addTo(controller);
    var w4tl = new TimelineMax();
    w4tl
      .to("#ws-4",1,{y:'90%'});
    var w4 = new ScrollMagic.Scene({
      triggerElement:"#ws-4",
      triggerHook:1,
      duration:'150%',
      offset:200
    })
      .setTween(w4tl)
      .addTo(controller);

    var logopintl = new TimelineMax();
    logopintl.to("#l-trigger",0.5,{opacity:1});

    var logopin = new ScrollMagic.Scene({
      triggerElement:"#l-trigger",
      triggerHook:0,
      duration:1
    })
      .setTween(logopintl)
      .addTo(controller);
    var pinl = new ScrollMagic.Scene({
      triggerElement:"#l-trigger",
      triggerHook:0
    })
      .setPin("#l-trigger")
      .addTo(controller);

    var mtl = new TimelineMax();
    mtl.to("#m-right",1,{x:'15%'})
      .to("#m-left",1,{x:'-35%'},0);

    var mt = new ScrollMagic.Scene({
      triggerElement:"#m-right",
      triggerHook:0.7,
      duration:'120%'
    })
      .setTween(mtl)
      .addTo(controller);
    //
    // var carfout = new ScrollMagic.Scene({
    //   triggerElement:"#t-trig",
    //   triggerHook:0.8,
    //   duration:0.1
    // })
    //   .setTween("#car-img",0.1,{opacity:0})
    //   .addTo(controller);
    var carfadingout = new ScrollMagic.Scene({triggerElement: "#t-trig",triggerHook:0.8})
        .setTween("#car-img",0,{width: "0px"})
        .addTo(controller);

    var trainpin = new ScrollMagic.Scene({
      triggerElement:"#t-trig",
      triggerHook:0.3,
    })
      .setPin("#train")
      .addTo(controller);

    var trainspeed = new ScrollMagic.Scene({
      triggerElement:"#t-trig",
      triggerHook:0.1,
      duration:'20%'
    })
      .setTween("#train",1,{y:'30%'})
      .addTo(controller);

    var trainfadingout = new ScrollMagic.Scene({triggerElement: "#cloud-l",triggerHook:0,offset:'300%'})
        .setTween("#train",0,{width: "0px"})
        .addTo(controller);

    var cloudtl =new TimelineMax();
    cloudtl
    .to("#cloud-l",0.5,{x:'-3%'})
    .to("#cloud-r",0.5,{x:'3%'},0);

    var cloud123 = new ScrollMagic.Scene({
      triggerElement:"#cloud-c",
      triggerHook:0,
      duration:300
    })
    .setTween(cloudtl)
    .addTo(controller);

    var playcloud = new ScrollMagic.Scene({
      triggerElement:"#wrapper-cloud3",
      triggerHook:1,
      duration:'200%'
    })
      .setTween("#wrapper-cloud3",1,{y:'-400%'})
      .addTo(controller);
    var playcloud = new ScrollMagic.Scene({
      triggerElement:"#wrapper-cloud4",
      triggerHook:1,
      duration:'200%'
    })
      .setTween("#wrapper-cloud4",1,{y:'-400%'})
      .addTo(controller);
    var playcloud = new ScrollMagic.Scene({
      triggerElement:"#wrapper-cloud5",
      triggerHook:1,
      duration:'200%'
    })
      .setTween("#wrapper-cloud5",1,{y:'-600%'})
      .addTo(controller);
    var playcloud = new ScrollMagic.Scene({
      triggerElement:"#wrapper-cloud7",
      triggerHook:1,
      duration:'200%'
    })
      .setTween("#wrapper-cloud7",1,{y:'-400%'})
      .addTo(controller);
    var playcloud = new ScrollMagic.Scene({
      triggerElement:"#wrapper-cloud8",
      triggerHook:1,
      duration:'200%'
    })
      .setTween("#wrapper-cloud8",1,{y:'-400%'})
      .addTo(controller);
    var playcloud = new ScrollMagic.Scene({
      triggerElement:"#wrapper-cloud9",
      triggerHook:1,
      duration:'200%'
    })
      .setTween("#wrapper-cloud9",1,{y:'-600%'})
      .addTo(controller);




  var teamtl = new TimelineMax();
  //

  teamtl.to("#mem1",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem2",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem3",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem4",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem5",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem6",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem7",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem8",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem9",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem10",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem11",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem12",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem13",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem14",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem15",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem16",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem17",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem18",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem19",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem20",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem21",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem22",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem23",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem24",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem25",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem26",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem27",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem28",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem29",1,{scale:1,ease:Bounce.easeOut})
    .to("#mem30",1,{scale:1,ease:Bounce.easeOut});



    var teamscene = new ScrollMagic.Scene({
  		triggerElement:"#trigger",
  		triggerHook:0.2, //0.5
  		duration: '100%', //1000
  	})
  		.addTo(controller)
  		.setTween(teamtl);

    // var teampin = new ScrollMagic.Scene({
    //   triggerElement:"#trigger",
    //   triggerHook:0.2,
    //   duration:'10%'
    // })
    //   .addTo(controller)
    //   .setPin("#team");

    var PlanetPin = new ScrollMagic.Scene({
      triggerElement:"#p-trigger",
      triggerHook:0,
      duration:'200%'
    })
      .setPin("#p-cont")
      .addTo(controller);
    var Rocketfadein = new ScrollMagic.Scene({
      triggerElement:"#p-trigger",
      triggerHook:0,
      duration:1
    })
      .setTween("#rocket",0.2,{opacity:1})
      .addTo(controller);
    // var flightpath = {
		// 	looping : {
		// 		curviness: 1.25,
		// 		autoRotate: true,
		// 		values: [
    //       {x:600,y:0},
    //       {x:600,y:450},
		// 			{x:450,	y: 550},
    //       {x:400,y:650},
    //       {x:400,y:850},
    //       {x:600,y:950},
    //       {x:800,y:850},
    //       {x:800,y:650},
    //       {x:750,y:550},
    //       {x:450,	y: 550},
    //       {x:400,y:650},
    //       {x:400,y:850},
    //       {x:500,y:1000},
    //       {x:500,y:1200}
    //       // {x:800,y:600},
    //       // {x:600,y:550}
		// 			]
		// 	},
		// 	// leave : {
		// 	// 	curviness: 1.25,
		// 	// 	autoRotate: true,
		// 	// 	values: [
		// 	// 			{x: 700,	y: 100},
		// 	// 			{x: 800,	y: 130},
		// 	// 			{x: $(window).width() + 300,	y: -100},
		// 	// 		]
		// 	// }
		// };
    var w=$(window).width();
    var vh=$(window).height();
    var h=0.75*vh;
    var ph=$("#planet").height();
    var flightpath = {
      entry: {
        curviness: 0,
				autoRotate: true,
				values: [
          {x:0.42*w,y:0},
        ]
      },
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [

          {x:0.39*w,y:h-0.7*ph},
					{x:0.33*w,y:h-0.20*ph},
          {x:0.29*w,y:h+0.1*ph},
          {x:0.29*w,y:h+0.7*ph},
          {x:0.42*w,y:h+1.1*ph},
          {x:0.540*w,y:h+0.75*ph},
          {x:0.540*w,y:h+0.1*ph},
          {x:0.47*w,y:h-0.25*ph},
          {x:0.380*w,y:h-0.25*ph},
          {x:0.30*w,y:h+0.1*ph},
          {x:0.29*w,y:h+0.7*ph},
          {x:0.37*w,y:h+1.1*ph},
          {x:0.39*w,y:1000},
          {x:0.42*w,y:1500}
          // {x:800,y:600},
          // {x:600,y:550}
					]
			},
			// leave : {
			// 	curviness: 1.25,
			// 	autoRotate: true,
			// 	values: [
			// 			{x: 700,	y: 100},
			// 			{x: 800,	y: 130},
			// 			{x: $(window).width() + 300,	y: -100},
			// 		]
			// }
		};
    var rocketantl = new TimelineMax()
			.add(TweenMax.to("#rocket", 1, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#rocket"), 20, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
      .to("#cont-1",0.5,{opacity:1},7)
      .to("#cont-2",0.5,{opacity:1},9)
      .to("#cont-3",0.5,{opacity:1},10)
      .to("#cont-4",0.5,{opacity:1},11);
			// .add(TweenMax.to($("#rocket"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

    var rocketsc = new ScrollMagic.Scene({triggerElement: "#p-trigger", duration:3000,triggerHook:0.3})
						.setTween(rocketantl)
						.addTo(controller);

    var s1tl = new TimelineMax();
    s1tl
      .to("#sponsors-left",1,{y:'90%'})
      .to("#sponsors-right",1,{y:'90%'},0)
    ;

    var s1 = new ScrollMagic.Scene({
      triggerElement:"#s-logo",
      triggerHook:1,
      duration:'200%',
      offset:200
    })
      .setTween(s1tl)
      .addTo(controller);
 });

$(window).resize(function(){
    if (!(screen.height == window.innerHeight) && screen.width > 1100)
    {
        location.reload();
    }
});
