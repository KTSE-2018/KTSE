class Hero extends Person {

  constructor (image, containerSize) {
	  this.ap = 10;  // Action points
	  this.ep = 100; // Energy points
	  this.pl = 1;   // Project level

    super(image, containerSize);
  }

	reduce_ap(amount) {
		this.ap -= amount;
	}

	increase_ap(amount) {
		this.ap += amount;
	}

	reduce_ep(amount) {
		this.ep -= amount;
	}

	increase_ep(amount) {
		this.ep += amount;
	}

	reduce_pl(amount) {
		this.pl -= amount;
	}

	increase_pl(amount) {
		this.pl += amount;
	}

}
