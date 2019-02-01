$(function(){
    const $results = $('.js-results');
    const $form = $('#number-chooser');
    const $formInput = $('#number-choice');


    function createListEntry(spanValue,className) {
        const newDiv = $('<div class="fizz-buzz-item"></div>')
                        .append(`<span>${spanValue}</span>`);
        newDiv.addClass(className);
        return newDiv[0];
    }

    $form.on('submit', function handleSubmit(e) {
        e.preventDefault();
        let numberOfIterations = $formInput.val();



        for(let i=1; i<=numberOfIterations;i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                $results.append(createListEntry('fizzbuzz','fizzbuzz'));
                continue;
            }
            if (i % 5 === 0) {
                $results.append(createListEntry('buzz','buzz'));
                continue;
            }
            if (i % 3 === 0) {
                $results.append(createListEntry('fizz','fizz'));
                continue;
            }
            $results.append(createListEntry(i));

        }
        
    })
});