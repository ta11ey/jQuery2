$(document).ready(function(){
	// $('#newTaskForm').hide();


	var listo = [];
	var Task = function(task) {
		this.task = task;
		this.id = 'new';
	}


	var addTask = function(task){
		if(task){
			task = new Task(task);
			listo.push(task)
		
		$('#newItemInput').val('');
		$('.newList').append('<a href = "#" class="" id = "item"><li class = "list-group-item">' + task.task + 
			'<span class = "arrow pull-right"><i class = "glyphicon glyphicon-arrow-right"></span></li></a>')
		}

		$('form').fadeToggle('fast','linear');
		//^^ took out #newListItem so I could return to input
	}

	var advanceTask = function(){$('#item').remove();};
	var advanceTask2 = function(){$('#inProgress').remove();};


	$('#saveNewItem').on('click', function(e){
		e.preventDefault();
		var task = $('#newItemInput').val().trim();
		addTask(task)
	})

	$('#newTaskForm').on('click', function(){  // toggles view of
		$(' #newListItem').fadeToggle('fast', 'linear');
	})

	$('#cancel').on('click', function(e){
		e.preventDefault();
		$('newTaskForm, #newListItem').fadeToggle('fast', 'linear')
	})

	// $(document).on('click', '#item', function(e) {
	// 	e.preventDefault();
	// })

	// $(document).on('click', '#item', function(e) {
	// 	e.preventDefault();
	// 	var task = this;
	// 	advanceTask(task);
	// 	this.id = 'inProgress';
	// });

	$(document).on('click', '#item', function(e) {
		e.preventDefault();
		var task = this;
		advanceTask(task);
		this.id = 'inProgress';
		$('#currentList').append(this.outerHTML);
	})


    $(document).on('click', '#inProgress', function (e) {
        e.preventDefault();
        var task = this;
        advanceTask2(task);
        task.id = "archived";
        var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
        
        $('#archivedList').append(changeIcon);
    });



});