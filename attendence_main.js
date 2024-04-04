<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
$(document).ready(function() {
    // Button click event handler
    $('#addTodoButton').click(function() {
        // Get the input value
        var todoText = $('#task-form').val();

        // Create a new TODO item
        var todoItem = $('<li>').text(todoText);

        // Append the TODO item to the list
        $('#task-list').append(todoItem);

        // Clear the input field
        $('#task-list').val('');
    });
});