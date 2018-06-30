jQuery(function () {
    let height;
    let width;
    let color;

    $('#sizePicker').submit(function (event) {
        event.preventDefault();
        height = $('#inputHeight').val();
        width = $('#inputWidth').val();
        console.log(height, width);
        makeGrid(height, width);
    })

    // When size is submitted by the user, call makeGrid()

    function makeGrid(a, b) {
        $('tr').remove();
        for (let i = 1; i <= a; i++) {
            $('#pixelCanvas').append('<tr id=table' + i + '> </tr>');
            for (let j = 1; j <= b; j++) {
                $('#table' + i).append('<td></td>');

            }
        }

        $('td').click(function addColor() {
            color = $('#colorPicker').val();


            if ($(this).attr('style')) {
                $(this).removeAttr('style')
            }
            else {
                $(this).attr('style', 'background-color:' + color)
            }
        })
    }


    // Your code goes here!





});
