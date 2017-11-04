let testMode = false;

function todoModule(containerElement) {
    const containerHTML = createHtmlElement('div','container', '', document.getElementById(containerElement));

    // priorities class names:
    const priority1ClassName = 'card-danger';
    const priority2ClassName = 'card-warning';
    const priority3ClassName = 'card-info';
    const doneClassName = 'card-success';

    // cards class names:
    const mainCardClassName = 'card card-inverse text-center ';
    const seconderyCardClassName = 'card-block';
    const quoteCardClassName = 'card-blockquote';
    const btnCardCalssName = 'btn btn-success';

    let todoIndex = 0;

    let htmlItemsArray = [];
    // constructor
    function TodoItem(text, priority) {
        this.text = text;
        this.priority = priority;
        this.index = todoIndex;
    }

    function createTodoItemHTML(todoItem) {
        /*
          Item example:
        1  <div class="card card-inverse card-danger text-center">
        2      <div class="card-block">
        3        <blockquote class="card-blockquote">
        4          <p>Details..</p>
        5          <button type="button" class="btn btn-success">Finished</button>
                </blockquote>
              </div>
          </div>
        */

        // 1
        let prioClass = mainCardClassName + getPriorityClassName(todoItem.priority);
        let tmpElement = createHtmlElement('div', prioClass, '', containerHTML);
        htmlItemsArray[todoItem.index] = tmpElement;

        // 2
        tmpElement = createHtmlElement('div', seconderyCardClassName, '', tmpElement);

        // 3
        tmpElement = createHtmlElement('blockquote',quoteCardClassName, '', tmpElement);

        // 4
        createHtmlElement('p','', todoItem.text, tmpElement);

        // 5
        tmpElement = createHtmlElement('button', btnCardCalssName, 'Finished', tmpElement);
        tmpElement.type = 'button';
        tmpElement.setAttribute('data-index', todoItem.index);
        tmpElement.addEventListener('click', markTodoItemAsDone);

    }

    function createHtmlElement(elementType, className, content, fatherElement) {
        let newElement = document.createElement(elementType);
        newElement.className = className;
        newElement.innerHTML = content;

        fatherElement.appendChild(newElement);
        return newElement;
    }

    function getPriorityClassName(priority) {
        switch (priority) {
          case 1:
              return priority1ClassName;
          case 2:
              return priority2ClassName;
          case 3:
              return priority3ClassName;
          default:
              throw 'priority must be a number between 1 and 3';
        }
    }

    function addTodoItem(text, priority) {

        // verify inputs
        if(typeof(text) !== "string")
            throw "text must be string";
        if(isNaN(priority = Number.parseInt(priority)))
            throw "priority must be a number";
        if(priority < 1 || priority > 3)
            throw "priority must be a number between 1 and 3";

        // create todo
        let newItem = new TodoItem(text, priority);
        todoIndex ++;

        // add the new item to the DOM
        createTodoItemHTML(newItem);

        if(testMode)
          console.log("Item added");
    }

    function markTodoItemAsDone(e) {
      e.srcElement.disabled = true;
      e.srcElement.innerHTML = "Done";
      htmlItemsArray[e.srcElement.getAttribute('data-index')].className = mainCardClassName + doneClassName;
    }

    return {
        addTodoItem: addTodoItem,
        markTodoItemAsDone: markTodoItemAsDone
    }


}
