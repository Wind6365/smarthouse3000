
var SmartHouse = function (componentContainer) {
	this.nextComponentId = 0;
	this.components = [];
	this.componentContainer = componentContainer;
};

SmartHouse.prototype.render = function () {
	this.components.forEach(function (component) {
		component.render();
	});
}

SmartHouse.prototype.doComponentAction = function (type, action) {
	this.components.forEach(function (component) {
		if (component.type === type) {
			action(component);
		}
	});
	this.render();
}

SmartHouse.prototype.switchLight = function (state) {
	this.doComponentAction('light', function (component) {
		component.switchLight(state);
	});
}

SmartHouse.prototype.toggleWindows = function (state) {
	this.doComponentAction('window', function (component) {
		component.openClose(state);
	});
}

SmartHouse.prototype.scrollCurtains = function (state) {
	this.doComponentAction('window', function (component) {
		component.scrollCurtain(state);
	});
}

SmartHouse.prototype.addComponent = function (itemConstructor) {
	this.components.push(new itemConstructor(componentContainer, this.nextComponentId++));
	this.render();
}

SmartHouse.prototype.removeComponent = function (type) {
	var removedComponent = null;
	this.components.forEach(function (component) {
		if (component.type === type && removedComponent === null) {
			component.remove();
			removedComponent = component;
		}
	});
	if (removedComponent) {
		this.components.splice(this.components.indexOf(removedComponent), 1);
		this.render();
	}
}
