var form = {
	name: {
		value: 'Masha',
		validationRules: {
			minLength: 2,
			maxLength: 20,
			required: false,
		},
		errorMessage: '',
	},
	email: {
		value: 'sdf@fgfdg',
		validationRules: {
			email: true,
			required: true,
		},
		errorMessage: '',
	}
};

console.log(validation(form));

var validation = {

}

function validation(obj) {
	for (var key in obj) {
		if (isRequired(obj[key])) {
			if (isEmpty(obj[key])) {
				return false;
			}
		}

		if (!minLengthValid(obj[key])){
			return false;
		}

		if (!maxLengthValid(obj[key])){
			return false;
		}

		if (!isEmail(obj[key])) {
			return false;
		}
	}

	return true;
}

function minLengthValid(obj) {
	if (obj.validationRules.minLength) {
		if (obj.value.length < obj.validationRules.minLength) {
	    obj.errorMessage = 'Min length ' + obj.validationRules.minLength;
	    return false;
	  }
	}
  return true;
};

function maxLengthValid(obj) {
	if (obj.validationRules.maxLength) {
		if (obj.value.length > obj.validationRules.maxLength) {
	    obj.errorMessage = 'Max length ' + obj.validationRules.maxLength;
	    return false;
	  }
	}

  return true;
};

function isRequired(obj) {
  if (obj.validationRules.required) {
    return true;
  }

	obj.errorMessage = 'Its required field';
	return false;
}

function isEmail(obj) {
	if (obj.validationRules.email) {
		for (var i = 0; i < obj.value.length; i++) {
	    if (obj.value.charAt(i) === '@') {
	      return true;
	    }
	  }

	  obj.errorMessage = 'Enter valid email';
	  return false;
	}
  return true;
}

function isEmpty(obj) {
	if (obj.value.length === 0) {
		return true;
	}

	return false;
}
