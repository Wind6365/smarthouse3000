
var HouseComponent = function() {
	this.componentTag = 'li';
};

HouseComponent.prototype.remove = function () {
	if (this.componentElement && this.componentElement.parentElement) {
		this.componentElement.parentElement.removeChild(this.componentElement);
	}
}
