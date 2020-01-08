$(function shoppingList () {
    $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
            let newListItem = $('input#shopping-list-entry').val();
            $('.shopping-list').append(
            `<li>
                <span class='shopping-item'>${newListItem}</span>
                <div class='shopping-item-controls'>
                <button class='shopping-item-toggle'>
                <span class='button-label'>check</span>
                </button>
                <button class='shopping-item-delete'>
                <span class='button-label'>delete</span>
                </button>
                </div>
            </li>`);
        }); 
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        $(this).closest('li').remove();
    });

$(shoppingList)