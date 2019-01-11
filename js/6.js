var form = {
	name: {
		value: 'Masha',
		validationRules: {
			minLength: 3,
			maxLength: 20,
			required: true,
		},
		errorMessage: '',
	},
	email: {
		value: 'email@example.com',
		validationRules: {
			email: true,
			required: true,
		},
		errorMessage: '',
	},
  validMinLength: function() {
    if (this.name.value.length < this.name.validationRules.minLength) {
      this.name.errorMessage = 'Min length ' + this.name.validationRules.minLength;
      return false;
    } else {
      return true;
    }
  },
  validMaxLength: function() {
    if (this.name.value.length > this.name.validationRules.maxLength) {
      this.name.errorMessage = 'Max length ' + this.name.validationRules.maxLength;
      return false;
    } else {
      return true;
    }
  },
  requiredName: function() {
    if (this.name.validationRules.required && this.name.value.length === 0) {
      this.name.errorMessage = 'Enter your Name';
      return false;
    } else {
      return true;
    }
  },
  requiredEmail: function() {
    if (this.email.validationRules.required && this.email.value.length === 0) {
      this.email.errorMessage = 'Enter your Name';
      return false;
    } else {
      return true;
    }
  },
  validEmail: function() {
    for (var i = 0; i < this.email.value.length; i++) {
      if (this.email.value.charAt(i) === '@') {
        return true;
      }
    }

    this.email.errorMessage = 'Enter valid email'
    return false;
  }
};

console.log(minLengthValid(form));
console.log(maxLengthValid(form));
console.log(isRequiredName(form));
console.log(isRequiredEmail(form));
console.log(isEmail(form));
console.log(validation(form));

console.log(form.validMaxLength());
console.log(form.validMinLength());
console.log(form.requiredName());
console.log(form.requiredEmail());
console.log(form.validEmail());

function validation(obj) {
  if (isRequiredName(obj)) {
    if (minLengthValid(obj) && maxLengthValid(obj)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

  if (isRequiredEmail(obj)) {
    if (isEmail(obj)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function minLengthValid(obj) {
  if (obj.name.value.length < obj.name.validationRules.minLength) {
    obj.name.errorMessage = 'Min length ' + obj.name.validationRules.minLength;
    return false;
  } else {
    return true;
  }
};

function maxLengthValid(obj) {
  if (obj.name.value.length > obj.name.validationRules.maxLength) {
    obj.name.errorMessage = 'Max length ' + obj.name.validationRules.maxLength;
    return false;
  } else {
    return true;
  }
};

function isRequiredName(obj) {
  if (obj.name.validationRules.required && obj.name.value.length === 0) {
    obj.name.errorMessage = 'Enter your Name';
    return false;
  } else {
    return true;
  }
}

function isRequiredEmail(obj) {
  if (obj.email.validationRules.required && obj.email.value.length === 0) {
    obj.email.errorMessage = 'Enter your Email';
    return false;
  } else {
    return true;
  }
}

function isEmail(obj) {
  for (var i = 0; i < obj.email.value.length; i++) {
    if (obj.email.value.charAt(i) === '@') {
      return true;
    }
  }

  obj.email.errorMessage = 'Enter valid email'
  return false;
}
