$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

$("[name='my-checkbox']").bootstrapSwitch();