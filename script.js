/* Game variables */
let bytes = 0;
let bytesPerButtonClick = 1;
let buttonMultiplier = 1;
let everythingMultiplier = 1;
let bytesPerSecond;

/* Data variables */
let isClearing = false;

/* Utility variables */
let isTimedPrintTextVisible = false;
let timedPrintTextTimeout;

/* Utility functions */
function printText(id, text) {
	document.getElementById(id).textContent = text;
}

function timedPrintText(id, text, duration) {
	if (isTimedPrintTextVisible == true) {
		clearTimeout(timedPrintTextTimeout);
		isTimedPrintTextVisible = false;
		document.getElementById(id).innerHTML = "&nbsp;";
	}

	isTimedPrintTextVisible = true;
	document.getElementById(id).innerHTML = text;
	timedPrintTextTimeout = setTimeout(() => {
		isTimedPrintTextVisible = false;
		document.getElementById(id).innerHTML = "&nbsp;";
	}, duration * 1000);
}

function groupBytes(byteCount) {
	const byteGroups = ["byte", "kilobyte", "megabyte", "gigabyte", "terabyte", "petabyte", "exabyte", "zettabyte", "yottabyte", "brontobyte", "geopbyte"];
	let byteLevels = -1;
	let isFinished = false;
	let factor;
	let returnedBytes;
	let returnedByteGroup;

	while (isFinished == false) {
		if (byteCount >= (1000 ** byteLevels)) {
			if (byteLevels == byteGroups.length - 1) {
				isFinished = true;
			}

			byteLevels += 1;
		} else {
			isFinished = true;
		}
	}

	if (byteCount < 1) {
		factor = 10;
	} else {
		factor = 10000;
	}

	returnedBytes = Math.round((byteCount / (1000 ** byteLevels)) * factor) / 10;
	returnedByteGroup = ((byteLevels - 1) < 0) ? byteGroups[0] : byteGroups[byteLevels - 1];

	return (returnedBytes == 1) ? `${returnedBytes} ${returnedByteGroup}` : `${returnedBytes} ${returnedByteGroup}s`;
}

function printBytes() {
	const byteDisplay = groupBytes(bytes);
	document.title = `${byteDisplay} - Byte Clicker`;
	printText("bytes", byteDisplay);
}

function displayInternetItems() {
	document.getElementById("clickers").style.display = "none";
	document.getElementById("upgrades").style.display = "none";
	document.getElementById("clickersOwned").style.display = "none";
	document.getElementById("internet").style.display = "block";
	document.getElementById("internetOwned").style.display = "block";
}

/* Store objects */
/* Clickers */
let autoClicker = {
	id: "autoClicker",
	type: "clicker",
	price: 25,
	bps: 0.1,
	multiplier: 1,
	owned: 0
}

let asciiCharacter = {
	id: "asciiCharacter",
	type: "clicker",
	price: 100,
	bps: 1,
	multiplier: 1,
	owned: 0
}

let textDocument = {
	id: "textDocument",
	type: "clicker",
	price: 1000,
	bps: 10,
	multiplier: 1,
	owned: 0
}

let email = {
	id: "email",
	type: "clicker",
	price: 10000,
	bps: 100,
	multiplier: 1,
	owned: 0
}

let picture = {
	id: "picture",
	type: "clicker",
	price: 50000,
	bps: 500,
	multiplier: 1,
	owned: 0
}

let musicTrack = {
	id: "musicTrack",
	type: "clicker",
	price: 100000,
	bps: 1000,
	multiplier: 1,
	owned: 0
}

let program = {
	id: "program",
	type: "clicker",
	price: 500000,
	bps: 5000,
	multiplier: 1,
	owned: 0
}

let video = {
	id: "video",
	type: "clicker",
	price: 1000000,
	bps: 10000,
	multiplier: 1,
	owned: 0
}

let pdfDocument = {
	id: "pdfDocument",
	type: "clicker",
	price: 5000000,
	bps: 100000,
	multiplier: 1,
	owned: 0
}

let webServer = {
	id: "webServer",
	type: "clicker",
	price: 100000000,
	bps: 100000000,
	multiplier: 1,
	owned: 0
}

let contentDeliveryNetwork = {
	id: "contentDeliveryNetwork",
	type: "clicker",
	price: 25000000000,
	bps: 10000000000,
	multiplier: 1,
	owned: 0
}

/* Upgrades */
let enhancedMouse = {
	id: "enhancedMouse",
	type: "upgrade",
	price: 250,
	multiplier: 2,
	owned: false
}

let clickerPatch = {
	id: "clickerPatch",
	type: "upgrade",
	price: 500,
	multiplier: 2,
	owned: false
}

let unicodeCharacter = {
	id: "unicodeCharacter",
	type: "upgrade",
	price: 1000,
	multiplier: 2,
	owned: false
}

let richTextDocument = {
	id: "richTextDocument",
	type: "upgrade",
	price: 10000,
	multiplier: 2,
	owned: false
}

let additionalMouse = {
	id: "additionalMouse",
	type: "upgrade",
	price: 25000,
	multiplier: 1000,
	owned: false
}

let fasterInternetSpeed = {
	id: "fasterInternetSpeed",
	type: "upgrade",
	price: 100000,
	multiplier: 2,
	owned: false
}

let softwareUpdate = {
	id: "softwareUpdate",
	type: "upgrade",
	price: 250000,
	multiplier: 2,
	owned: false
}

let clickerExtensions = {
	id: "clickerExtensions",
	type: "upgrade",
	price: 400000,
	multiplier: 4,
	owned: false
}

let highQualityPicture = {
	id: "highQualityPicture",
	type: "upgrade",
	price: 500000,
	multiplier: 2,
	owned: false
}

let utf16CharacterSet = {
	id: "utf16CharacterSet",
	type: "upgrade",
	price: 750000,
	multiplier: 4,
	owned: false
}

let increasedBitrate = {
	id: "increasedBitrate",
	type: "upgrade",
	price: 1000000,
	multiplier: 2,
	owned: false
}

let notepadPP = {
	id: "notepadPP",
	type: "upgrade",
	price: 2500000,
	multiplier: 4,
	owned: false
}

let outputLogging = {
	id: "outputLogging",
	type: "upgrade",
	price: 5000000,
	multiplier: 2,
	owned: false
}

let increasedPlaybackQuality = {
	id: "increasedPlaybackQuality",
	type: "upgrade",
	price: 10000000,
	multiplier: 2,
	owned: false
}

let additionalMouse2 = {
	id: "additionalMouse2",
	type: "upgrade",
	price: 25000000,
	multiplier: 1000000,
	owned: false
}

let enhancedMouseV2 = {
	id: "enhancedMouseV2",
	type: "upgrade",
	price: 30000000,
	multiplier: 3,
	owned: false
}

let _2StepVerification = {
	id: "2StepVerification",
	type: "upgrade",
	price: 50000000,
	multiplier: 4,
	owned: false
}

let adobeAcrobatPro = {
	id: "adobeAcrobatPro",
	type: "upgrade",
	price: 100000000,
	multiplier: 2,
	owned: false
}

let adobePhotoshop = {
	id: "adobePhotoshop",
	type: "upgrade",
	price: 2500000000,
	multiplier: 4,
	owned: false
}

let upgradedHostingPlan = {
	id: "upgradedHostingPlan",
	type: "upgrade",
	price: 10000000000,
	multiplier: 2,
	owned: false
}

let additionalMouse3 = {
	id: "additionalMouse3",
	type: "upgrade",
	price: 50000000000,
	multiplier: 1000000000,
	owned: false
}

let _320KbpsBitrate = {
	id: "320KbpsBitrate",
	type: "upgrade",
	price: 100000000000,
	multiplier: 4,
	owned: false
}

let visualStudioIDE = {
	id: "visualStudioIDE",
	type: "upgrade",
	price: 250000000000,
	multiplier: 4,
	owned: false
}

let increasedStorageCapacity = {
	id: "increasedStorageCapacity",
	type: "upgrade",
	price: 10000000000000,
	multiplier: 2,
	owned: false
}

let virtualMouse = {
	id: "virtualMouse",
	type: "upgrade",
	price: 50000000000000,
	multiplier: 1000000000000,
	owned: false
}

let _4KUHDQuality = {
	id: "4KUHDQuality",
	type: "upgrade",
	price: 100000000000000,
	multiplier: 4,
	owned: false
}

let fileToPDFConverter = {
	id: "fileToPDFConverter",
	type: "upgrade",
	price: 500000000000000,
	multiplier: 4,
	owned: false
}

let cdnSponsor = {
	id: "cdnSponsor",
	type: "upgrade",
	price: 10000000000000000,
	multiplier: 2,
	owned: false
}

let httpsProtocol = {
	id: "httpsProtocol",
	type: "upgrade",
	price: 25000000000000000,
	multiplier: 4,
	owned: false
}

let firmwareUpdate = {
	id: "firmwareUpdate",
	type: "upgrade",
	price: 50000000000000000,
	multiplier: 3,
	owned: false
}

let superMousePart1 = {
	id: "superMousePart1",
	type: "upgrade",
	price: 100000000000000000,
	multiplier: 10,
	owned: false
}

let superMousePart2 = {
	id: "superMousePart2",
	type: "upgrade",
	price: 250000000000000000,
	multiplier: 1000000000000000,
	owned: false
}

let hardwareUpgrade = {
	id: "hardwareUpgrade",
	type: "upgrade",
	price: 500000000000000000,
	multiplier: 5,
	owned: false
}

let serverlessDelivery = {
	id: "serverlessDelivery",
	type: "upgrade",
	price: 1000000000000000000,
	multiplier: 4,
	owned: false
}

let serverIntegration = {
	id: "serverIntegration",
	type: "upgrade",
	price: 50000000000000000000,
	multiplier: 15,
	owned: false
}

/* Internet Items */
let theInternet = {
	id: "theInternet",
	type: "internetClicker",
	price: 120000000000000000000000,
	bps: 1000000000000000000000,
	multiplier: 1,
	owned: false
}

let satellites = {
	id: "satellites",
	type: "internetUpgrade",
	price: 1,
	multiplier: 100,
	owned: false
}

let websites = {
	id: "websites",
	type: "internetUpgrade",
	price: 1,
	multiplier: 250,
	owned: false
}

let computers = {
	id: "computers",
	type: "internetUpgrade",
	price: 1,
	multiplier: 500,
	owned: false
}

let users = {
	id: "users",
	type: "internetUpgrade",
	price: 1,
	multiplier: 750,
	owned: false
}

let you = {
	id: "you",
	type: "internetUpgrade",
	price: 1,
	multiplier: 1000000,
	owned: false
}

const store = [
	/* Clicker */
	autoClicker,
	asciiCharacter,
	textDocument,
	email,
	picture,
	musicTrack,
	program,
	video,
	pdfDocument,
	webServer,
	contentDeliveryNetwork,

	/* Upgrades */
	enhancedMouse,
	clickerPatch,
	unicodeCharacter,
	richTextDocument,
	additionalMouse,
	fasterInternetSpeed,
	softwareUpdate,
	clickerExtensions,
	highQualityPicture,
	utf16CharacterSet,
	increasedBitrate,
	notepadPP,
	outputLogging,
	increasedPlaybackQuality,
	additionalMouse2,
	enhancedMouseV2,
	_2StepVerification,
	adobeAcrobatPro,
	adobePhotoshop,
	upgradedHostingPlan,
	additionalMouse3,
	_320KbpsBitrate,
	visualStudioIDE,
	increasedStorageCapacity,
	virtualMouse,
	_4KUHDQuality,
	fileToPDFConverter,
	cdnSponsor,
	httpsProtocol,
	firmwareUpdate,
	superMousePart1,
	superMousePart2,
	hardwareUpgrade,
	serverlessDelivery,
	serverIntegration,

	/* Internet Items */
	theInternet,
	satellites,
	websites,
	computers,
	users,
	you
];

/* Clicker functions */
function clicker(item) {
	if (item == "button") {
		bytes += bytesPerButtonClick * buttonMultiplier * everythingMultiplier;
	} else {
		for (let storeItem of store) {
			if (item == storeItem.id) {
				bytes += storeItem.bps * storeItem.owned * storeItem.multiplier * everythingMultiplier;
			}
		}
	}
	bytes = Math.round(bytes * 10) / 10;
	printBytes();
}

function startAutoClicker() {
	setInterval(() => {
		bytesPerSecond = 0;
		for (let item of store) {
			if (item.type == "clicker" || item.type == "internetClicker") {
				clicker(item.id);
				getBytesPerSecond();
			}
		}
	}, 1000);
}

function getBytesPerSecond() {
	bytesPerSecond = 0;
	for (let item of store) {
		if (item.type == "clicker" || item.type == "internetClicker") {
			bytesPerSecond += Math.floor((item.bps * item.owned * item.multiplier * everythingMultiplier) * 10) / 10;
			printText("bytesPerSecond", groupBytes(bytesPerSecond));
		}
	}
}

/* Data functions */
function saveData() {
	if (typeof localStorage === "undefined") {
		alert("Please enable localStorage or update your browser to save your game data.");
	} else {
		localStorage.setItem("bytes", bytes);
		localStorage.setItem("bytesPerButtonClick", bytesPerButtonClick);
		localStorage.setItem("bytesPerSecond", bytesPerSecond);
		localStorage.setItem("buttonMultiplier", buttonMultiplier);
		localStorage.setItem("everythingMultiplier", everythingMultiplier);
		localStorage.setItem("autoClicker", JSON.stringify(autoClicker));
		localStorage.setItem("asciiCharacter", JSON.stringify(asciiCharacter));
		localStorage.setItem("textDocument", JSON.stringify(textDocument));
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("picture", JSON.stringify(picture));
		localStorage.setItem("musicTrack", JSON.stringify(musicTrack));
		localStorage.setItem("program", JSON.stringify(program));
		localStorage.setItem("video", JSON.stringify(video));
		localStorage.setItem("pdfDocument", JSON.stringify(pdfDocument));
		localStorage.setItem("webServer", JSON.stringify(webServer));
		localStorage.setItem("contentDeliveryNetwork", JSON.stringify(contentDeliveryNetwork));
		localStorage.setItem("enhancedMouse", JSON.stringify(enhancedMouse));
		localStorage.setItem("clickerPatch", JSON.stringify(clickerPatch));
		localStorage.setItem("unicodeCharacter", JSON.stringify(unicodeCharacter));
		localStorage.setItem("richTextDocument", JSON.stringify(richTextDocument));
		localStorage.setItem("additionalMouse", JSON.stringify(additionalMouse));
		localStorage.setItem("fasterInternetSpeed", JSON.stringify(fasterInternetSpeed));
		localStorage.setItem("softwareUpdate", JSON.stringify(softwareUpdate));
		localStorage.setItem("clickerExtensions", JSON.stringify(clickerExtensions));
		localStorage.setItem("highQualityPicture", JSON.stringify(highQualityPicture));
		localStorage.setItem("utf16CharacterSet", JSON.stringify(utf16CharacterSet));
		localStorage.setItem("increasedBitrate", JSON.stringify(increasedBitrate));
		localStorage.setItem("notepadPP", JSON.stringify(notepadPP));
		localStorage.setItem("outputLogging", JSON.stringify(outputLogging));
		localStorage.setItem("increasedPlaybackQuality", JSON.stringify(increasedPlaybackQuality));
		localStorage.setItem("additionalMouse2", JSON.stringify(additionalMouse2));
		localStorage.setItem("enhancedMouseV2", JSON.stringify(enhancedMouseV2));
		localStorage.setItem("2StepVerification", JSON.stringify(_2StepVerification));
		localStorage.setItem("adobeAcrobatPro", JSON.stringify(adobeAcrobatPro));
		localStorage.setItem("adobePhotoshop", JSON.stringify(adobePhotoshop));
		localStorage.setItem("upgradedHostingPlan", JSON.stringify(upgradedHostingPlan));
		localStorage.setItem("additionalMouse3", JSON.stringify(additionalMouse3));
		localStorage.setItem("320KbpsBitrate", JSON.stringify(_320KbpsBitrate));
		localStorage.setItem("visualStudioIDE", JSON.stringify(visualStudioIDE));
		localStorage.setItem("increasedStorageCapacity", JSON.stringify(increasedStorageCapacity));
		localStorage.setItem("virtualMouse", JSON.stringify(virtualMouse));
		localStorage.setItem("4KUHDQuality", JSON.stringify(_4KUHDQuality));
		localStorage.setItem("fileToPDFConverter", JSON.stringify(fileToPDFConverter));
		localStorage.setItem("cdnSponsor", JSON.stringify(cdnSponsor));
		localStorage.setItem("httpsProtocol", JSON.stringify(httpsProtocol));
		localStorage.setItem("firmwareUpdate", JSON.stringify(firmwareUpdate));
		localStorage.setItem("superMousePart1", JSON.stringify(superMousePart1));
		localStorage.setItem("superMousePart2", JSON.stringify(superMousePart2));
		localStorage.setItem("hardwareUpgrade", JSON.stringify(hardwareUpgrade));
		localStorage.setItem("serverlessDelivery", JSON.stringify(serverlessDelivery));
		localStorage.setItem("serverIntegration", JSON.stringify(serverIntegration));
		localStorage.setItem("theInternet", JSON.stringify(theInternet));
		localStorage.setItem("satellites", JSON.stringify(satellites));
		localStorage.setItem("websites", JSON.stringify(websites));
		localStorage.setItem("computers", JSON.stringify(computers));
		localStorage.setItem("users", JSON.stringify(users));
		localStorage.setItem("you", JSON.stringify(you));
	}
	timedPrintText("saveStatus", "Data saved", 5);
}

function clearData() {
	if (confirm("Are you sure you want to erase your data? This cannot be undone and you will have to start over.") == true) {
		localStorage.clear();
		timedPrintText("saveStatus", "Data cleared", 1);
		isClearing = true;
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	}
}

/* Run on page load */
window.onload = () => {
	if (typeof localStorage === "undefined") {
		alert("Please enable localStorage to load your game data.");
	} else {
		if (localStorage.getItem("bytes") != undefined) {
			bytes = parseFloat(localStorage.getItem("bytes"));
		}

		if (localStorage.getItem("bytesPerButtonClick") != undefined) {
			bytesPerButtonClick = parseFloat(localStorage.getItem("bytesPerButtonClick"));
		}

		if (localStorage.getItem("bytesPerSecond") != undefined) {
			bytesPerSecond = parseFloat(localStorage.getItem("bytesPerSecond"));
		}

		if (localStorage.getItem("buttonMultiplier") != undefined) {
			buttonMultiplier = parseFloat(localStorage.getItem("buttonMultiplier"));
		}

		if (localStorage.getItem("everythingMultiplier") != undefined) {
			everythingMultiplier = parseFloat(localStorage.getItem("everythingMultiplier"));
		}

		if (localStorage.getItem("autoClicker") != undefined) {
			autoClicker = JSON.parse(localStorage.getItem("autoClicker"));
			store[0] = autoClicker;
		}
		autoClicker.buy = () => {
			if (bytes < autoClicker.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - autoClicker.price))}`, 5);
			} else {
				bytes -= autoClicker.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				autoClicker.owned += 1;
				printText(`${autoClicker.type}_${autoClicker.id}_owned`, autoClicker.owned);
				autoClicker.price += Math.floor(autoClicker.price * 0.1);
				printText(`${autoClicker.type}_${autoClicker.id}_price`, groupBytes(autoClicker.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("asciiCharacter") != undefined) {
			asciiCharacter = JSON.parse(localStorage.getItem("asciiCharacter"));
			store[1] = asciiCharacter;
		}
		asciiCharacter.buy = () => {
			if (bytes < asciiCharacter.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - asciiCharacter.price))}`, 5);
			} else {
				bytes -= asciiCharacter.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				asciiCharacter.owned += 1;
				printText(`${asciiCharacter.type}_${asciiCharacter.id}_owned`, asciiCharacter.owned);
				asciiCharacter.price += Math.floor(asciiCharacter.price * 0.1);
				printText(`${asciiCharacter.type}_${asciiCharacter.id}_price`, groupBytes(asciiCharacter.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("textDocument") != undefined) {
			textDocument = JSON.parse(localStorage.getItem("textDocument"));
			store[2] = textDocument;
		}
		textDocument.buy = () => {
			if (bytes < textDocument.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - textDocument.price))}`, 5);
			} else {
				bytes -= textDocument.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				textDocument.owned += 1;
				printText(`${textDocument.type}_${textDocument.id}_owned`, textDocument.owned);
				textDocument.price += Math.floor(textDocument.price * 0.1);
				printText(`${textDocument.type}_${textDocument.id}_price`, groupBytes(textDocument.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("email") != undefined) {
			email = JSON.parse(localStorage.getItem("email"));
			store[3] = email;
		}
		email.buy = () => {
			if (bytes < email.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - email.price))}`, 5);
			} else {
				bytes -= email.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				email.owned += 1;
				printText(`${email.type}_${email.id}_owned`, email.owned);
				email.price += Math.floor(email.price * 0.1);
				printText(`${email.type}_${email.id}_price`, groupBytes(email.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("picture") != undefined) {
			picture = JSON.parse(localStorage.getItem("picture"));
			store[4] = picture;
		}
		picture.buy = () => {
			if (bytes < picture.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - picture.price))}`, 5);
			} else {
				bytes -= picture.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				picture.owned += 1;
				printText(`${picture.type}_${picture.id}_owned`, picture.owned);
				picture.price += Math.floor(picture.price * 0.1);
				printText(`${picture.type}_${picture.id}_price`, groupBytes(picture.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("musicTrack") != undefined) {
			musicTrack = JSON.parse(localStorage.getItem("musicTrack"));
			store[5] = musicTrack;
		}
		musicTrack.buy = () => {
			if (bytes < musicTrack.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - musicTrack.price))}`, 5);
			} else {
				bytes -= musicTrack.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				musicTrack.owned += 1;
				printText(`${musicTrack.type}_${musicTrack.id}_owned`, musicTrack.owned);
				musicTrack.price += Math.floor(musicTrack.price * 0.1);
				printText(`${musicTrack.type}_${musicTrack.id}_price`, groupBytes(musicTrack.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("program") != undefined) {
			program = JSON.parse(localStorage.getItem("program"));
			store[6] = program;
		}
		program.buy = () => {
			if (bytes < program.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - program.price))}`, 5);
			} else {
				bytes -= program.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				program.owned += 1;
				printText(`${program.type}_${program.id}_owned`, program.owned);
				program.price += Math.floor(program.price * 0.1);
				printText(`${program.type}_${program.id}_price`, groupBytes(program.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("video") != undefined) {
			video = JSON.parse(localStorage.getItem("video"));
			store[7] = video;
		}
		video.buy = () => {
			if (bytes < video.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - video.price))}`, 5);
			} else {
				bytes -= video.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				video.owned += 1;
				printText(`${video.type}_${video.id}_owned`, video.owned);
				video.price += Math.floor(video.price * 0.1);
				printText(`${video.type}_${video.id}_price`, groupBytes(video.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("pdfDocument") != undefined) {
			pdfDocument = JSON.parse(localStorage.getItem("pdfDocument"));
			store[8] = pdfDocument;
		}
		pdfDocument.buy = () => {
			if (bytes < pdfDocument.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - pdfDocument.price))}`, 5);
			} else {
				bytes -= pdfDocument.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				pdfDocument.owned += 1;
				printText(`${pdfDocument.type}_${pdfDocument.id}_owned`, pdfDocument.owned);
				pdfDocument.price += Math.floor(pdfDocument.price * 0.1);
				printText(`${pdfDocument.type}_${pdfDocument.id}_price`, groupBytes(pdfDocument.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("webServer") != undefined) {
			webServer = JSON.parse(localStorage.getItem("webServer"));
			store[9] = webServer;
		}
		webServer.buy = () => {
			if (bytes < webServer.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - webServer.price))}`, 5);
			} else {
				bytes -= webServer.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				webServer.owned += 1;
				printText(`${webServer.type}_${webServer.id}_owned`, webServer.owned);
				webServer.price += Math.floor(webServer.price * 0.1);
				printText(`${webServer.type}_${webServer.id}_price`, groupBytes(webServer.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("contentDeliveryNetwork") != undefined) {
			contentDeliveryNetwork = JSON.parse(localStorage.getItem("contentDeliveryNetwork"));
			store[10] = contentDeliveryNetwork;
		}
		contentDeliveryNetwork.buy = () => {
			if (bytes < contentDeliveryNetwork.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - contentDeliveryNetwork.price))}`, 5);
			} else {
				bytes -= contentDeliveryNetwork.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				contentDeliveryNetwork.owned += 1;
				printText(`${contentDeliveryNetwork.type}_${contentDeliveryNetwork.id}_owned`, contentDeliveryNetwork.owned);
				contentDeliveryNetwork.price += Math.floor(contentDeliveryNetwork.price * 0.1);
				printText(`${contentDeliveryNetwork.type}_${contentDeliveryNetwork.id}_price`, groupBytes(contentDeliveryNetwork.price));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("enhancedMouse") != undefined) {
			enhancedMouse = JSON.parse(localStorage.getItem("enhancedMouse"));
			store[11] = enhancedMouse;
		}
		enhancedMouse.buy = () => {
			if (bytes < enhancedMouse.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - enhancedMouse.price))}`, 5);
			} else {
				bytes -= enhancedMouse.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				enhancedMouse.owned = true;
				document.getElementById(`${enhancedMouse.type}_${enhancedMouse.id}_button`).disabled = true;
				printText(`${enhancedMouse.type}_${enhancedMouse.id}_owned`, "Yes");
				buttonMultiplier += (enhancedMouse.multiplier - 1);
				printText("buttonMultiplier", buttonMultiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("clickerPatch") != undefined) {
			clickerPatch = JSON.parse(localStorage.getItem("clickerPatch"));
			store[12] = clickerPatch;
		}
		clickerPatch.buy = () => {
			if (bytes < clickerPatch.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - clickerPatch.price))}`, 5);
			} else {
				bytes -= clickerPatch.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				clickerPatch.owned = true;
				document.getElementById(`${clickerPatch.type}_${clickerPatch.id}_button`).disabled = true;
				printText(`${clickerPatch.type}_${clickerPatch.id}_owned`, "Yes");
				autoClicker.multiplier += (clickerPatch.multiplier - 1);
				printText(`${autoClicker.type}_${autoClicker.id}_multiplier`, autoClicker.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("unicodeCharacter") != undefined) {
			unicodeCharacter = JSON.parse(localStorage.getItem("unicodeCharacter"));
			store[13] = unicodeCharacter;
		}
		unicodeCharacter.buy = () => {
			if (bytes < unicodeCharacter.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - unicodeCharacter.price))}`, 5);
			} else {
				bytes -= unicodeCharacter.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				unicodeCharacter.owned = true;
				document.getElementById(`${unicodeCharacter.type}_${unicodeCharacter.id}_button`).disabled = true;
				printText(`${unicodeCharacter.type}_${unicodeCharacter.id}_owned`, "Yes");
				asciiCharacter.multiplier += (unicodeCharacter.multiplier - 1);
				printText(`${asciiCharacter.type}_${asciiCharacter.id}_multiplier`, asciiCharacter.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("richTextDocument") != undefined) {
			richTextDocument = JSON.parse(localStorage.getItem("richTextDocument"));
			store[14] = richTextDocument;
		}
		richTextDocument.buy = () => {
			if (bytes < richTextDocument.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - richTextDocument.price))}`, 5);
			} else {
				bytes -= richTextDocument.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				richTextDocument.owned = true;
				document.getElementById(`${richTextDocument.type}_${richTextDocument.id}_button`).disabled = true;
				printText(`${richTextDocument.type}_${richTextDocument.id}_owned`, "Yes");
				textDocument.multiplier += (richTextDocument.multiplier - 1);
				printText(`${textDocument.type}_${textDocument.id}_multiplier`, textDocument.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("additionalMouse") != undefined) {
			additionalMouse = JSON.parse(localStorage.getItem("additionalMouse"));
			store[15] = additionalMouse;
		}
		additionalMouse.buy = () => {
			if (bytes < additionalMouse.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - additionalMouse.price))}`, 5);
			} else {
				bytes -= additionalMouse.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				additionalMouse.owned = true;
				document.getElementById(`${additionalMouse.type}_${additionalMouse.id}_button`).disabled = true;
				printText(`${additionalMouse.type}_${additionalMouse.id}_owned`, "Yes");
				bytesPerButtonClick += (additionalMouse.multiplier - 1);
				printText("bytesPerButtonClick", groupBytes(bytesPerButtonClick));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("fasterInternetSpeed") != undefined) {
			fasterInternetSpeed = JSON.parse(localStorage.getItem("fasterInternetSpeed"));
			store[16] = fasterInternetSpeed;
		}
		fasterInternetSpeed.buy = () => {
			if (bytes < fasterInternetSpeed.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - fasterInternetSpeed.price))}`, 5);
			} else {
				bytes -= fasterInternetSpeed.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				fasterInternetSpeed.owned = true;
				document.getElementById(`${fasterInternetSpeed.type}_${fasterInternetSpeed.id}_button`).disabled = true;
				printText(`${fasterInternetSpeed.type}_${fasterInternetSpeed.id}_owned`, "Yes");
				email.multiplier += (fasterInternetSpeed.multiplier - 1);
				printText(`${email.type}_${email.id}_multiplier`, email.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("softwareUpdate") != undefined) {
			softwareUpdate = JSON.parse(localStorage.getItem("softwareUpdate"));
			store[17] = softwareUpdate;
		}
		softwareUpdate.buy = () => {
			if (bytes < softwareUpdate.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - softwareUpdate.price))}`, 5);
			} else {
				bytes -= softwareUpdate.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				softwareUpdate.owned = true;
				document.getElementById(`${softwareUpdate.type}_${softwareUpdate.id}_button`).disabled = true;
				printText(`${softwareUpdate.type}_${softwareUpdate.id}_owned`, "Yes");
				everythingMultiplier += (softwareUpdate.multiplier - 1);
				printText("everythingMultiplier", everythingMultiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("clickerExtensions") != undefined) {
			clickerExtensions = JSON.parse(localStorage.getItem("clickerExtensions"));
			store[18] = clickerExtensions;
		}
		clickerExtensions.buy = () => {
			if (bytes < clickerExtensions.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - clickerExtensions.price))}`, 5);
			} else {
				bytes -= clickerExtensions.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				clickerExtensions.owned = true;
				document.getElementById(`${clickerExtensions.type}_${clickerExtensions.id}_button`).disabled = true;
				printText(`${clickerExtensions.type}_${clickerExtensions.id}_owned`, "Yes");
				autoClicker.multiplier += (clickerExtensions.multiplier - 1);
				printText(`${autoClicker.type}_${autoClicker.id}_multiplier`, autoClicker.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("highQualityPicture") != undefined) {
			highQualityPicture = JSON.parse(localStorage.getItem("highQualityPicture"));
			store[19] = highQualityPicture;
		}
		highQualityPicture.buy = () => {
			if (bytes < highQualityPicture.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - highQualityPicture.price))}`, 5);
			} else {
				bytes -= highQualityPicture.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				highQualityPicture.owned = true;
				document.getElementById(`${highQualityPicture.type}_${highQualityPicture.id}_button`).disabled = true;
				printText(`${highQualityPicture.type}_${highQualityPicture.id}_owned`, "Yes");
				picture.multiplier += (highQualityPicture.multiplier - 1);
				printText(`${picture.type}_${picture.id}_multiplier`, picture.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("utf16CharacterSet") != undefined) {
			utf16CharacterSet = JSON.parse(localStorage.getItem("utf16CharacterSet"));
			store[20] = utf16CharacterSet;
		}
		utf16CharacterSet.buy = () => {
			if (bytes < utf16CharacterSet.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - utf16CharacterSet.price))}`, 5);
			} else {
				bytes -= utf16CharacterSet.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				utf16CharacterSet.owned = true;
				document.getElementById(`${utf16CharacterSet.type}_${utf16CharacterSet.id}_button`).disabled = true;
				printText(`${utf16CharacterSet.type}_${utf16CharacterSet.id}_owned`, "Yes");
				asciiCharacter.multiplier += (utf16CharacterSet.multiplier - 1);
				printText(`${asciiCharacter.type}_${asciiCharacter.id}_multiplier`, asciiCharacter.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("increasedBitrate") != undefined) {
			increasedBitrate = JSON.parse(localStorage.getItem("increasedBitrate"));
			store[21] = increasedBitrate;
		}
		increasedBitrate.buy = () => {
			if (bytes < increasedBitrate.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - increasedBitrate.price))}`, 5);
			} else {
				bytes -= increasedBitrate.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				increasedBitrate.owned = true;
				document.getElementById(`${increasedBitrate.type}_${increasedBitrate.id}_button`).disabled = true;
				printText(`${increasedBitrate.type}_${increasedBitrate.id}_owned`, "Yes");
				musicTrack.multiplier += (increasedBitrate.multiplier - 1);
				printText(`${musicTrack.type}_${musicTrack.id}_multiplier`, musicTrack.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("notepadPP") != undefined) {
			notepadPP = JSON.parse(localStorage.getItem("notepadPP"));
			store[22] = notepadPP;
		}
		notepadPP.buy = () => {
			if (bytes < notepadPP.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - notepadPP.price))}`, 5);
			} else {
				bytes -= notepadPP.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				notepadPP.owned = true;
				document.getElementById(`${notepadPP.type}_${notepadPP.id}_button`).disabled = true;
				printText(`${notepadPP.type}_${notepadPP.id}_owned`, "Yes");
				textDocument.multiplier += (notepadPP.multiplier - 1);
				printText(`${textDocument.type}_${textDocument.id}_multiplier`, textDocument.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("outputLogging") != undefined) {
			outputLogging = JSON.parse(localStorage.getItem("outputLogging"));
			store[23] = outputLogging;
		}
		outputLogging.buy = () => {
			if (bytes < outputLogging.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - outputLogging.price))}`, 5);
			} else {
				bytes -= outputLogging.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				outputLogging.owned = true;
				document.getElementById(`${outputLogging.type}_${outputLogging.id}_button`).disabled = true;
				printText(`${outputLogging.type}_${outputLogging.id}_owned`, "Yes");
				program.multiplier += (outputLogging.multiplier - 1);
				printText(`${program.type}_${program.id}_multiplier`, program.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("increasedPlaybackQuality") != undefined) {
			increasedPlaybackQuality = JSON.parse(localStorage.getItem("increasedPlaybackQuality"));
			store[24] = increasedPlaybackQuality;
		}
		increasedPlaybackQuality.buy = () => {
			if (bytes < increasedPlaybackQuality.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - increasedPlaybackQuality.price))}`, 5);
			} else {
				bytes -= increasedPlaybackQuality.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				increasedPlaybackQuality.owned = true;
				document.getElementById(`${increasedPlaybackQuality.type}_${increasedPlaybackQuality.id}_button`).disabled = true;
				printText(`${increasedPlaybackQuality.type}_${increasedPlaybackQuality.id}_owned`, "Yes");
				video.multiplier += (increasedPlaybackQuality.multiplier - 1);
				printText(`${video.type}_${video.id}_multiplier`, video.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("additionalMouse2") != undefined) {
			additionalMouse2 = JSON.parse(localStorage.getItem("additionalMouse2"));
			store[25] = additionalMouse2;
		}
		additionalMouse2.buy = () => {
			if (bytes < additionalMouse2.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - additionalMouse2.price))}`, 5);
			} else {
				bytes -= additionalMouse2.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				additionalMouse2.owned = true;
				document.getElementById(`${additionalMouse2.type}_${additionalMouse2.id}_button`).disabled = true;
				printText(`${additionalMouse2.type}_${additionalMouse2.id}_owned`, "Yes");
				bytesPerButtonClick += (additionalMouse2.multiplier - 1);
				printText("bytesPerButtonClick", groupBytes(bytesPerButtonClick));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("enhancedMouseV2") != undefined) {
			enhancedMouseV2 = JSON.parse(localStorage.getItem("enhancedMouseV2"));
			store[26] = enhancedMouseV2;
		}
		enhancedMouseV2.buy = () => {
			if (bytes < enhancedMouseV2.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - enhancedMouseV2.price))}`, 5);
			} else {
				bytes -= enhancedMouseV2.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				enhancedMouseV2.owned = true;
				document.getElementById(`${enhancedMouseV2.type}_${enhancedMouseV2.id}_button`).disabled = true;
				printText(`${enhancedMouseV2.type}_${enhancedMouseV2.id}_owned`, "Yes");
				buttonMultiplier += (enhancedMouseV2.multiplier - 1);
				printText("buttonMultiplier", buttonMultiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("2StepVerification") != undefined) {
			_2StepVerification = JSON.parse(localStorage.getItem("2StepVerification"));
			store[27] = _2StepVerification;
		}
		_2StepVerification.buy = () => {
			if (bytes < _2StepVerification.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - _2StepVerification.price))}`, 5);
			} else {
				bytes -= _2StepVerification.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				_2StepVerification.owned = true;
				document.getElementById(`${_2StepVerification.type}_${_2StepVerification.id}_button`).disabled = true;
				printText(`${_2StepVerification.type}_${_2StepVerification.id}_owned`, "Yes");
				email.multiplier += (_2StepVerification.multiplier - 1);
				printText(`${email.type}_${email.id}_multiplier`, email.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("adobeAcrobatPro") != undefined) {
			adobeAcrobatPro = JSON.parse(localStorage.getItem("adobeAcrobatPro"));
			store[28] = adobeAcrobatPro;
		}
		adobeAcrobatPro.buy = () => {
			if (bytes < adobeAcrobatPro.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - adobeAcrobatPro.price))}`, 5);
			} else {
				bytes -= adobeAcrobatPro.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				adobeAcrobatPro.owned = true;
				document.getElementById(`${adobeAcrobatPro.type}_${adobeAcrobatPro.id}_button`).disabled = true;
				printText(`${adobeAcrobatPro.type}_${adobeAcrobatPro.id}_owned`, "Yes");
				pdfDocument.multiplier += (adobeAcrobatPro.multiplier - 1);
				printText(`${pdfDocument.type}_${pdfDocument.id}_multiplier`, pdfDocument.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("adobePhotoshop") != undefined) {
			adobePhotoshop = JSON.parse(localStorage.getItem("adobePhotoshop"));
			store[29] = adobePhotoshop;
		}
		adobePhotoshop.buy = () => {
			if (bytes < adobePhotoshop.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - adobePhotoshop.price))}`, 5);
			} else {
				bytes -= adobePhotoshop.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				adobePhotoshop.owned = true;
				document.getElementById(`${adobePhotoshop.type}_${adobePhotoshop.id}_button`).disabled = true;
				printText(`${adobePhotoshop.type}_${adobePhotoshop.id}_owned`, "Yes");
				picture.multiplier += (adobePhotoshop.multiplier - 1);
				printText(`${picture.type}_${picture.id}_multiplier`, picture.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("upgradedHostingPlan") != undefined) {
			upgradedHostingPlan = JSON.parse(localStorage.getItem("upgradedHostingPlan"));
			store[30] = upgradedHostingPlan;
		}
		upgradedHostingPlan.buy = () => {
			if (bytes < upgradedHostingPlan.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - upgradedHostingPlan.price))}`, 5);
			} else {
				bytes -= upgradedHostingPlan.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				upgradedHostingPlan.owned = true;
				document.getElementById(`${upgradedHostingPlan.type}_${upgradedHostingPlan.id}_button`).disabled = true;
				printText(`${upgradedHostingPlan.type}_${upgradedHostingPlan.id}_owned`, "Yes");
				webServer.multiplier += (upgradedHostingPlan.multiplier - 1);
				printText(`${webServer.type}_${webServer.id}_multiplier`, webServer.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("additionalMouse3") != undefined) {
			additionalMouse3 = JSON.parse(localStorage.getItem("additionalMouse3"));
			store[31] = additionalMouse3;
		}
		additionalMouse3.buy = () => {
			if (bytes < additionalMouse3.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - additionalMouse3.price))}`, 5);
			} else {
				bytes -= additionalMouse3.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				additionalMouse3.owned = true;
				document.getElementById(`${additionalMouse3.type}_${additionalMouse3.id}_button`).disabled = true;
				printText(`${additionalMouse3.type}_${additionalMouse3.id}_owned`, "Yes");
				bytesPerButtonClick += (additionalMouse3.multiplier - 1);
				printText("bytesPerButtonClick", groupBytes(bytesPerButtonClick));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("320KbpsBitrate") != undefined) {
			_320KbpsBitrate = JSON.parse(localStorage.getItem("320KbpsBitrate"));
			store[32] = _320KbpsBitrate;
		}
		_320KbpsBitrate.buy = () => {
			if (bytes < _320KbpsBitrate.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - _320KbpsBitrate.price))}`, 5);
			} else {
				bytes -= _320KbpsBitrate.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				_320KbpsBitrate.owned = true;
				document.getElementById(`${_320KbpsBitrate.type}_${_320KbpsBitrate.id}_button`).disabled = true;
				printText(`${_320KbpsBitrate.type}_${_320KbpsBitrate.id}_owned`, "Yes");
				musicTrack.multiplier += (_320KbpsBitrate.multiplier - 1);
				printText(`${musicTrack.type}_${musicTrack.id}_multiplier`, musicTrack.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("visualStudioIDE") != undefined) {
			visualStudioIDE = JSON.parse(localStorage.getItem("visualStudioIDE"));
			store[33] = visualStudioIDE;
		}
		visualStudioIDE.buy = () => {
			if (bytes < visualStudioIDE.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - visualStudioIDE.price))}`, 5);
			} else {
				bytes -= visualStudioIDE.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				visualStudioIDE.owned = true;
				document.getElementById(`${visualStudioIDE.type}_${visualStudioIDE.id}_button`).disabled = true;
				printText(`${visualStudioIDE.type}_${visualStudioIDE.id}_owned`, "Yes");
				program.multiplier += (visualStudioIDE.multiplier - 1);
				printText(`${program.type}_${program.id}_multiplier`, program.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("increasedStorageCapacity") != undefined) {
			increasedStorageCapacity = JSON.parse(localStorage.getItem("increasedStorageCapacity"));
			store[34] = increasedStorageCapacity;
		}
		increasedStorageCapacity.buy = () => {
			if (bytes < increasedStorageCapacity.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - increasedStorageCapacity.price))}`, 5);
			} else {
				bytes -= increasedStorageCapacity.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				increasedStorageCapacity.owned = true;
				document.getElementById(`${increasedStorageCapacity.type}_${increasedStorageCapacity.id}_button`).disabled = true;
				printText(`${increasedStorageCapacity.type}_${increasedStorageCapacity.id}_owned`, "Yes");
				everythingMultiplier += (increasedStorageCapacity.multiplier - 1);
				printText("everythingMultiplier", everythingMultiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("virtualMouse") != undefined) {
			virtualMouse = JSON.parse(localStorage.getItem("virtualMouse"));
			store[35] = virtualMouse;
		}
		virtualMouse.buy = () => {
			if (bytes < virtualMouse.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - virtualMouse.price))}`, 5);
			} else {
				bytes -= virtualMouse.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				virtualMouse.owned = true;
				document.getElementById(`${virtualMouse.type}_${virtualMouse.id}_button`).disabled = true;
				printText(`${virtualMouse.type}_${virtualMouse.id}_owned`, "Yes");
				bytesPerButtonClick += (virtualMouse.multiplier - 1);
				printText("bytesPerButtonClick", groupBytes(bytesPerButtonClick));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("4KUHDQuality") != undefined) {
			_4KUHDQuality = JSON.parse(localStorage.getItem("4KUHDQuality"));
			store[36] = _4KUHDQuality;
		}
		_4KUHDQuality.buy = () => {
			if (bytes < _4KUHDQuality.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - _4KUHDQuality.price))}`, 5);
			} else {
				bytes -= _4KUHDQuality.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				_4KUHDQuality.owned = true;
				document.getElementById(`${_4KUHDQuality.type}_${_4KUHDQuality.id}_button`).disabled = true;
				printText(`${_4KUHDQuality.type}_${_4KUHDQuality.id}_owned`, "Yes");
				video.multiplier += (_4KUHDQuality.multiplier - 1);
				printText(`${video.type}_${video.id}_multiplier`, video.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("fileToPDFConverter") != undefined) {
			fileToPDFConverter = JSON.parse(localStorage.getItem("fileToPDFConverter"));
			store[37] = fileToPDFConverter;
		}
		fileToPDFConverter.buy = () => {
			if (bytes < fileToPDFConverter.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - fileToPDFConverter.price))}`, 5);
			} else {
				bytes -= fileToPDFConverter.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				fileToPDFConverter.owned = true;
				document.getElementById(`${fileToPDFConverter.type}_${fileToPDFConverter.id}_button`).disabled = true;
				printText(`${fileToPDFConverter.type}_${fileToPDFConverter.id}_owned`, "Yes");
				pdfDocument.multiplier += (fileToPDFConverter.multiplier - 1);
				printText(`${pdfDocument.type}_${pdfDocument.id}_multiplier`, pdfDocument.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("cdnSponsor") != undefined) {
			cdnSponsor = JSON.parse(localStorage.getItem("cdnSponsor"));
			store[38] = cdnSponsor;
		}
		cdnSponsor.buy = () => {
			if (bytes < cdnSponsor.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - cdnSponsor.price))}`, 5);
			} else {
				bytes -= cdnSponsor.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				cdnSponsor.owned = true;
				document.getElementById(`${cdnSponsor.type}_${cdnSponsor.id}_button`).disabled = true;
				printText(`${cdnSponsor.type}_${cdnSponsor.id}_owned`, "Yes");
				contentDeliveryNetwork.multiplier += (cdnSponsor.multiplier - 1);
				printText(`${contentDeliveryNetwork.type}_${contentDeliveryNetwork.id}_multiplier`, contentDeliveryNetwork.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("httpsProtocol") != undefined) {
			httpsProtocol = JSON.parse(localStorage.getItem("httpsProtocol"));
			store[39] = httpsProtocol;
		}
		httpsProtocol.buy = () => {
			if (bytes < httpsProtocol.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - httpsProtocol.price))}`, 5);
			} else {
				bytes -= httpsProtocol.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				httpsProtocol.owned = true;
				document.getElementById(`${httpsProtocol.type}_${httpsProtocol.id}_button`).disabled = true;
				printText(`${httpsProtocol.type}_${httpsProtocol.id}_owned`, "Yes");
				webServer.multiplier += (httpsProtocol.multiplier - 1);
				printText(`${webServer.type}_${webServer.id}_multiplier`, webServer.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("firmwareUpdate") != undefined) {
			firmwareUpdate = JSON.parse(localStorage.getItem("firmwareUpdate"));
			store[40] = firmwareUpdate;
		}
		firmwareUpdate.buy = () => {
			if (bytes < firmwareUpdate.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - firmwareUpdate.price))}`, 5);
			} else {
				bytes -= firmwareUpdate.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				firmwareUpdate.owned = true;
				document.getElementById(`${firmwareUpdate.type}_${firmwareUpdate.id}_button`).disabled = true;
				printText(`${firmwareUpdate.type}_${firmwareUpdate.id}_owned`, "Yes");
				everythingMultiplier += (firmwareUpdate.multiplier - 1);
				printText("everythingMultiplier", everythingMultiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("superMousePart1") != undefined) {
			superMousePart1 = JSON.parse(localStorage.getItem("superMousePart1"));
			store[41] = superMousePart1;
		}
		superMousePart1.buy = () => {
			if (bytes < superMousePart1.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - superMousePart1.price))}`, 5);
			} else {
				bytes -= superMousePart1.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				superMousePart1.owned = true;
				document.getElementById(`${superMousePart1.type}_${superMousePart1.id}_button`).disabled = true;
				printText(`${superMousePart1.type}_${superMousePart1.id}_owned`, "Yes");
				buttonMultiplier += (superMousePart1.multiplier - 1);
				printText("buttonMultiplier", buttonMultiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("superMousePart2") != undefined) {
			superMousePart2 = JSON.parse(localStorage.getItem("superMousePart2"));
			store[42] = superMousePart2;
		}
		superMousePart2.buy = () => {
			if (bytes < superMousePart2.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - superMousePart2.price))}`, 5);
			} else {
				bytes -= superMousePart2.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				superMousePart2.owned = true;
				document.getElementById(`${superMousePart2.type}_${superMousePart2.id}_button`).disabled = true;
				printText(`${superMousePart2.type}_${superMousePart2.id}_owned`, "Yes");
				bytesPerButtonClick += (superMousePart2.multiplier - 1);
				printText("bytesPerButtonClick", groupBytes(bytesPerButtonClick));
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("hardwareUpgrade") != undefined) {
			hardwareUpgrade = JSON.parse(localStorage.getItem("hardwareUpgrade"));
			store[43] = hardwareUpgrade;
		}
		hardwareUpgrade.buy = () => {
			if (bytes < hardwareUpgrade.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - hardwareUpgrade.price))}`, 5);
			} else {
				bytes -= hardwareUpgrade.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				hardwareUpgrade.owned = true;
				document.getElementById(`${hardwareUpgrade.type}_${hardwareUpgrade.id}_button`).disabled = true;
				printText(`${hardwareUpgrade.type}_${hardwareUpgrade.id}_owned`, "Yes");
				everythingMultiplier += (hardwareUpgrade.multiplier - 1);
				printText("everythingMultiplier", everythingMultiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("serverlessDelivery") != undefined) {
			serverlessDelivery = JSON.parse(localStorage.getItem("serverlessDelivery"));
			store[44] = serverlessDelivery;
		}
		serverlessDelivery.buy = () => {
			if (bytes < serverlessDelivery.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - serverlessDelivery.price))}`, 5);
			} else {
				bytes -= serverlessDelivery.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				serverlessDelivery.owned = true;
				document.getElementById(`${serverlessDelivery.type}_${serverlessDelivery.id}_button`).disabled = true;
				printText(`${serverlessDelivery.type}_${serverlessDelivery.id}_owned`, "Yes");
				contentDeliveryNetwork.multiplier += (serverlessDelivery.multiplier - 1);
				printText(`${contentDeliveryNetwork.type}_${contentDeliveryNetwork.id}_multiplier`, contentDeliveryNetwork.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("serverIntegration") != undefined) {
			serverIntegration = JSON.parse(localStorage.getItem("serverIntegration"));
			store[45] = serverIntegration;
		}
		serverIntegration.buy = () => {
			if (bytes < serverIntegration.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - serverIntegration.price))}`, 5);
			} else {
				bytes -= serverIntegration.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				serverIntegration.owned = true;
				document.getElementById(`${serverIntegration.type}_${serverIntegration.id}_button`).disabled = true;
				printText(`${serverIntegration.type}_${serverIntegration.id}_owned`, "Yes");
				everythingMultiplier += (serverIntegration.multiplier - 1);
				printText("everythingMultiplier", everythingMultiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
			}
		}

		if (localStorage.getItem("theInternet") != undefined) {
			theInternet = JSON.parse(localStorage.getItem("theInternet"));
			store[46] = theInternet;
		}
		theInternet.buy = () => {
			if (bytes < theInternet.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - theInternet.price))}`, 5);
			} else {
				bytes -= theInternet.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				theInternet.owned = true;
				printText(`${theInternet.type}_${theInternet.id}_owned`, "Yes");
				displayInternetItems();
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
				document.getElementById(`${satellites.type}_${satellites.id}_container`).style.display = "block";
			}
		}

		if (localStorage.getItem("satellites") != undefined) {
			satellites = JSON.parse(localStorage.getItem("satellites"));
			store[47] = satellites;
		}
		satellites.buy = () => {
			if (bytes < satellites.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - satellites.price))}`, 5);
			} else {
				bytes -= satellites.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				satellites.owned == true;
				document.getElementById(`${satellites.type}_${satellites.id}_button`).disabled = true;
				printText(`${satellites.type}_${satellites.id}_owned`, "Yes");
				theInternet.multiplier += (satellites.multiplier - 1);
				printText(`${theInternet.type}_${theInternet.id}_multiplier`, theInternet.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
				document.getElementById(`${websites.type}_${websites.id}_container`).style.display = "block";
			}
		}

		if (localStorage.getItem("websites") != undefined) {
			websites = JSON.parse(localStorage.getItem("websites"));
			store[48] = websites;
		}
		websites.buy = () => {
			if (bytes < websites.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - websites.price))}`, 5);
			} else {
				bytes -= websites.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				websites.owned == true;
				document.getElementById(`${websites.type}_${websites.id}_button`).disabled = true;
				printText(`${websites.type}_${websites.id}_owned`, "Yes");
				theInternet.multiplier += (websites.multiplier - 1);
				printText(`${theInternet.type}_${theInternet.id}_multiplier`, theInternet.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
				document.getElementById(`${computers.type}_${computers.id}_container`).style.display = "block";
			}
		}

		if (localStorage.getItem("computers") != undefined) {
			computers = JSON.parse(localStorage.getItem("computers"));
			store[49] = computers;
		}
		computers.buy = () => {
			if (bytes < computers.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - computers.price))}`, 5);
			} else {
				bytes -= computers.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				computers.owned == true;
				document.getElementById(`${computers.type}_${computers.id}_button`).disabled = true;
				printText(`${computers.type}_${computers.id}_owned`, "Yes");
				theInternet.multiplier += (computers.multiplier - 1);
				printText(`${theInternet.type}_${theInternet.id}_multiplier`, theInternet.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
				document.getElementById(`${users.type}_${users.id}_container`).style.display = "block";
			}
		}

		if (localStorage.getItem("users") != undefined) {
			users = JSON.parse(localStorage.getItem("users"));
			store[50] = users;
		}
		users.buy = () => {
			if (bytes < users.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - users.price))}`, 5);
			} else {
				bytes -= users.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				users.owned == true;
				document.getElementById(`${users.type}_${users.id}_button`).disabled = true;
				printText(`${users.type}_${users.id}_owned`, "Yes");
				theInternet.multiplier += (users.multiplier - 1);
				printText(`${theInternet.type}_${theInternet.id}_multiplier`, theInternet.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
				document.getElementById(`${you.type}_${you.id}_container`).style.display = "block";
			}
		}

		if (localStorage.getItem("you") != undefined) {
			you = JSON.parse(localStorage.getItem("you"));
			store[51] = you;
		}
		you.buy = () => {
			if (bytes < you.price) {
				timedPrintText("purchaseStatus", `Insufficient funds. Bytes left to buy item: ${groupBytes(-(bytes - you.price))}`, 5);
			} else {
				bytes -= you.price;
				bytes = Math.floor(bytes * 10) / 10;
				printBytes();
				you.owned == true;
				document.getElementById(`${you.type}_${you.id}_button`).disabled = true;
				printText(`${you.type}_${you.id}_owned`, "Yes");
				theInternet.multiplier += (you.multiplier - 1);
				printText(`${theInternet.type}_${theInternet.id}_multiplier`, theInternet.multiplier);
				getBytesPerSecond();
				timedPrintText("purchaseStatus", "Purchase successful", 5);
				document.getElementById("internet").style.display = "none";
				setTimeout(() => {
					alert("Congratulations on beating my game! I'm impressed you made it this far without getting bored out of your mind. Buying the Internet feels good, doesn't it? I mean, the websites, the networks, everything is now yours, well, except for this game because it's mine. However, there's nothing else for you to do as you erased every possibility that others will surpass you, so I regret to inform you that your data will be wiped. I'm not jealous because you beat my game, but there is literally nothing else I programmed for you to do after you buy yourself. WOAH, YOU BOUGHT YOURSELF IN MY GAME! ROFLMAO XD ... Not sure that's a combination... :/ ...whatever. Anyways, your data will be wiped and you will start from the beginning. I will give you 10 seconds to take a screenshot, picture, whatever you want to post to your friends that you beat my simple game. The timer starts when you close this. Have a good day/night and play again if you want to.");
				}, 500);
				setTimeout(() => {
					localStorage.clear();
					isClearing = true;
					window.location.reload();
				}, 10000);
			}
		}
	}

	printBytes();
	printText("bytesPerButtonClick", groupBytes(bytesPerButtonClick));
	printText("bytesPerSecond", groupBytes(bytesPerSecond));
	printText("buttonMultiplier", buttonMultiplier);
	printText("everythingMultiplier", everythingMultiplier);

	timedPrintText("saveStatus", "Data created/loaded", 5);

	for (let item of store) {
		if (item.type == "internetClicker") {
			if (item.owned == true) {
				displayInternetItems();
			}
		} else {
			if (item.type == "clicker") {
				printText(`${item.type}_${item.id}_price`, groupBytes(item.price));
				printText(`${item.type}_${item.id}_multiplier`, item.multiplier);
				printText(`${item.type}_${item.id}_owned`, item.owned);
			} else if (item.type == "upgrade") {
				if (item.owned == true) {
					document.getElementById(`${item.type}_${item.id}_button`).disabled = true;
					printText(`${item.type}_${item.id}_owned`, "Yes");
				}
			}
		}
	}

	startAutoClicker();
	setInterval(() => {
		saveData();
	}, 60000);
}

window.onunload = () => {
	if (isClearing == false) {
		saveData();
	}
}
