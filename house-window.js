
var HouseWindow = function (parentElement, id) {
	this.parentElement = parentElement;
	this.componentElement = null;
	this.id = id;
	this.isOpen = false;
	this.curtainState = 0; // 0 - opened, 100 - closed
	this.type = 'window';
};

HouseWindow.prototype = Object.create(HouseComponent.prototype);
HouseWindow.prototype.constructor = HouseWindow;

HouseWindow.prototype.render = function () {
	if (this.componentElement == null) {
		this.componentElement = document.createElement(this.componentTag);
		this.parentElement.appendChild(this.componentElement);
	}
	this.componentElement.innerHTML = '<div><h4>Window:</h4>' +
		'<div><label for="light-switch-' + this.id + '">Is Opened: </label><input type="checkbox" id="open-switch-' + this.id + '" /></div>' +
		'<div><span>Curtain Opened: ' + (100 - this.curtainState) + '%</span></div>' +
		'</div>';
	this.isOpenEl = document.getElementById('open-switch-' + this.id);
	this.openClose(this.isOpen);
	this.isOpenEl.onchange = this.openCloseHandler.bind(this);
}

HouseWindow.prototype.scrollCurtain = function (scroll) {
	if (scroll > 0) {
		this.curtainState = (this.curtainState + scroll) > 100
			? 100
			: this.curtainState + scroll;
	} else {
		this.curtainState = (this.curtainState + scroll) < 0
			? 0
			: this.curtainState + scroll;
	}
}

HouseWindow.prototype.openClose = function (state) {
	this.isOpen = state;
	this.isOpenEl.checked = this.isOpen;
}

HouseWindow.prototype.openCloseHandler = function (event) {
	this.isOpen = event.target.checked;
}
