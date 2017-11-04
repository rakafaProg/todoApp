(function () {
    const t = todoModule('myTodoDiv');
    const detailsHTML = document.getElementById ('detailsTextarea');
    const selectHTML = document.getElementById ('prioritySelect');

    document.getElementById('addItemBtn').addEventListener('click', addTodoItemClicked);

    function addTodoItemClicked(e) {
      e.preventDefault();
      console.log(selectHTML.value);
        t.addTodoItem(detailsHTML.value, selectHTML.value);

    }

    // testing
    if(testMode) {
      t.addTodoItem('Go for shoping', 1);
      t.addTodoItem('Dring some bear with my friends', 2);
      t.addTodoItem('Go to sleep', 3);
    }

})();
