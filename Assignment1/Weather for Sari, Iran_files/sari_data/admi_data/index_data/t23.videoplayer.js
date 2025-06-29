/* lwnd.com - 2020-07 - Gregor Gullberg*/



/*function videoReady() {
  console.log('videoReady(): we can start our banner');
  vp.someFancyFunction();
}*/

// move to index.html - end



(function() {

  this.VideoPlayer = function(targetSelector, options) {

    default_values = {
      loop: false,
      loop_cycles: 3,
      muted: false,
      autoplay: true,
      targetSelector: targetSelector,
      posterFrame: "end",
      controlOpacity: 0
    };

    // LOOP SETTINGS START
    this.loop_count = 0;

    this.settings = extend(default_values, options);


    this.play_pause = function() {
      //this.settings.loop = false;

      if(this.controls.querySelector('.group-play-pause').dataset.state == 'end'){
        this.video.poster = '';
        this.video.src = this.video.dataset.src;
        setProgressInterval.call(this);
      }
      if (this.video.paused) {
        this.play.call(this);
      } else {
        this.pause.call(this);
      }
    }.bind(this);

    this.play = function() {
      console.log('play');
      this.video.play();
      setDataState(this.controls.querySelector('.group-play-pause'),'play')
    }.bind(this);

    this.pause = function() {
      console.log('pause');
      setDataState(this.controls.querySelector('.group-play-pause'),'pause')
      this.video.pause();
    }.bind(this);


    // !!! todo
    // Mute/Unmute standalone necessary?
    this.mute_mute = function() {
      this.video.muted = true;
    }.bind(this)

    this.mute_unmute = function() {
      this.video.muted = false;
    }.bind(this)

    this.mute_toggle = function() {
      if(this.controls.querySelector('.group-audio').dataset.state == "on"){
        setDataState(this.controls.querySelector('.group-audio'),'off')
      } else {
        setDataState(this.controls.querySelector('.group-audio'),'on')
      }

      this.video.muted = !this.video.muted;
    }.bind(this)




    init.call(this);
  }

  function init() {
    this.video_container = document.querySelector(this.settings.targetSelector);
    this.video = this.video_container.querySelector('video');
    this.controls = this.video_container.querySelector('.video-controls');

    //HARD PROGRESS
    this.progressInterval;

    addDefaultVideoEventListener.call(this);
    addCustomVideoEventListener.call(this);
    loadVideoSrc.call(this, this.settings.targetSelector);
    addControlsEventListener.call(this);
    setupVideo.call(this);
  }





  function addDefaultVideoEventListener() {
    console.group('adding default events');

    console.log('event: ended');
    this.video.addEventListener('ended', function() {
      //Set dataset to end to reveal replay

      //Check expected vs current loops
      this.loop_count++;
      if(this.settings.loop && !(this.loop_count >= this.settings.loop_cycles)){
        this.play.call(this);
      } else {
        setDataState(this.controls.querySelector('.group-play-pause'),'end')
        setPosterFrame.call(this);
        clearInterval(this.progressInterval);
        this.progressInterval = false;
      }

      console.log('video ended');
    }.bind(this));

    console.log('event: canplay');
    // this.video.addEventListener('canplay', function() {
    //   videoReady();
    //   console.log('canplay');
    // });

    //SIMPLE PROGRESS
    /*this.video.addEventListener('timeupdate', function() {
      console.log('progress')
      if(!isNaN(this.video.duration)) {
        var percent_complete = this.video.currentTime / this.video.duration;
        console.log(Math.ceil(percent_complete*100))
        this.controls.querySelector('progress').value=Math.ceil(percent_complete*100);
      }
    }.bind(this));*/

    setProgressInterval.call(this);

    console.groupEnd();
  }



  function addCustomVideoEventListener() {
    console.group('adding custom events');

    var object = this.settings.customEvents;
    for (var property in object) {
      if (object.hasOwnProperty(property)) {

        if (object[property] != false) {
          var event = property;
          var callback = object[property]
          //console.log(`event: ${event}  callback: ${callback}`);
          this.video.addEventListener(event, function(e) {
            window[callback]();
          });
        }
      }
    }
    console.groupEnd();
  }



  function addControlsEventListener() {
    console.groupCollapsed('add controls eventListener');

    var btns = this.controls.querySelectorAll('.btn');

    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i]
      var fun = btn.dataset.fun;
      console.log(btn, fun, this[fun]);
      btn.addEventListener('click', this[fun]);
    }
    console.groupEnd();
  }

  function setPosterFrame() {
      if(this.controls.querySelector('progress')) this.controls.querySelector('progress').value=100
      if(this.settings.posterFrame === "start"){
        this.video.currentTime = "0.1"
        this.video.pause();
        if(this.controls.querySelector('progress'))  this.controls.querySelector('progress').value=0
      } else if(this.settings.posterFrame.endsWith(".png") || this.settings.posterFrame.endsWith(".jpg")){
        this.video.poster = this.settings.posterFrame;
        this.video.src = '';
      }
  }

  function setupVideo() {
    this.video.muted = this.settings.muted;
    this.video.autoplay = this.settings.autoplay;
    if(this.settings.autoplay){
      setDataState(this.controls.querySelector('.group-play-pause'),'play')
    }
    if(this.settings.muted){
      setDataState(this.controls.querySelector('.group-audio'),'on')
    }
    this.controls.style.opacity = this.settings.controlOpacity;
    this.controls.classList.add("opaque")
  }

  function setProgressInterval() {
    if(this.controls.querySelector('progress')){
      this.progressInterval = setInterval(function(){
        if(!isNaN(this.video.duration)) {
          var percent_complete = this.video.currentTime / this.video.duration;
          this.controls.querySelector('progress').value=Math.ceil(percent_complete*100);
        }
      }.bind(this),50)
    }

  }


  function loadVideoSrc() {
    this.video.src = this.video.dataset.src;
  }

  function setDataState(el,data){
    if(el){
      el.dataset.state = data;
    }
  }


  // extend a with b AND return it
  function extend(a, b) {
    for (var key in b)
      if (b.hasOwnProperty(key))
        a[key] = b[key];
    return a;
  }

})()
