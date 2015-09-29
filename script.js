// $(function() {


// });

window.onload = function() {
	
	//jason format
	var data = [
		{skill:"PHP", value:50},
		{skill:"CSS", value:40},
		{skill:"HTML", value:20},
		{skill:"JS", value:60},
		{skill:"Design", value:30},
		{skill:"SQL", value:10}
	];


	var colour = d3.scale.category10();

	var svg = d3.select("#skillGraph");

		svg.selectAll('rect')
		.data(data,function(d) { return d.skill })
		.enter()
		.append('rect')
		.attr('width',50)
		.attr('height',0)
		.attr('x',function(d,i) { return i*100 })
		.attr('y',500)
		.attr('fill',function(d,i) { return colour(d.skill) })
		.transition()
		.duration(1000)
		.attr('height',function(d) { return d.value*5 })
		.attr('y',function(d) { return 500-d.value*5 });

		svg.selectAll('text')
		.data(data,function(d) {return d.skill})
		.enter()
		.append('text')
		.text(function(d) { return d.skill})
		.attr('font-size',20)
		.attr('font-family','helvetica')
		.attr('x',function(d,i) { return i*100})
		.attr('y',520);

//////////////////////////////// over time --change my skills/////////////////////////////////////

	document.getElementById("update").onclick = function () {
		// console.log("hoi");
		var newData = [
			{skill:"D3", value:50},
			{skill:"JS", value:90},
			{skill:"PHP", value:80},
			{skill:"CSS", value:70},
			{skill:"Sass", value:100},
			{skill:"Flex", value:60},
			{skill:"Animation", value:40}
		];
		var updatedCollection = svg.selectAll('rect')
			.data(newData,function(d) { return d.skill });

		var updatedTextCollection = svg.selectAll('text')
			.data(newData,function(d) {return d.skill});

			updatedCollection.enter()
				.append('rect')
				.attr('width',50)
				.attr('height',0)
				.attr('x',function(d,i) { return i*100 })
				.attr('y',500)
				.attr('fill',function(d,i) { return colour(d.skill) })
				.transition()
				.duration(1000)
				.attr('height',function(d) { return d.value*5 })
				.attr('y',function(d) { return 500-d.value*5 });		

			updatedTextCollection.enter()
				.append('text')
				.text(function(d) { return d.skill})
				.attr('font-size',20)
				.attr('font-family','helvetica')
				.attr('x',function(d,i) { return i*100})
				.attr('y',520);		

			updatedCollection.exit().remove();

			updatedTextCollection.exit().remove();

			updatedCollection.transition()
				.duration(2000)
				.attr('x',function(d,i) { return i*100 })
				.attr('y',function(d) { return 500-d.value*5 })
				.attr('height',function(d) { return d.value*5});

			updatedTextCollection.transition()
				.duration(3000)
				.attr('x',function(d,i) { return i*100 })
				.attr('y',520);
				
	};

// .attr('height',function(d) { return d.value*5 })
// 	.attr('x',function(d,i) { return i*100 })
// 	.attr('y',function(d) { return 500-d.value*5 })
// 	.attr('fill',function(d,i) { return colour(i) });

	// console.log(data);

};