/*  Autumn Greeting Card -- js */

(function($){
	'use strict';

	// declare actors here
	let cardContainer = document.querySelector('.card.container')

	//Leaves
	let brownFallingLeaf = document.getElementById("brownLeaf"),
	  orangeFallingLeaf = document.getElementById("orangeLeaf"),
	  redFallingLeaf = document.getElementById("redLeaf");

	//Text
	let textLine1 = document.querySelectorAll(".text-line-1"),
		textLine2 = document.querySelectorAll(".text-line-2"),
		textGreeting = document.querySelectorAll(".text-greeting");

	//Tree
	let treeLeaves = document.getElementById("tree_leaves");
	let floorLeaves = document.getElementById("floor_leaves");
	let treeTrunk = document.getElementById("tree_trunk");
	let nestAndLeaves = document.getElementById("NestAndLeaves");

	//Bird
	let bird = document.getElementById("bird");
	let birdHat = document.getElementById("BirdHat");
	let leftEye = document.getElementById("leftEye");
	let rightEye = document.getElementById("rightEye");

	// clear stage 
	function clearStage(){
		const clearTl = gsap.timeline({});

		clearTl.set(brownFallingLeaf, {opacity: 0});
		clearTl.set(orangeFallingLeaf, {opacity: 0});
		clearTl.set(redFallingLeaf, {opacity: 0});
		
		clearTl.set(textLine1, {opacity: 0});
		clearTl.set(textLine2, {opacity: 0});
		clearTl.set(textGreeting, {opacity: 0});

		clearTl.set(treeLeaves, {opacity: 0});
		clearTl.set(floorLeaves, {y: 275, onComplete: showContainer}); 
		clearTl.set(treeTrunk, {opacity: 0});
		clearTl.set(nestAndLeaves, {opacity: 0});

		clearTl.set(bird, {opacity: 0, y: 61});

		function showContainer(){
			cardContainer.style.display = 'block';
		}

		return clearTl;
	}

	// enter floor vegetation
	function enterFloorVegetation(){
		let fleavesTl = gsap.timeline({defaults: {duration: 1}});

		fleavesTl.staggerTo(floorLeaves, 1, {y: 0, ease: "back.out(1.7)"}, 0.01)
				  .fromTo(treeTrunk, 1.1, {scaleY: 0, transformOrigin: 'center bottom'}, 
				  {scaleY: 1, opacity: 1, transformOrigin: 'center bottom', ease: "back.out(1.7)"})
				  .fromTo(treeTrunk, 0.9, {scaleX: 0, transformOrigin: 'center bottom'}, 
				  {scaleX: 1, opacity: 1, transformOrigin: 'center bottom', ease: "back.out(1.7)"}, "<")
		return fleavesTl;
	}

	// enter tree
	function enterTreeStuff(){
		let treeStuffTl = gsap.timeline({});

		treeStuffTl.staggerFromTo(treeLeaves, 0.5, {scale: 0.2, opacity: 0, transformOrigin: 'center bottom'},
									 {scale: 1, opacity: 1, transformOrigin: 'center bottom'}, 0.02)
									 .fromTo(nestAndLeaves, 1, {y: 0, scale: 0.2, opacity: 0, transformOrigin: "center center"},
									 {y: -15, opacity: 1, scale: 1, transformOrigin: "center center", ease: "elastic.out", delay: 0.4}, "+=0.1")
									 .to(nestAndLeaves, 0.3, {y: 15, ease: "bounce.out"}, "-=0.2")
									 .add('nest-pop-in')
									 .set(birdHat, {rotation: 12, x: "+=6"})
									 .to(bird, 1.4, {y: "-=23", opacity: 1, ease: "power4.out"}, 'nest-pop-in +=0.1')
									 .add('bird-peeking')
									 .set(leftEye, {opacity: 0})
									 .set(rightEye, {opacity: 0})
									 .set(leftEye, {opacity: 1}, "+=0.2")
									 .set(rightEye, {opacity: 1}, "<")
									 .set(leftEye, {opacity: 0}, "+=0.3")
									 .set(rightEye, {opacity: 0}, "<")
									 .set(leftEye, {opacity: 1}, "+=0.2")
									 .set(rightEye, {opacity: 1}, "<")
									 .add('bird-blinks')
									 .to(bird, 0.8, {y: "-=23", ease: "power4.out"})
									 .to(bird, 0.3, {y: "+=10", ease: "bounce.out"})
									 .to(birdHat, 0.4, {y: "-=12"}, '-=0.6')
									 .to(birdHat, 0.3, {y: 0, rotation: 0, x: 0, onComplete: startBlinking}, '-=0.2');
							
	function startBlinking(){
		let birdBlinkTl = gsap.timeline({repeat: -1, repeatDelay: 5});

		birdBlinkTl
			.set(leftEye, {opacity: 0})
			.set(rightEye, {opacity: 0})
			.set(leftEye, {opacity: 1}, "+=0.2")
			.set(rightEye, {opacity: 1}, "<")
			.set(leftEye, {opacity: 0}, "+=1.2")
			.set(rightEye, {opacity: 0}, "<")
			.set(leftEye, {opacity: 1}, "+=0.2")
			.set(rightEye, {opacity: 1}, "<")
	}

		return treeStuffTl;
	}

	// enter the greeting text
	
	// the GO function ...to kick things all off

	function go(){
		console.log("go...");
		const masterTl = gsap.timeline({});

		masterTl.add(clearStage(), 'scene-clear-stage')
				.add(enterFloorVegetation(), 'scene-floor-vegetation')
				.add(enterTreeStuff(), 'scene-enter-treestuff');
	}

	go();

})(jQuery);


