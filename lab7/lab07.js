const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];


let myNodelist = document.querySelectorAll("div");
let container = myNodelist[2];
let scriptCode = container.childNodes[0];


for(let i = 0; i < 4; i++){

	let currentItem = document.createElement("div");
	currentItem.className = "item";
  	

	let genre = document.createElement("h4");
	let name = document.createElement("h3");
	name.style.display = "inline";
	let photoName = document.createElement("h3");
	photoName.innerHTML = "Popular Photos"
	let life = document.createElement("h5");
	life.style.display = "inline";
	life.style.marginLeft = "1em";
	let box = document.createElement("div");
	box.className = "inner-box";	
	let photoBox = document.createElement("div");
	photoBox.className = "inner-box";
	let btn = document.createElement("button");
	btn.type = "button";
	btn.value = "Visit";
	btn.innerHTML = "Visit";
	
	//子节点的组合
	box.appendChild(name);
	box.appendChild(life);
	photoBox.appendChild(photoName);
	

	currentItem.appendChild(genre);
	currentItem.appendChild(box);
	currentItem.appendChild(photoBox);
	currentItem.appendChild(btn);
	
	//Genre子节点的内容填充
	currentItem.childNodes[0].innerHTML = "Genre : " + works[i].tips;
	
	//姓名与生卒年子节点的内容填充
	currentItem.childNodes[1].childNodes[0].innerHTML = works[i].author;
	currentItem.childNodes[1].childNodes[1].innerHTML = "lifetime:" +  works[i].lifetime;

	//图片子节点的创建与内容填充
	for(let j = 0; j < works[i].photos.length; j++){
		let imgContainer = document.createElement("img");
		imgContainer.className = "photo";
		imgContainer.src = works[i].photos[j];
		currentItem.childNodes[2].appendChild(imgContainer);
	}
	

	container.insertBefore(currentItem, scriptCode);
}