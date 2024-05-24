document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const goodExperienceInputs = document.querySelectorAll('input[name="goodExperience"]');
    const feedbackTextarea = document.getElementById('feedback');
    const suggestionsTextarea = document.getElementById('suggestions');

    form.addEventListener('submit', function (event) {

        let goodExperienceSelected = false;
        goodExperienceInputs.forEach(input => {
            if (input.checked) {
                goodExperienceSelected = true;
            }
        });

        if (!goodExperienceSelected) {
            alert('Por favor, seleccione si ha tenido una buena experiencia en nuestra web.');
            event.preventDefault();
            return;
        }

        if (feedbackTextarea.value.trim() === '') {
            alert('Por favor, indique algún contenido que le gustaría ver en nuestra web.');
            event.preventDefault();
            return;
        }

        if (feedbackTextarea.value.length > 200) {
            alert('El comentario de feedback no puede tener más de 200 caracteres.');
            event.preventDefault();
            return;
        }


        if (suggestionsTextarea.value.length > 200) {
            alert('El comentario de críticas no puede tener más de 200 caracteres.');
            event.preventDefault();
            return;
        }


    });
});