(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.info_i = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAYIgTAZIgXgVIATgVIgcgKIAMgcIAaANIgCgeIAfAAIgBAeIAZgNIAMAcIgbAKIASAVIgWAVg");
	this.shape.setTransform(13.1,13.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// flash0.ai
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF0B1C").s().p("AhcBcQgmgmAAg2QAAg1AngmQAmgnA1AAQA2AAAnAnQAmAmAAA1QAAA2gmAmQgnAng2AAQg1AAgngng");
	this.shape_1.setTransform(13.125,13.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,255,0,0.6)").s().p("AiJCJQg5g5AAhQQAAhQA5g6QA5g4BQAAQBRAAA4A4QA6A6AABQQAABQg6A5Qg4A6hRAAQhQAAg5g6g");
	this.shape_2.setTransform(12.55,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.6,39,39);


(lib.btn_close = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAAAIAognAgnAoIAngoIAnAoAgngnIAnAn");
	this.shape.setTransform(13.3,13.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// flash0.ai
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF0B1C").s().p("AhcBcQgmgmAAg2QAAg1AngmQAmgnA1AAQA2AAAnAnQAmAmAAA1QAAA2gmAmQgnAng2AAQg1AAgngng");
	this.shape_1.setTransform(13.125,13.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,255,0,0.6)").s().p("AiJCJQg5g5AAhQQAAhQA5g6QA5g4BQAAQBRAAA4A4QA6A6AABQQAABQg6A5Qg4A6hRAAQhQAAg5g6g");
	this.shape_2.setTransform(12.55,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.6,39,39);


(lib.btn_clicktag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhOHBOIMAAAicPMCcPAAAMAAACcPg");
	this.shape.setTransform(250,500.0076,0.5,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.mc_rt_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.hover = false;
		if (!this.listenerRtext || typeof this.listenerRtext == "undefined") {
			this.listenerRtext = true;
			//this.rt_btn_on.addEventListener("mouseover", fl_showRTInfo.bind(this));
			this.rt_btn_on.addEventListener("click", fl_showRTInfo.bind(this));
		}
		
		function fl_showRTInfo() {
			//this.hover = true;
			this.gotoAndPlay(1);
		}
		function fl_showRTInfoClick() {
			if (this.hover == false) {
				this.gotoAndPlay(1);
			}
		
		}
	}
	this.frame_1 = function() {
		this.stop();
		//this.hover = true;
		if(!this.listenerRtextClose || typeof this.listenerRtextClose == "undefined") {
			this.listenerRtextClose = true;
			//this.rt_btn_on.addEventListener("mouseout", fl_closeRTInfo.bind(this));
			this.rt_btn_off.addEventListener("click", fl_closeRTInfo.bind(this));
		}
		
		function fl_closeRTInfo () {
			//this.hover = false;
			this.gotoAndPlay(0);
		}
		
		function fl_closeRTInfoClick(){
			console.log(this.hover)
			if(this.hover == true){
				this.gotoAndPlay(0);	
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// rt_btn_on
	this.rt_btn_on = new lib.info_i();
	this.rt_btn_on.name = "rt_btn_on";
	this.rt_btn_on.setTransform(-4,-13.1,1.1378,1.1337,0,0,0,-0.1,-0.2);
	new cjs.ButtonHelper(this.rt_btn_on, 0, 1, 2, false, new lib.info_i(), 3);

	this.rt_btn_off = new lib.btn_close();
	this.rt_btn_off.name = "rt_btn_off";
	this.rt_btn_off.setTransform(-4,-12.5,1.1378,1.1337,0,0,0,-0.1,-0.2);
	new cjs.ButtonHelper(this.rt_btn_off, 0, 1, 2, false, new lib.btn_close(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rt_btn_on}]}).to({state:[{t:this.rt_btn_off}]},1).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF0B1C").s().p("AgPAgQgHgDgGgFIAKgPIAJAGQAFADAFAAIAEgBQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIgBgBIgDgCIgEgCIgGgCIgGgCQgFgDgEgDQgDgEAAgHQAAgKAIgFQAHgGAMAAQAGAAAGACQAGACAGAFIgJAOIgIgFIgIgBIgDABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABAAABAAIAIADIAIADQAFADAEADQACAEAAAGQAAAGgDAFQgEAFgGADQgHADgIAAQgIAAgIgDg");
	this.shape.setTransform(121.25,3.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF0B1C").s().p("AgKAwIAAhBIAVAAIAABBgAgIgaQgDgEAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(116.475,1.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF0B1C").s().p("AgRAeQgJgFgEgIQgEgIAAgJQABgJAEgIQAEgIAIgEQAIgFAKAAQAKAAAHAEQAIAEAEAIQAFAHAAAKIAAAEIgBAEIguAAQABAFAEADQAEACAGAAIALgBIAJgFIAIAPQgFADgHADQgIADgJAAQgLAAgIgFgAAPgHQgCgEgDgDQgEgDgFAAQgEAAgEADQgEACgBAFIAbAAIAAAAg");
	this.shape_2.setTransform(110.875,3.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF0B1C").s().p("AANAhIgNgiIgLAiIgTAAIgXhBIAXAAIALAlIANglIAOAAIAMAlIAMglIAWAAIgXBBg");
	this.shape_3.setTransform(101.575,3.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF0B1C").s().p("AAMAiIAAgiQAAgGgCgEQgEgDgFgBQgFABgEADQgDAEAAAGIAAAiIgWAAIAAhBIAWAAIAAAJIAEgFQADgDAEgCQADgBAFAAQAHAAAFADQAHADADAGQAEAGAAAKIAAAng");
	this.shape_4.setTransform(92.2,3.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF0B1C").s().p("AgKAwIAAhBIAVAAIAABBgAgIgaQgDgEAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_5.setTransform(86.525,1.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF0B1C").s().p("AANAuIAAgjQAAgHgEgDQgDgDgFAAQgFAAgEADQgDAEAAAGIAAAjIgVAAIAAhbIAVAAIAAAjIAEgGQACgCAFgCQADgBAFAAQAHAAAGADQAGADADAGQADAGABAIIAAApg");
	this.shape_6.setTransform(80.8,2.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF0B1C").s().p("AgOAgQgIgDgGgFIAJgPIAJAGQAGADAEAAIAGgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIgDgCIgEgCIgGgCIgFgCQgHgDgCgDQgEgEAAgHQABgKAGgFQAIgGAMAAQAGAAAGACQAGACAGAFIgJAOIgJgFIgHgBIgDABQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABAAABAAIAHADIAIADQAHADACADQADAEAAAGQAAAGgEAFQgDAFgGADQgHADgJAAQgHAAgHgDg");
	this.shape_7.setTransform(73.6,3.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF0B1C").s().p("AgKAnQgHgHAAgNIAAgWIgKAAIAAgSIAKAAIAAgYIAUAAIAAAYIAVAAIAAASIgVAAIAAATQABAGACACQACADAEAAIAGgBIAEgCIAGARQgEACgGABIgLACQgLAAgGgHg");
	this.shape_8.setTransform(67.675,2.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF0B1C").s().p("AAMAuIAAgjQAAgHgDgDQgDgDgFAAQgFAAgEADQgDAEAAAGIAAAjIgWAAIAAhbIAWAAIAAAjIAEgGQADgCAEgCQADgBAFAAQAHAAAFADQAHADADAGQAEAGAAAIIAAApg");
	this.shape_9.setTransform(60.7,2.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BF0B1C").s().p("AgQAeQgIgEgEgIQgEgIgBgKQABgJAEgIQAEgIAIgEQAIgFAKAAQAHAAAGACQAGADAFAEQAFAEADAHIgRAJQgDgEgDgDQgEgCgFAAQgFAAgEAEQgFAEAAAGQAAAHAFAEQAEAEAFAAQAFAAAEgCQADgCACgEIARAKQgEAIgIAFQgJAFgKAAQgKAAgIgFg");
	this.shape_10.setTransform(53.125,3.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BF0B1C").s().p("AgRAeQgJgFgEgIQgEgIAAgJQABgJAEgIQAEgIAIgEQAIgFAKAAQAKAAAHAEQAIAEAEAIQAFAHAAAKIAAAEIgBAEIguAAQABAFAEADQAEACAGAAIALgBIAJgFIAIAPQgFADgHADQgIADgJAAQgLAAgIgFgAAPgHQgCgEgDgDQgEgDgFAAQgEAAgEADQgEACgBAFIAbAAIAAAAg");
	this.shape_11.setTransform(45.575,3.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BF0B1C").s().p("AAKAsIgOgdIgJAAIAAAdIgWAAIAAhXIAjAAQAMAAAHAEQAHAEAEAGQADAHAAAIQAAAFgBAFQgCAEgEAEQgDAFgGACIATAhgAgNgEIANAAQAFAAADgDQADgDgBgDQAAgEgCgDQgDgDgFAAIgNAAg");
	this.shape_12.setTransform(37.85,2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbBCQgLgHgHgMQgGgMAAgPQAAgPAGgLQAHgMALgHQAMgHAOgBQALAAAJAFQAJAFAGAIIAAg5IASAAIAACPIgSAAIAAgPQgGAJgJAEQgJAEgKAAQgPAAgMgHgAgRgLQgIAFgEAHQgEAJAAAKQAAAKAEAIQAEAIAIAFQAIAFAKAAQAKAAAIgFQAIgFAEgIQAEgIAAgKQAAgKgEgJQgEgHgIgFQgIgFgKAAQgKAAgIAFg");
	this.shape_13.setTransform(277.825,8.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbA0IAAg3QAAgLgDgHQgEgGgFgEQgGgDgIAAQgHAAgHAEQgGAEgDAHQgEAHAAAJIAAA3IgSAAIAAhlIASAAIAAAPQAEgIAJgFQAIgEAKAAQALAAAJAEQAJAFAFAKQAGAJAAAOIAAA9g");
	this.shape_14.setTransform(265.975,10.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbAvQgLgIgHgMQgGgMAAgPQAAgPAGgMQAHgLALgIQAMgGAPAAQAKAAAJAEQAJAFAHAIIAAgPIARAAIAABlIgRAAIAAgOQgHAHgJAFQgJAFgKgBQgPAAgMgGgAgRgfQgHAFgEAIQgFAJAAAJQAAAKAFAJQAEAIAHAFQAIAEAKABQAKgBAIgEQAIgFAFgIQADgJAAgKQAAgJgDgJQgFgIgIgFQgIgEgKgBQgKABgIAEg");
	this.shape_15.setTransform(253.4,10.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVBJIAAhVIgRAAIAAgQIARAAIAAgGQAAgNAFgIQAFgIAJgFQAHgEALAAQAHAAAFABIALAEIgFAPIgIgCIgHgBQgLAAgGAFQgEAGAAAKIAAAGIAfAAIAAAQIgfAAIAABVg");
	this.shape_16.setTransform(244.325,8.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag0BJIAAiPIATAAIAAAQQAGgJAJgEQAKgFAKAAQAPAAALAHQALAHAHAMQAHAMAAAPQAAAPgHALQgHAMgLAHQgMAIgOAAQgLAAgJgFQgJgEgGgJIAAA5gAgSgyQgIAFgEAIQgEAIAAAKQAAAKAEAJQAEAHAIAFQAIAFAKAAQAKAAAIgFQAIgFAEgHQAEgJABgKQgBgKgEgIQgEgIgIgFQgIgFgKAAQgKAAgIAFg");
	this.shape_17.setTransform(233.825,12.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag1BaIBZizIASAAIhZCzg");
	this.shape_18.setTransform(221.375,8.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMA8QgIgKAAgSIAAgyIgSAAIAAgPIASAAIAAgkIASAAIAAAkIAjAAIAAAPIgjAAIAAAzQAAAKADAFQAEAFAJAAQAFAAAEgBIAJgEIAHAOQgGAEgHACQgHACgHAAQgQAAgIgKg");
	this.shape_19.setTransform(211.675,8.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbAvQgLgIgHgMQgGgMAAgPQAAgPAGgMQAHgLALgIQAMgGAOAAQALAAAJAEQAJAFAHAIIAAgPIARAAIAABlIgRAAIAAgOQgHAHgJAFQgJAFgLgBQgOAAgMgGgAgRgfQgHAFgEAIQgEAJgBAJQABAKAEAJQAEAIAHAFQAIAEAKABQALgBAHgEQAIgFAFgIQADgJAAgKQAAgJgDgJQgFgIgIgFQgHgEgLgBQgKABgIAEg");
	this.shape_20.setTransform(200.85,10.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgFADgDQAEgDAEAAQAGAAADADQADADAAAFQAAAFgDADQgDAEgGAAQgEAAgEgEg");
	this.shape_21.setTransform(192.65,14.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAvQgMgIgGgMQgHgMAAgPQAAgPAHgMQAGgLAMgIQALgGAPAAQAKAAAJAEQAJAFAHAIIAAgPIARAAIAABlIgRAAIAAgOQgHAHgJAFQgJAFgKgBQgPAAgLgGgAgQgfQgIAFgFAIQgEAJAAAJQAAAKAEAJQAFAIAIAFQAHAEAKABQAKgBAJgEQAHgFAEgIQAFgJAAgKQAAgJgFgJQgEgIgHgFQgJgEgKgBQgKABgHAEg");
	this.shape_22.setTransform(183.8,10.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_23.setTransform(175.475,8.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_24.setTransform(170.825,8.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJBHIAAhlIASAAIAABlgAgJgwQgDgEAAgFQAAgGADgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_25.setTransform(166.2,8.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSBFQgIgFgHgIIAAAPIgSAAIAAiPIASAAIAAA5QAHgIAIgFQAKgFAKAAQAPABALAHQALAHAHAMQAGALAAAPQAAAPgGAMQgHAMgLAHQgLAHgPAAQgKAAgKgEgAgSgKQgHAEgFAIQgEAIAAAKQAAAKAEAIQAFAIAHAFQAIAFAKAAQAKAAAHgFQAIgFAFgIQAEgIAAgKQAAgKgEgIQgFgIgIgEQgHgFgKAAQgKAAgIAFg");
	this.shape_26.setTransform(157.85,8.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVBJIAAhVIgRAAIAAgQIARAAIAAgGQAAgNAFgIQAFgIAJgFQAHgEALAAQAHAAAFABIALAEIgFAPIgIgCIgHgBQgLAAgGAFQgEAGAAAKIAAAGIAfAAIAAAQIgfAAIAABVg");
	this.shape_27.setTransform(143.425,8.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWAvQgKgFgFgKQgFgKgBgNIAAg8IATAAIAAA7QAAANAGAHQAHAHALAAQAMAAAHgHQAHgHAAgNIAAg7IASAAIAAA8QAAAUgMAMQgLALgVAAQgMAAgKgFg");
	this.shape_28.setTransform(133.375,10.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbAvQgLgIgHgMQgGgMAAgPQAAgPAGgMQAHgLALgIQAMgGAPAAQAKAAAJAEQAJAFAHAIIAAgPIARAAIAABlIgRAAIAAgOQgHAHgJAFQgJAFgKgBQgPAAgMgGgAgRgfQgHAFgEAIQgFAJAAAJQAAAKAFAJQAEAIAHAFQAIAEAKABQAKgBAIgEQAIgFAFgIQAEgJAAgKQAAgJgEgJQgFgIgIgFQgIgEgKgBQgKABgIAEg");
	this.shape_29.setTransform(121.1,10.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMA0QgIgDgGgEQgGgFgEgJIANgKQAFAJAHAEQAHAEAFAAQAJAAAFgEQAEgEAAgGQAAgFgCgDQgDgDgEgCIgIgEIgIgEIgIgDQgIgEgEgGQgEgHAAgHQAAgJAEgGQAEgGAIgEQAHgEAKAAQAJAAAJAEQAIAEAGAJIgMALQgEgHgGgDQgGgCgGAAQgGAAgEADQgDAEAAAFQAAADACAEQACADAEACIALAFIANAGQAIADAFAHQAEAFAAAKQAAAJgEAGQgFAIgIADQgIAFgLAAQgGAAgHgCg");
	this.shape_30.setTransform(105.925,10.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_31.setTransform(99.425,8.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIBHIAAhlIARAAIAABlgAgIgwQgEgEAAgFQAAgGAEgDQADgEAFAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_32.setTransform(94.8,8.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaAvQgMgIgGgMQgHgMAAgPQAAgPAHgMQAGgLAMgIQALgGAPAAQAKAAAJAEQAJAFAHAIIAAgPIARAAIAABlIgRAAIAAgOQgHAHgJAFQgJAFgKgBQgPAAgLgGgAgQgfQgJAFgDAIQgFAJAAAJQAAAKAFAJQADAIAJAFQAHAEAKABQAKgBAJgEQAHgFAEgIQAFgJAAgKQAAgJgFgJQgEgIgHgFQgJgEgKgBQgKABgHAEg");
	this.shape_33.setTransform(85.8,10.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgMA8QgIgKAAgSIAAgyIgSAAIAAgPIASAAIAAgkIASAAIAAAkIAjAAIAAAPIgjAAIAAAzQAAAKADAFQAEAFAJAAQAFAAAEgBIAJgEIAHAOQgGAEgHACQgHACgHAAQgQAAgIgKg");
	this.shape_34.setTransform(75.875,8.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAxQgKgFgHgHQgGgIgDgJQgDgKAAgKQAAgPAGgMQAHgLALgIQAMgGAOAAQAPgBALAHQALAGAGALQAGAMAAAQIAAAFIAAADIhQAAQABAJAEAGQAEAHAIADQAHAEAKABQAKgBAJgDQAKgDAHgFIAIAOQgHAGgMAEQgLAEgOAAQgNAAgLgEgAAggHQgBgJgEgHQgEgGgHgDQgHgEgIAAQgHAAgHAEQgHAEgEAGQgFAHgBAIIA+AAIAAAAg");
	this.shape_35.setTransform(65.925,10.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag6BGIAAiLIA1AAQATAAAPAJQAOAIAHAQQAJAQgBAUQABAWgJAQQgHAPgPAJQgPAIgUAAgAgnA0IAhAAQANAAALgHQAKgHAFgLQAGgMAAgPQAAgOgGgMQgFgLgKgHQgLgHgNAAIghAAg");
	this.shape_36.setTransform(53.3,8.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAGAAADADQADAEAAAEQAAAFgDADQgDAEgGAAQgEAAgDgEg");
	this.shape_37.setTransform(451,-11);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAwQgKgEgHgHQgGgIgDgJQgDgKAAgKQAAgPAGgLQAHgMALgIQAMgGAOAAQAPgBALAHQALAGAGALQAGAMAAAQIAAAEIAAAEIhQAAQABAIAEAHQAEAGAIAEQAHAFAKAAQAKAAAJgEQAKgDAHgFIAIAOQgHAFgMAFQgLAEgOABQgNgBgLgFgAAggHQgBgJgEgHQgEgGgHgDQgHgEgIAAQgHAAgHAEQgHADgEAHQgFAGgBAJIA+AAIAAAAg");
	this.shape_38.setTransform(443.025,-15.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAbA0IAAg3QAAgLgDgHQgEgGgFgEQgGgDgIAAQgHAAgHAEQgGAEgDAHQgEAHAAAJIAAA3IgSAAIAAhlIASAAIAAAPQAEgIAJgFQAIgEAKAAQALAAAJAEQAJAFAFAKQAGAJAAAOIAAA9g");
	this.shape_39.setTransform(431.375,-15.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAbA0IAAg3QAAgLgDgHQgEgGgFgEQgGgDgIAAQgHAAgHAEQgGAEgDAHQgEAHAAAJIAAA3IgSAAIAAhlIASAAIAAAPQAEgIAJgFQAIgEAKAAQALAAAJAEQAJAFAFAKQAGAJAAAOIAAA9g");
	this.shape_40.setTransform(419.625,-15.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIBHIAAhlIARAAIAABlgAgIgwQgEgEAAgFQAAgGAEgDQADgEAFAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_41.setTransform(411.4,-17.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAcAzIgchLIgaBLIgPAAIgkhlIATAAIAZBLIAchLIALAAIAeBLIAWhLIATAAIgiBlg");
	this.shape_42.setTransform(401.05,-15.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAwQgKgEgHgHQgGgIgDgJQgDgKAAgKQAAgPAGgLQAHgMALgIQAMgGAOAAQAPgBALAHQALAGAGALQAGAMAAAQIAAAEIAAAEIhQAAQABAIAEAHQAEAGAIAEQAHAFAKAAQAKAAAJgEQAKgDAHgFIAIAOQgHAFgMAFQgLAEgOABQgNgBgLgFgAAggHQgBgJgEgHQgEgGgHgDQgHgEgIAAQgHAAgHAEQgHADgEAHQgFAGgBAJIA+AAIAAAAg");
	this.shape_43.setTransform(387.325,-15.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggA/QgQgJgJgRQgJgPgBgWQABgOAFgOQAGgOAKgJQAKgKANgFQANgFAOAAQAMAAALADQAMADAJAGQAJAGAGAIIgOAMQgIgKgLgEQgMgGgNAAQgPAAgMAHQgMAHgHANQgHAMAAAOQAAAQAHAMQAHANAMAGQAMAIAOgBQANAAAMgFQALgGAJgIIAAgcIgvAAIAAgRIBBAAIAAA1QgNAPgQAHQgRAHgSAAQgUAAgQgJg");
	this.shape_44.setTransform(373.675,-17.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgcA0IAAhlIARAAIAAAPQAFgJAGgEQAHgEAKAAIAGAAIAGABIgBASIgGgBIgFgBQgIAAgGAEQgFADgEAIQgEAHAAALIAAA1g");
	this.shape_45.setTransform(358.275,-15.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAwQgKgEgHgHQgGgIgDgJQgDgKAAgKQAAgPAGgLQAHgMALgIQAMgGAOAAQAPgBALAHQALAGAGALQAGAMAAAQIAAAEIAAAEIhQAAQABAIAEAHQAEAGAIAEQAHAFAKAAQAKAAAJgEQAKgDAHgFIAIAOQgHAFgMAFQgLAEgOABQgNgBgLgFgAAggHQgBgJgEgHQgEgGgHgDQgHgEgIAAQgHAAgHAEQgHADgEAHQgFAGgBAJIA+AAIAAAAg");
	this.shape_46.setTransform(348.175,-15.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbBCQgLgHgHgMQgGgMAAgPQAAgPAGgLQAHgMALgHQAMgHAOgBQALAAAJAFQAJAFAGAIIAAg5IASAAIAACPIgSAAIAAgPQgGAJgJAEQgJAEgKAAQgPAAgMgHgAgRgLQgIAFgEAHQgEAJAAAKQAAAKAEAIQAEAIAIAFQAIAFAKAAQAKAAAIgFQAIgFAEgIQAEgIAAgKQAAgKgEgJQgEgHgIgFQgIgFgKAAQgKAAgIAFg");
	this.shape_47.setTransform(335.725,-17.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_48.setTransform(322.675,-17.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgJBHIAAhlIASAAIAABlgAgJgwQgDgEAAgFQAAgGADgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_49.setTransform(318.05,-17.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUAwQgKgEgHgHQgGgIgDgJQgDgKAAgKQAAgPAGgLQAHgMALgIQAMgGAOAAQAPgBALAHQALAGAGALQAGAMAAAQIAAAEIAAAEIhQAAQABAIAEAHQAEAGAIAEQAHAFAKAAQAKAAAJgEQAKgDAHgFIAIAOQgHAFgMAFQgLAEgOABQgNgBgLgFgAAggHQgBgJgEgHQgEgGgHgDQgHgEgIAAQgHAAgHAEQgHADgEAHQgFAGgBAJIA+AAIAAAAg");
	this.shape_50.setTransform(309.925,-15.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIBGIAAh5IgqAAIAAgSIBlAAIAAASIgpAAIAAB5g");
	this.shape_51.setTransform(298.725,-17.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgMA8QgIgKAAgSIAAgyIgSAAIAAgPIASAAIAAgkIASAAIAAAkIAjAAIAAAPIgjAAIAAAzQAAAKADAFQAEAFAJAAQAFAAAEgBIAJgEIAHAOQgGAEgHACQgHACgHAAQgQAAgIgKg");
	this.shape_52.setTransform(284.725,-16.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAbBIIAAg5QAAgPgIgHQgGgIgMABQgMgBgHAJQgIAIAAANIAAA5IgSAAIAAiPIARAAIAAA2QAGgGAIgFQAJgDAJAAQALgBAJAFQAJAEAGALQAFAIAAAOIAAA+g");
	this.shape_53.setTransform(274.75,-17.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAvQgMgIgGgLQgHgNAAgPQAAgPAHgLQAHgMAMgIQAMgGAPAAQAKgBAJAEQAJADAHAGQAHAGAEAJIgPAIQgFgJgIgFQgIgEgKAAQgJgBgIAFQgJAFgEAJQgFAHAAAKQAAAKAFAJQAEAIAIAEQAIAFAJABQAHAAAGgDQAGgCAFgEQAFgFADgEIAPAIQgEAIgHAGQgHAFgJAEQgKADgKABQgPgBgMgGg");
	this.shape_54.setTransform(263.275,-15.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgJBHIAAhlIASAAIAABlgAgJgwQgDgEAAgFQAAgGADgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_55.setTransform(255.15,-17.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAbA0IAAg3QAAgLgDgHQgEgGgFgEQgGgDgIAAQgHAAgHAEQgGAEgDAHQgEAHAAAJIAAA3IgSAAIAAhlIASAAIAAAPQAEgIAJgFQAIgEAKAAQALAAAJAEQAJAFAFAKQAGAJAAAOIAAA9g");
	this.shape_56.setTransform(246.975,-15.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMA8QgIgKAAgSIAAgyIgSAAIAAgPIASAAIAAgkIASAAIAAAkIAjAAIAAAPIgjAAIAAAzQAAAKADAFQAEAFAJAAQAFAAAEgBIAJgEIAHAOQgGAEgHACQgHACgHAAQgQAAgIgKg");
	this.shape_57.setTransform(232.425,-16.875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMA0QgIgDgGgFQgGgEgEgIIANgLQAFAJAHAEQAHAEAFAAQAJAAAFgEQAEgFAAgFQAAgFgCgDQgDgDgEgCIgIgEIgIgEIgIgDQgIgEgEgGQgEgHAAgHQAAgIAEgHQAEgGAIgEQAHgDAKgBQAJAAAJAEQAIAEAGAJIgMAKQgEgGgGgDQgGgCgGAAQgGAAgEADQgDAEAAAFQAAADACAEQACADAEACIALAFIANAGQAIADAFAHQAEAFAAAKQAAAJgEAGQgFAHgIAFQgIAEgLAAQgGAAgHgCg");
	this.shape_58.setTransform(223.775,-15.25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgIBHIAAhlIARAAIAABlgAgIgwQgEgEAAgFQAAgGAEgDQADgEAFAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_59.setTransform(217.3,-17.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgbAuQgMgHgHgMQgGgMAAgPQAAgOAGgMQAHgMAMgHQAMgIAPABQAPgBANAIQALAHAIAMQAGAMABAOQgBAPgGAMQgIAMgLAHQgNAIgPAAQgPAAgMgIgAgRgfQgIAFgFAJQgEAIAAAJQAAAKAEAJQAFAHAIAFQAIAFAJABQAKgBAIgFQAHgFAFgHQAFgJAAgKQAAgJgFgIQgFgJgHgFQgIgEgKAAQgJAAgIAEg");
	this.shape_60.setTransform(204.15,-15.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgMA8QgIgKAAgSIAAgyIgSAAIAAgPIASAAIAAgkIASAAIAAAkIAjAAIAAAPIgjAAIAAAzQAAAKADAFQAEAFAJAAQAFAAAEgBIAJgEIAHAOQgGAEgHACQgHACgHAAQgQAAgIgKg");
	this.shape_61.setTransform(194.075,-16.875);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgWAvQgKgFgFgKQgFgKgBgNIAAg8IATAAIAAA7QAAANAGAHQAHAHALAAQAMAAAHgHQAHgHAAgNIAAg7IASAAIAAA8QAAAUgMAMQgLALgVAAQgMAAgKgFg");
	this.shape_62.setTransform(184.275,-15.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AApBGIgPgkIg0AAIgOAkIgUAAIA4iLIAKAAIA3CLgAAUAQIgUg0IgUA0IAoAAg");
	this.shape_63.setTransform(172.25,-17.125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUAwQgKgEgHgHQgGgIgDgJQgDgKAAgKQAAgPAGgLQAHgMALgIQAMgGAOAAQAPgBALAHQALAGAGALQAGAMAAAQIAAAEIAAAEIhQAAQABAIAEAHQAEAGAIAEQAHAFAKAAQAKAAAJgEQAKgDAHgFIAIAOQgHAFgMAFQgLAEgOABQgNgBgLgFgAAggHQgBgJgEgHQgEgGgHgDQgHgEgIAAQgHAAgHAEQgHADgEAHQgFAGgBAJIA+AAIAAAAg");
	this.shape_64.setTransform(155.375,-15.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgMA8QgIgKAAgSIAAgyIgSAAIAAgPIASAAIAAgkIASAAIAAAkIAjAAIAAAPIgjAAIAAAzQAAAKADAFQAEAFAJAAQAFAAAEgBIAJgEIAHAOQgGAEgHACQgHACgHAAQgQAAgIgKg");
	this.shape_65.setTransform(145.625,-16.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUAwQgKgEgHgHQgGgIgDgJQgDgKAAgKQAAgPAGgLQAHgMALgIQAMgGAOAAQAPgBALAHQALAGAGALQAGAMAAAQIAAAEIAAAEIhQAAQABAIAEAHQAEAGAIAEQAHAFAKAAQAKAAAJgEQAKgDAHgFIAIAOQgHAFgMAFQgLAEgOABQgNgBgLgFgAAggHQgBgJgEgHQgEgGgHgDQgHgEgIAAQgHAAgHAEQgHADgEAHQgFAGgBAJIA+AAIAAAAg");
	this.shape_66.setTransform(135.675,-15.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgbBCQgLgHgHgMQgGgMAAgPQAAgPAGgLQAHgMALgHQAMgHAOgBQALAAAJAFQAJAFAGAIIAAg5IASAAIAACPIgSAAIAAgPQgGAJgJAEQgJAEgKAAQgPAAgMgHgAgRgLQgIAFgEAHQgEAJAAAKQAAAKAEAIQAEAIAIAFQAIAFAKAAQAKAAAIgFQAIgFAEgIQAEgIAAgKQAAgKgEgJQgEgHgIgFQgIgFgKAAQgKAAgIAFg");
	this.shape_67.setTransform(123.225,-17.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_68.setTransform(114.875,-17.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgJBHIAAhlIASAAIAABlgAgJgwQgDgEAAgFQAAgGADgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_69.setTransform(110.25,-17.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgRBFQgJgFgHgIIAAAPIgSAAIAAiPIASAAIAAA5QAHgIAJgFQAIgFALAAQAOABAMAHQALAHAHAMQAHALAAAPQAAAPgHAMQgHAMgLAHQgMAHgOAAQgLAAgIgEgAgSgKQgHAEgFAIQgEAIAAAKQAAAKAEAIQAFAIAHAFQAIAFAKAAQAKAAAIgFQAHgFAEgIQAFgIAAgKQAAgKgFgIQgEgIgHgEQgIgFgKAAQgKAAgIAFg");
	this.shape_70.setTransform(101.9,-17.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgUAwQgKgEgHgHQgGgIgDgJQgDgKAAgKQAAgPAGgLQAHgMALgIQAMgGAOAAQAPgBALAHQALAGAGALQAGAMAAAQIAAAEIAAAEIhQAAQABAIAEAHQAEAGAIAEQAHAFAKAAQAKAAAJgEQAKgDAHgFIAIAOQgHAFgMAFQgLAEgOABQgNgBgLgFgAAggHQgBgJgEgHQgEgGgHgDQgHgEgIAAQgHAAgHAEQgHADgEAHQgFAGgBAJIA+AAIAAAAg");
	this.shape_71.setTransform(89.475,-15.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgaBFQgLgDgJgHIAIgOQAHAFAKADQAJAEALABQAKgBAIgEQAJgFAEgHQAEgIAAgKIAAgJQgGAJgJADQgJAFgKAAQgPAAgMgIQgLgGgHgMQgGgKAAgQQAAgPAHgMQAGgLAMgHQAMgGAOgBQAKAAAJAFQAJAEAGAHIAAgOIASAAIAABbQAAAQgGANQgHAMgMAGQgNAHgPAAQgNgBgMgEgAgQgzQgIAEgEAIQgFAIAAAKQAAALAFAIQAEAHAIAEQAIAGAJgBQAKABAIgGQAHgEAFgHQAEgIAAgLQAAgKgEgIQgFgIgHgEQgIgFgKgBQgJABgIAFg");
	this.shape_72.setTransform(77.025,-13.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgRBFQgJgFgHgIIAAAPIgSAAIAAiPIASAAIAAA5QAHgIAJgFQAIgFALAAQAOABAMAHQALAHAHAMQAHALAAAPQAAAPgHAMQgHAMgLAHQgMAHgOAAQgLAAgIgEgAgSgKQgHAEgFAIQgEAIAAAKQAAAKAEAIQAFAIAHAFQAIAFAKAAQAKAAAIgFQAHgFAEgIQAFgIAAgKQAAgKgFgIQgEgIgHgEQgIgFgKAAQgKAAgIAFg");
	this.shape_73.setTransform(65,-17.175);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgaAvQgMgIgGgMQgHgMAAgPQAAgPAHgMQAGgLAMgIQALgGAPAAQAKAAAJAEQAJAFAHAIIAAgPIARAAIAABlIgRAAIAAgOQgHAHgJAFQgJAFgKAAQgPgBgLgGgAgQgfQgJAFgDAJQgFAIAAAJQAAAKAFAJQADAHAJAFQAHAFAKABQALgBAHgFQAIgFAEgHQAFgJAAgKQAAgJgFgIQgEgJgIgFQgHgEgLAAQgKAAgHAEg");
	this.shape_74.setTransform(51.7,-15.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMA0QgIgDgGgFQgGgFgEgHIANgKQAFAIAHAEQAHAEAFAAQAJgBAFgDQAEgEAAgGQAAgFgCgDQgDgDgEgCIgIgEIgIgEIgIgDQgIgEgEgGQgEgHAAgHQAAgIAEgHQAEgHAIgDQAHgDAKgBQAJAAAJAEQAIAEAGAIIgMALQgEgGgGgDQgGgCgGAAQgGAAgEADQgDAEAAAFQAAADACADQACADAEADIALAFIANAGQAIADAFAGQAEAHAAAJQAAAJgEAGQgFAHgIAFQgIAEgLAAQgGAAgHgCg");
	this.shape_75.setTransform(407.525,-40.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgbAvQgLgIgHgMQgGgNAAgOQAAgPAGgMQAHgMALgGQAMgHAOAAQALAAAJAEQAJAFAGAIIAAgPIASAAIAABlIgSAAIAAgOQgGAHgJAFQgJAFgLAAQgOgBgMgGgAgRgfQgHAGgEAIQgEAIAAAJQAAAKAEAJQAEAHAHAFQAIAGAKAAQALAAAHgGQAIgFAFgHQADgJAAgKQAAgJgDgIQgFgIgIgGQgHgEgLAAQgKAAgIAEg");
	this.shape_76.setTransform(396.7,-40.75);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("Ag5BGIAAiLIA0AAQATAAAOAJQAPAIAIAQQAHAQABAUQgBAWgHAQQgJAPgPAJQgOAIgUAAgAgmA0IAfAAQAOAAALgHQAKgHAGgLQAFgMAAgPQAAgOgFgMQgGgLgKgHQgLgHgOAAIgfAAg");
	this.shape_77.setTransform(383.9,-42.675);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAGAAADADQADAEAAAEQAAAFgDADQgDAEgGAAQgEAAgEgEg");
	this.shape_78.setTransform(369.4,-36.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgUAwQgKgEgHgHQgGgIgDgJQgDgKAAgKQAAgOAGgMQAHgNALgGQAMgHAOAAQAPAAALAGQALAGAGALQAGAMAAAQIAAAEIAAAFIhQAAQABAHAEAHQAEAGAIAEQAHAFAKAAQAKAAAJgEQAKgDAHgFIAIAOQgHAFgMAFQgLAEgOABQgNgBgLgFgAAggHQgBgKgEgGQgEgHgHgDQgHgDgIAAQgHAAgHADQgHAEgEAHQgFAGgBAJIA+AAIAAAAg");
	this.shape_79.setTransform(361.425,-40.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgMA8QgIgKAAgSIAAgyIgSAAIAAgPIASAAIAAgkIASAAIAAAkIAjAAIAAAPIgjAAIAAAzQAAAKADAFQAEAFAJAAQAFAAAEgBIAJgEIAHAOQgGAEgHACQgHACgHAAQgQAAgIgKg");
	this.shape_80.setTransform(351.675,-42.425);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAVBIIglgwIgKAJIAAAnIgSAAIAAiPIASAAIAABTIAtgpIAYAAIguAqIAwA7g");
	this.shape_81.setTransform(343.075,-42.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgWAvQgKgFgFgKQgFgKgBgNIAAg8IATAAIAAA7QAAANAGAHQAHAHALAAQAMAAAHgHQAHgHAAgNIAAg7IASAAIAAA8QAAAUgMAMQgLALgVAAQgMAAgKgFg");
	this.shape_82.setTransform(331.525,-40.625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgbBCQgLgHgHgMQgGgMAAgPQAAgPAGgLQAHgMALgHQAMgHAOgBQALAAAJAFQAJAFAGAIIAAg5IASAAIAACPIgSAAIAAgPQgGAJgJAEQgJAEgKAAQgPAAgMgHgAgRgLQgIAFgEAHQgEAJAAAKQAAAKAEAIQAEAIAIAFQAIAFAKAAQAKAAAIgFQAIgFAEgIQAEgIAAgKQAAgKgEgJQgEgHgIgFQgIgFgKAAQgKAAgIAFg");
	this.shape_83.setTransform(319.275,-42.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgbAuQgMgHgHgMQgHgMAAgPQAAgOAHgMQAHgMAMgHQAMgHAPAAQAPAAAMAHQANAHAGAMQAHAMAAAOQAAAPgHAMQgGAMgNAHQgMAIgPAAQgPAAgMgIgAgRgfQgIAGgEAIQgFAIAAAJQAAAKAFAJQAEAHAIAFQAIAGAJAAQAKAAAHgGQAIgFAGgHQAEgJAAgKQAAgJgEgIQgGgIgIgGQgHgEgKAAQgJAAgIAEg");
	this.shape_84.setTransform(307.15,-40.75);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgcA0IAAhlIARAAIAAAPQAFgJAGgEQAHgEAKAAIAGAAIAGABIgBASIgGgBIgFgBQgIAAgGAEQgFADgEAIQgEAHAAALIAAA1g");
	this.shape_85.setTransform(297.925,-40.875);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgtBGIAAiLIAuAAQAQAAAKAGQAKAHAEAJQAFAKAAALQAAALgFAKQgFAJgKAGQgLAGgPAAIgaAAIAAA2gAgaAAIAaAAQAJAAAGgEQAHgEACgGQADgGAAgGQAAgHgDgFQgCgGgGgEQgFgDgJAAIgcAAg");
	this.shape_86.setTransform(288.425,-42.675);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgbBCQgLgHgHgMQgGgMAAgPQAAgPAGgLQAHgMALgHQAMgHAOgBQALAAAJAFQAJAFAGAIIAAg5IASAAIAACPIgSAAIAAgPQgGAJgJAEQgJAEgKAAQgPAAgMgHgAgRgLQgIAFgEAHQgEAJAAAKQAAAKAEAIQAEAIAIAFQAIAFAKAAQAKAAAIgFQAIgFAEgIQAEgIAAgKQAAgKgEgJQgEgHgIgFQgIgFgKAAQgKAAgIAFg");
	this.shape_87.setTransform(270.725,-42.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAbA0IAAg3QAAgLgDgHQgEgGgFgEQgGgDgIAAQgHAAgHAEQgGAEgDAHQgEAHAAAJIAAA3IgSAAIAAhlIASAAIAAAPQAEgIAJgFQAIgEAKAAQALAAAJAEQAJAFAFAKQAGAJAAAOIAAA9g");
	this.shape_88.setTransform(258.875,-40.875);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgbAvQgLgIgHgMQgGgNAAgOQAAgPAGgMQAHgMALgGQAMgHAOAAQALAAAJAEQAJAFAGAIIAAgPIASAAIAABlIgSAAIAAgOQgGAHgJAFQgJAFgLAAQgOgBgMgGgAgRgfQgHAGgEAIQgEAIgBAJQABAKAEAJQAEAHAHAFQAIAGAKAAQALAAAHgGQAIgFAFgHQADgJAAgKQAAgJgDgIQgFgIgIgGQgHgEgLAAQgKAAgIAEg");
	this.shape_89.setTransform(246.3,-40.75);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgVBJIAAhVIgRAAIAAgQIARAAIAAgGQAAgNAFgIQAFgIAJgFQAHgEALAAQAHAAAFABIALAEIgFAPIgIgCIgHgBQgLAAgGAFQgEAGAAAKIAAAGIAfAAIAAAQIgfAAIAABVg");
	this.shape_90.setTransform(237.225,-42.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgtBGIAAiLIAuAAQAQAAAKAGQAKAHAEAJQAFAKAAALQAAALgFAKQgFAJgKAGQgLAGgPAAIgaAAIAAA2gAgaAAIAaAAQAJAAAGgEQAHgEACgGQADgGAAgGQAAgHgDgFQgCgGgGgEQgFgDgJAAIgcAAg");
	this.shape_91.setTransform(227.625,-42.675);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgkAIIAAgQIBJAAIAAAQg");
	this.shape_92.setTransform(216.325,-40.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgaBFQgLgDgJgHIAIgOQAHAFAKADQAJAEALABQAKgBAIgEQAJgEAEgJQAEgHAAgKIAAgJQgGAJgJADQgJAFgKAAQgPAAgMgIQgLgGgHgMQgGgLAAgPQAAgPAHgMQAGgLAMgHQAMgHAOAAQAKAAAJAFQAJADAGAIIAAgNIASAAIAABaQAAARgGAMQgHAMgMAGQgNAHgPAAQgNAAgMgFgAgQgzQgIAEgEAIQgFAIAAAKQAAALAFAIQAEAHAIAFQAIAEAJAAQAKAAAIgEQAHgFAFgHQAEgIAAgLQAAgKgEgIQgFgIgHgEQgIgFgKgBQgJABgIAFg");
	this.shape_93.setTransform(204.775,-38.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgUAwQgKgEgHgHQgGgIgDgJQgDgKAAgKQAAgOAGgMQAHgNALgGQAMgHAOAAQAPAAALAGQALAGAGALQAGAMAAAQIAAAEIAAAFIhQAAQABAHAEAHQAEAGAIAEQAHAFAKAAQAKAAAJgEQAKgDAHgFIAIAOQgHAFgMAFQgLAEgOABQgNgBgLgFgAAggHQgBgKgEgGQgEgHgHgDQgHgDgIAAQgHAAgHADQgHAEgEAHQgFAGgBAJIA+AAIAAAAg");
	this.shape_94.setTransform(192.975,-40.75);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAcAzIgchLIgbBLIgPAAIgjhlIAUAAIAYBMIAbhMIANAAIAcBMIAYhMIATAAIgiBlg");
	this.shape_95.setTransform(179.15,-40.75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAbA0IAAg3QAAgLgDgHQgEgGgFgEQgGgDgIAAQgHAAgHAEQgGAEgDAHQgEAHAAAJIAAA3IgSAAIAAhlIASAAIAAAPQAEgIAJgFQAIgEAKAAQALAAAJAEQAJAFAFAKQAGAJAAAOIAAA9g");
	this.shape_96.setTransform(165.375,-40.875);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgIBHIAAhlIARAAIAABlgAgIgwQgEgEAAgGQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFQAAAGgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_97.setTransform(157.15,-42.75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgrBGIAAiLIBXAAIAAASIhEAAIAAAqIA/AAIAAARIg/AAIAAAsIBEAAIAAASg");
	this.shape_98.setTransform(149.375,-42.675);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgVBJIAAhVIgRAAIAAgQIARAAIAAgGQAAgNAFgIQAFgIAJgFQAHgEALAAQAHAAAFABIALAEIgFAPIgIgCIgHgBQgLAAgGAFQgEAGAAAKIAAAGIAfAAIAAAQIgfAAIAABVg");
	this.shape_99.setTransform(135.475,-42.975);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgWAvQgKgFgFgKQgFgKgBgNIAAg8IATAAIAAA7QAAANAGAHQAHAHALAAQAMAAAHgHQAHgHAAgNIAAg7IASAAIAAA8QAAAUgMAMQgLALgVAAQgMAAgKgFg");
	this.shape_100.setTransform(125.425,-40.625);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgaAvQgMgIgGgMQgHgNAAgOQAAgPAHgMQAGgMAMgGQALgHAPAAQAKAAAJAEQAJAFAHAIIAAgPIARAAIAABlIgRAAIAAgOQgHAHgJAFQgJAFgKAAQgPgBgLgGgAgQgfQgIAGgFAIQgEAIAAAJQAAAKAEAJQAFAHAIAFQAHAGAKAAQAKAAAJgGQAHgFAEgHQAFgJAAgKQAAgJgFgIQgEgIgHgGQgJgEgKAAQgKAAgHAEg");
	this.shape_101.setTransform(113.15,-40.75);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgaBFQgLgDgJgHIAIgOQAHAFAKADQAJAEALABQAKgBAIgEQAJgEAEgJQAEgHAAgKIAAgJQgGAJgJADQgJAFgKAAQgPAAgMgIQgLgGgHgMQgGgLAAgPQAAgPAHgMQAGgLAMgHQAMgHAOAAQAKAAAJAFQAJADAGAIIAAgNIASAAIAABaQAAARgGAMQgHAMgMAGQgNAHgPAAQgNAAgMgFgAgQgzQgIAEgEAIQgFAIAAAKQAAALAFAIQAEAHAIAFQAIAEAJAAQAKAAAIgEQAHgFAFgHQAEgIAAgLQAAgKgEgIQgFgIgHgEQgIgFgKgBQgJABgIAFg");
	this.shape_102.setTransform(95.825,-38.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgIBHIAAhlIARAAIAABlgAgIgwQgEgEAAgGQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFQAAAGgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_103.setTransform(87.5,-42.75);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgMA8QgIgKAAgSIAAgyIgSAAIAAgPIASAAIAAgkIASAAIAAAkIAjAAIAAAPIgjAAIAAAzQAAAKADAFQAEAFAJAAQAFAAAEgBIAJgEIAHAOQgGAEgHACQgHACgHAAQgQAAgIgKg");
	this.shape_104.setTransform(81.225,-42.425);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_105.setTransform(74.725,-42.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgWBDQgKgFgFgKQgFgJgBgOIAAg8IATAAIAAA8QAAAMAGAHQAHAIALAAQAMAAAHgIQAHgHAAgMIAAg8IASAAIAAA8QAAAVgMALQgLAMgVAAQgMAAgKgGgAAKgyQgEgDAAgGQAAgFAEgEQAEgEAFAAQAGAAADAEQAEAEAAAFQAAAGgEADQgDAEgGAAQgFAAgEgEgAgbgyQgEgDAAgGQAAgFAEgEQAEgEAGAAQAFAAAEAEQADAEAAAFQAAAGgDADQgEAEgFAAQgGAAgEgEg");
	this.shape_106.setTransform(66.775,-42.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AggA/QgQgJgJgRQgJgPgBgWQABgPAFgNQAGgOAKgJQAKgJANgGQANgFAOgBQAMABALADQAMADAJAGQAJAGAGAIIgOAMQgIgKgLgEQgMgGgNAAQgPAAgMAHQgMAHgHAMQgHANAAAOQAAAQAHAMQAHANAMAGQAMAIAOgBQANAAAMgFQALgFAJgJIAAgcIgvAAIAAgRIBBAAIAAA1QgNAPgQAHQgRAHgSAAQgUAAgQgJg");
	this.shape_107.setTransform(53.325,-42.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	// white bg
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.898)").s().p("EgsmAI0IAAxnMBZNAAAIAARng");
	this.shape_108.setTransform(195.45,-8.8);
	this.shape_108._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-65.2,571,112.80000000000001);


// stage content:
(lib._300x600_understitial = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {replay:1,showEndScreen:25};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,24,74];
	// timeline functions:
	this.frame_0 = function() {
		if(!this.listenersSet || typeof this.listenersSet == "undefined") {
			this.listenersSet = true;
			
			window.Sitebar = document.getElementById(IAB_adconfig.canvasID);
			
			// BIND BUTTON ACTIONS & CO
			window.animationStage = this;
			
			window.END_SCREEN_START = 00001;	//variable wann der endscreen kommen soll in ms
			this.looper = 1;	//nicht anfassen
			this.maxLoops = 0;	//diese Variable setzen für die Anzahl der Abläufe
			
			/*
			this.mc_controls.mc_sound.addEventListener('click', toggleMute);
			this.mc_controls.mc_sound.cursor = "pointer";
			window.muteButton = this.mc_controls.mc_sound;
			this.mc_controls.btn_replay.addEventListener('click', replayVideo);
			*/
		}
		
		window.showEarlyEndScreen = function (te) {
			window.animationStage.gotoAndPlay('showEndScreen');
		}
		this.btn_clicktag.addEventListener("click", window.callClicktag);
		
		/*
		this.btn_clicktag1.addEventListener("click", function (evt) {
				window.callClicktag(evt, "1");
		});
		*/
	}
	this.frame_1 = function() {
		this.endScreenTimer = setTimeout(showEarlyEndScreen, window.END_SCREEN_START);
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(50).call(this.frame_74).wait(1));

	// RT
	this.rt_mc = new lib.mc_rt_text();
	this.rt_mc.name = "rt_mc";
	this.rt_mc.setTransform(9.6,626.6,0.6,0.6,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.rt_mc).wait(25).to({x:13.6,y:580.6,alpha:0},0).to({alpha:1},18).wait(32));

	// clicktag
	this.btn_clicktag = new lib.btn_clicktag();
	this.btn_clicktag.name = "btn_clicktag";
	this.btn_clicktag.setTransform(-0.2,-0.2,0.6,0.6);
	new cjs.ButtonHelper(this.btn_clicktag, 0, 1, 2, false, new lib.btn_clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_clicktag).wait(75));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.8,299.8,150,336.8);
// library properties:
lib.properties = {
	id: '0318749B0FE9784AA70C70E565BB677C',
	width: 300,
	height: 600,
	fps: 25,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0318749B0FE9784AA70C70E565BB677C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;