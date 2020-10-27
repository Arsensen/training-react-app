const validators = {
    required : value => (value ? false : true),
    mustBeNumber : value => (isNaN(value) ? true : undefined),
    minValue : min => value => value.length >= min ? undefined : true,
    composeValidators : (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)
}

export default validators