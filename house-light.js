
var HouseLight = function (parentElement, id) {
	this.parentElement = parentElement;
	this.componentElement = null;
	this.id = id;
	this.switch = false;
	this.type = 'light';
};

HouseLight.prototype = Object.create(HouseComponent.prototype);
HouseLight.prototype.constructor = HouseLight;

HouseLight.prototype.render = function () {
	if (this.componentElement == null) {
		this.componentElement = document.createElement(this.componentTag);
		this.parentElement.appendChild(this.componentElement);
		this.componentElement.innerHTML = '<div><h4>Light:</h4><div><label for="light-switch-' + this.id + '">Switch on/off: </label><input type="checkbox" id="light-switch-' + this.id + '" value="' + this.switch + '" /></div></div>';
		this.switchEl = document.getElementById('light-switch-' + this.id);
		this.switchEl.onchange = this.switchLightHandler.bind(this);
	}
}

HouseLight.prototype.switchLight = function (state) {
	this.switch = state;
	this.switchEl.checked = this.switch;
}

HouseLight.prototype.switchLightHandler = function (event) {
	this.switch = event.target.checked;
}
