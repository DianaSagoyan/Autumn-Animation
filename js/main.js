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

	// enter the greeting text
	
	// the GO function ...to kick things all off

	function go(){
		console.log("go...");
		const masterTl = gsap.timeline({});

		masterTl.add(clearStage(), 'scene-clear-stage')
				.add(enterFloorVegetation(), 'scene-floor-vegetation');
	}

	go();

})(jQuery);


