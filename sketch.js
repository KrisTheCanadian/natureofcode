let mobilenet;

let puffin;

function modelready(){
	console.log('Model is Ready!');
	mobilenet.predict(puffin, gotresult);
}

function gotresult(error,data){
	if(error){
		console.error(error);
	}
	else{
		console.log(data);
		let label = data[0].className;
		let prob = data[0].probability;
		fill(0);
		textSize(64);
		createP(label);
		createP(prob);
	}
}

function imageready(){
	console.log('Image is Ready!');
	image(puffin,0,0,width,height);
}

function setup() {
	puffin = createImg('images/greatpyr.jpg', imageready);
	createCanvas(640,480);
	puffin.hide();

	background(0);
	mobilenet = ml5.imageClassifier('MobileNet', modelready);

}

function draw() {


}
