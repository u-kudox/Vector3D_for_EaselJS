/**
 * Vector3D for EaselJS
 * Version: 1.10
 * Contact and bug reports : http://kudox.jp/contact or http://twitter.com/u_kudox
 * License : public domain
 **/

this.createjs = this.createjs || {};

(function(window) {
	"use strict";

	function Vector3D(x, y, z, w) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
		this.w = w || 0;
	}

	var s = Vector3D;

	var p = Vector3D.prototype = {
		get length() {
			var x = this.x;
			var y = this.y;
			var z = this.z;
			return Math.sqrt(x * x + y * y + z * z);
		},

		get lengthSquared() {
			var x = this.x;
			var y = this.y;
			var z = this.z;
			return x * x + y * y + z * z;
		}
	};

	p.constructor = Vector3D;

	p.x;
	p.y;
	p.z;
	p.w;

	p.add = function(a) {
		return new Vector3D(this.x + a.x, this.y + a.y, this.z + a.z);
	};

	p.subtract = function(a) {
		return new Vector3D(this.x - a.x, this.y - a.y, this.z - a.z);
	};

	p.equals = function(toCompare, allFour) {
		allFour = allFour || false;
		if (allFour) {
			return this.x === toCompare.x && this.y === toCompare.y && this.z === toCompare.z && this.w === toCompare.w;
		} else {
			return this.x === toCompare.x && this.y === toCompare.y && this.z === toCompare.z;
		}
	};

	p.nearEquals = function(toCompare, tolerance, allFour) {
		allFour = allFour || false;
		var dx = Math.abs(toCompare.x - this.x);
		var dy = Math.abs(toCompare.y - this.y);
		var dz = Math.abs(toCompare.z - this.z);
		if (allFour) {
			var dw = Math.abs(toCompare.w - this.w);
			return dx < tolerance && dy < tolerance && dz < tolerance && dw < tolerance;
		} else {
			return dx < tolerance && dy < tolerance && dz < tolerance;
		}
	};

	p.negate = function() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
	};

	p.incrementBy = function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
	};

	p.decrementBy = function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
	};

	p.scaleBy = function(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	};

	p.project = function() {
		var w = this.w;
		this.x /= w;
		this.y /= w;
		this.z /= w;
	};

	p.normalize = function() {
		var length = this.length;
		if (length !== 0) {
			this.x /= length;
			this.y /= length;
			this.z /= length;
		}
		return length;
	};

	p.dotProduct = function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z;
	};

	p.crossProduct = function(a) {
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var ax = a.x;
		var ay = a.y;
		var az = a.z;
		return new Vector3D(y * az - z * ay, z * ax - x * az, x * ay - y * ax, 1);
	};

	p.setTo = function(xa, ya, za) {
		this.x = xa;
		this.y = ya;
		this.z = za;
	};

	p.copyFrom = function(sourceVector3D) {
		this.x = sourceVector3D.x;
		this.y = sourceVector3D.y;
		this.z = sourceVector3D.z;
	};

	p.clone = function() {
		return new Vector3D(this.x, this.y, this.z, this.w);
	};

	p.toString = function() {
		return "[Vector3D (x=" + this.x + " y=" + this.y + " z=" + this.z + ")]";
	};

	s.X_AXIS = new Vector3D(1, 0, 0);
	s.Y_AXIS = new Vector3D(0, 1, 0);
	s.Z_AXIS = new Vector3D(0, 0, 1);

	s.distance = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2) + Math.pow(pt2.z - pt1.z, 2));
	};

	s.angleBetween = function(a, b) {
		var cos = a.dotProduct(b) / (a.length * b.length);
		if (1 < cos) return 0;
		if (cos < -1) return Math.PI;
		return Math.acos(cos);
	};

	createjs.Vector3D = Vector3D;
}(window));
